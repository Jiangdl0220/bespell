"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import RequireAuth from "@/components/require-auth";

const SealStamp = dynamic(() => import("@/components/seal-stamp"), { ssr: false });

export default function DonePage() {
  const router = useRouter();
  const p = useSearchParams();
  const correct = +((p.get("correct"))||0), attempts = +((p.get("attempts"))||0);
  const accuracy = +((p.get("accuracy"))||0), combo = +((p.get("combo"))||0), time = +((p.get("time"))||0);
  const starCount = accuracy>=90?5:accuracy>=75?4:accuracy>=60?3:accuracy>=40?2:1;
  const m = Math.floor(time/60), s = time%60;

  return (
    <RequireAuth>
    <div className="min-h-screen flex items-center justify-center p-6 relative z-10">
      {/* 3D Seal Stamp */}
      <SealStamp trigger={true} />

      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="w-full max-w-sm text-center">
        <div className="flex justify-center gap-1 mb-8">
          {[1,2,3,4,5].map(i => (
            <motion.span key={i} initial={{opacity:0,scale:0,y:-20}}
              animate={{opacity:i<=starCount?1:.2,scale:i<=starCount?1:.6,y:0}}
              transition={{delay:i*.08,type:"spring",stiffness:300}}
              className="text-3xl">
              {i<=starCount?"\u2b50":"\u2606"}
            </motion.span>
          ))}
        </div>

        <h1 className="display text-3xl mb-2" style={{color:"var(--accent)"}}>
          {accuracy>=80?"\u592a\u68d2\u4e86\uff01":accuracy>=50?"\u8fd8\u4e0d\u9519":"\u7ee7\u7eed\u52a0\u6cb9"}
        </h1>
        <p className="text-sm mb-10" style={{color:"var(--text2)"}}>正确率 {accuracy}%</p>

        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            {v:correct,l:"\u6b63\u786e"}, {v:combo,l:"\u6700\u9ad8\u8fde\u51fb"}, {v:`${m}:${String(s).padStart(2,"0")}`,l:"\u7528\u65f6"}
          ].map(d => (
            <div key={d.l} className="card py-3 px-2">
              <div className="text-lg font-bold">{d.v}</div>
              <div className="text-xs mt-0.5" style={{color:"var(--text2)"}}>{d.l}</div>
            </div>
          ))}
        </div>

        <button onClick={()=>router.back()} className="btn btn-primary w-full py-3.5 text-sm">再来一次</button>
        <button onClick={()=>router.push("/")} className="w-full text-xs py-3 mt-2" style={{color:"var(--text2)"}}>
          课程列表
        </button>
      </motion.div>
    </div>
    </RequireAuth>
  );
}
