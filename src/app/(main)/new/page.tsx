import { getSessionUserId } from "@/lib/auth";
import { redirect } from "next/navigation";
import NewCoursePage from "@/components/new-course-page";

export const dynamic = "force-dynamic";

export default async function NewPage() {
  const userId = await getSessionUserId();
  if (!userId) redirect("/login");
  return <NewCoursePage />;
}
