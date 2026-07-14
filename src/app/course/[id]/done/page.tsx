"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function DonePage() {
  const router = useRouter();
  const p = useSearchParams();
  const correct = +((p.get("correct"))||0), attempts = +((p.get("attempts"))||0);
  const accuracy = +((p.get("accuracy"))||0), combo = +((p.get("combo"))||0), time = +((p.get("time"))||0);
  const starCount = accuracy>=90?5:accuracy>=75?4:accuracy>=60?3:accuracy>=40?2:1;
  const m = Math.floor(time/60), s = time%60;

  return (
    <div className="min-h-screen bgdot flex items-center justify-center p-6">
      <div className="w-full max-w-sm text-center">
        <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",stiffness:180,delay:.2}}
          className="display text-5xl mb-6 tracking-widest" style={{color:"var(--accent)"}}>
          {"★".repeat(starCount)}{"☆".repeat(5-starCount)}
        </motion.div>
        <h1 className="display text-2xl font-bold mb-2">很棒！</h1>
        <p className="text-sm opacity-30 mb-10">正确率 {accuracy}%</p>

        <div className="grid grid-cols-2 gap-3 mb-10 anim-in">
          {[{label:"正确",val:correct},{label:"尝试",val:attempts},{label:"连击",val:`×${combo}`},{label:"用时",val:`${m}:${String(s).padStart(2,"0")}`}].map(st=>(
            <div key={st.label} className="card py-4 px-4">
              <p className="text-xs opacity-25 uppercase tracking-wider mb-1">{st.label}</p>
              <p className="text-xl font-bold tabular-nums">{st.val}</p>
            </div>
          ))}
        </div>

        <div className="space-y-3 anim-in">
          <button onClick={()=>router.back()} className="btn btn-primary w-full py-3.5 text-sm tracking-wide">再来一次</button>
          <button onClick={()=>router.push("/")} className="w-full text-xs opacity-20 hover:opacity-40 transition-opacity py-3">课程列表</button>
        </div>
      </div>
    </div>
  );
}
