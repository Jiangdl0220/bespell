import Link from "next/link";
import { getSessionUserId } from "@/lib/auth";
import { getDb } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import CourseList from "./course-list";
import LogoutButton from "@/components/logout-button";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const userId = await getSessionUserId();
  if (!userId) return null;

  const db = getDb();
  const userResults = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const user = userResults[0];

  return (
    <div className="min-h-screen bgdot">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="display text-3xl font-bold text-[#1a1a1a] tracking-tight">
              BeSpell
            </h1>
            <p className="text-xs text-[#1a1a1a]/30 mt-1">
              {user?.username}
            </p>
          </div>
          <LogoutButton />
        </header>

        {/* CTA */}
        <Link
          href="/new"
          className="btn btn-ink w-full py-3.5 text-sm mb-8 tracking-wide"
        >
          + 新建课程
        </Link>

        {/* Section title */}
        <h2 className="text-xs font-semibold text-[#1a1a1a]/25 uppercase tracking-[0.15em] mb-4">
          我的课程
        </h2>
        <CourseList />
      </div>
    </div>
  );
}
