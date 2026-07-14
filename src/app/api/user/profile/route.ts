import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { getSessionUserId } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const db = await getDb();
  const rows = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const user = rows[0];
  if (!user) return NextResponse.json({ error: "用户不存在" }, { status: 404 });

  return NextResponse.json({
    id: user.id,
    username: user.username,
    nickname: user.nickname || user.username,
    createdAt: user.createdAt,
  });
}

export async function PATCH(req: NextRequest) {
  const userId = await getSessionUserId();
  if (!userId) return NextResponse.json({ error: "未登录" }, { status: 401 });

  const { nickname } = await req.json();
  if (!nickname || typeof nickname !== "string" || nickname.trim().length < 1 || nickname.trim().length > 20) {
    return NextResponse.json({ error: "昵称需要 1-20 个字符" }, { status: 400 });
  }

  const db = await getDb();
  await db.update(users).set({ nickname: nickname.trim() }).where(eq(users.id, userId));

  return NextResponse.json({ success: true, nickname: nickname.trim() });
}
