import ReviewContent from "@/components/review-content";
import RequireAuth from "@/components/require-auth";

export const dynamic = "force-dynamic";

export default function ReviewPage() {
  return (
    <RequireAuth>
      <ReviewContent />
    </RequireAuth>
  );
}
