import Link from "next/link";
import { redirect } from "next/navigation";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import CourseList from "./course-list";
import LogoutButton from "@/components/logout-button";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");
  const db = await getDb();
  const userResults = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const user = userResults[0];

  return (
    <div className="min-h-screen bgdot">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="display text-3xl font-bold tracking-tight">BeSpell</h1>
            <p className="text-xs opacity-40 mt-1">{user?.username}</p>
          </div>
          <LogoutButton />
        </header>
        <Link href="/new" className="btn btn-primary w-full py-3.5 text-sm mb-8 tracking-wide">+ 新建课程</Link>
        <h2 className="text-xs font-semibold opacity-40 uppercase tracking-[.15em] mb-4">我的课程</h2>
        <CourseList />
      </div>
    </div>
  );
}
