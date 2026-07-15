import { NextRequest, NextResponse } from "next/server";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { avatar } = (await req.json()) as { avatar: string };
  if (!avatar || !avatar.startsWith("data:image/")) {
    return NextResponse.json({ error: "Invalid avatar" }, { status: 400 });
  }

  // Limit avatar size to ~200KB (base64)
  if (avatar.length > 300000) {
    return NextResponse.json({ error: "Avatar too large" }, { status: 413 });
  }

  const db = await getDb();
  await db.update(users).set({ avatar }).where(eq(users.id, userId));

  return NextResponse.json({ success: true });
}
