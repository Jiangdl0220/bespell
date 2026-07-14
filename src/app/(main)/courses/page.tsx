import Link from "next/link";
import CourseList from "@/app/course-list";

export const dynamic = "force-dynamic";

export default function CoursesPage() {
  return (
    <div className="page-container">
      <header className="page-header">
        <div>
          <h1 className="display text-3xl" style={{ color: "var(--accent)" }}>BeSpell</h1>
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
