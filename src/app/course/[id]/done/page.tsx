"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function DonePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const correct = Number(searchParams.get("correct")) || 0;
  const attempts = Number(searchParams.get("attempts")) || 0;
  const accuracy = Number(searchParams.get("accuracy")) || 0;
  const combo = Number(searchParams.get("combo")) || 0;
  const time = Number(searchParams.get("time")) || 0;

  const stars = accuracy >= 90 ? 5 : accuracy >= 75 ? 4 : accuracy >= 60 ? 3 : accuracy >= 40 ? 2 : 1;
  const mins = Math.floor(time / 60);
  const secs = time % 60;

  return (
    <div className="min-h-screen bgdot flex items-center justify-center p-6">
      <div className="w-full max-w-sm text-center">
        {/* Stars */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 180, delay: .2 }}
          className="display text-5xl text-[#c98a2b] mb-6 tracking-widest"
        >
          {"★".repeat(stars)}{"☆".repeat(5 - stars)}
        </motion.div>

        <h1 className="display text-2xl font-bold text-[#1a1a1a] mb-2">
          很棒！
        </h1>
        <p className="text-sm text-[#1a1a1a]/40 mb-10">
          正确率 {accuracy}%
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-10 anim-in">
          {[
            { label: "正确", val: correct },
            { label: "尝试", val: attempts },
            { label: "连击", val: `×${combo}` },
            { label: "用时", val: `${mins}:${secs.toString().padStart(2, "0")}` },
          ].map((s) => (
            <div key={s.label} className="card py-4 px-4">
              <p className="text-xs text-[#1a1a1a]/30 uppercase tracking-wider mb-1">
                {s.label}
              </p>
              <p className="text-xl font-bold text-[#1a1a1a] tabular-nums">
                {s.val}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 anim-in">
          <button
            onClick={() => router.back()}
            className="btn btn-ink w-full py-3.5 text-sm tracking-wide"
          >
            再来一次
          </button>
          <button
            onClick={() => router.push("/")}
            className="w-full text-xs text-[#1a1a1a]/30 hover:text-[#1a1a1a]/50 transition-colors py-3"
          >
            课程列表
          </button>
        </div>
      </div>
    </div>
  );
}
