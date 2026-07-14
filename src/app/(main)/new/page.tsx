import { getSessionUserId } from "@/lib/auth";
import { redirect } from "next/navigation";
import CourseCreator from "@/components/course-creator";

export const dynamic = "force-dynamic";

export default async function NewCoursePage() {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");
  return <CourseCreator />;
}
