import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { battles } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

// SSE stream for battle events
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code: roomCode } = await params;
  const userId = await getSessionUserId();
  if (!userId) return new Response("Unauthorized", { status: 401 });

  const encoder = new TextEncoder();
  let closed = false;

  const stream = new ReadableStream({
    async start(controller) {
      let lastStatus = "waiting";

      const send = (data: Record<string, unknown>) => {
        if (closed) return;
        controller.enqueue(encoder.encode(`data: ${JSON.stringify(data)}\n\n`));
      };

      while (!closed) {
        try {
          const db = await getDb();
          const rows = await db
            .select()
            .from(battles)
            .where(eq(battles.roomCode, roomCode))
            .limit(1);

          if (rows.length === 0) {
            send({ event: "error", message: "Room not found" });
            break;
          }

          const battle = rows[0];

          if (battle.status !== lastStatus) {
            lastStatus = battle.status;
            if (battle.status === "active") {
              send({
                event: "start",
                opponentJoined: true,
                maxPeeks: battle.maxPeeks,
              });
            } else if (battle.status === "done") {
              send({
                event: "done",
                winnerId: battle.winnerId,
              });
              controller.close();
              break;
            }
          }
        } catch {
          // ignore poll errors
        }

        // Poll every 1 second
        await new Promise((r) => setTimeout(r, 1000));
      }
    },
    cancel() {
      closed = true;
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
