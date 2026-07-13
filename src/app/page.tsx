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
  if (!userId) return null; // middleware handles redirect

  const db = getDb();
  const userResults = await db
    .select()
    .from(users)
    .where(eq(users.id, userId))
    .limit(1);

  const user = userResults[0];

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Left accent */}
      <div className="fixed left-0 top-0 h-full w-2 bg-[#c98a2b]" />

      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-serif text-3xl font-bold text-[#1a1a1a]">
              BeSpell
            </h1>
            <p className="text-sm text-[#1a1a1a]/50 mt-1">
              你好，{user?.username}
            </p>
          </div>
          <LogoutButton />
        </header>

        {/* New course button */}
        <Link
          href="/new"
          className="block w-full bg-[#1a1a1a] text-[#f5f0e8] text-center py-4 text-base font-semibold tracking-wide
                     hover:bg-[#c98a2b] transition-colors duration-200 mb-8"
        >
          + 新建课程
        </Link>

        {/* Course list */}
        <CourseList />
      </div>
    </div>
  );
}
