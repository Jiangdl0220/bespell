import Link from "next/link";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import CourseList from "@/app/course-list";

export const dynamic = "force-dynamic";

export default async function CoursesPage() {
  const userId = await getSessionUserId();
  if (!userId) return null;
  const db = await getDb();
  const userResults = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  const user = userResults[0];

  return (
    <div className="page-container">
      <header className="page-header">
        <div>
          <h1 className="display text-3xl" style={{ color: "var(--accent)" }}>BeSpell</h1>
          <p className="text-xs mt-1" style={{ color: "var(--text2)" }}>{user?.username}</p>
        </div>
      </header>

      <Link href="/new" className="btn btn-primary w-full py-3.5 text-sm mb-10">
        + 新建课程
      </Link>

      <h2 className="text-xs font-semibold uppercase tracking-[.15em] mb-5" style={{ color: "var(--text2)" }}>
        我的课程
      </h2>
      <CourseList />
    </div>
  );
}
