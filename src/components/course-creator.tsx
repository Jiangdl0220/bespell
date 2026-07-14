"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SCENE_PRESETS, DIFFICULTY_LEVELS, SENTENCE_COUNTS } from "@/lib/ai";

const desc: Record<string,string> = { A1:"零基础",A2:"日常",B1:"简单对话",B2:"深度交流",C1:"专业表达" };

function SelBtn({ selected, onClick, children }: { selected: boolean; onClick: ()=>void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className="flex-1 py-3 text-center border transition-all"
      style={{
        borderColor: selected ? "var(--accent)" : "var(--border)",
        background: selected ? "rgba(212,166,89,0.08)" : "transparent",
        color: selected ? "var(--accent)" : "var(--text2)",
        fontWeight: selected ? 600 : 400,
      }}>
      {children}
    </button>
  );
}

export default function CourseCreator() {
  const router = useRouter();
  const [scene, setScene] = useState("");
  const [cs, setCs] = useState("");
  const [diff, setDiff] = useState("");
  const [cnt, setCnt] = useState(30);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const activeScene = scene === "__custom__" ? cs : scene;
  const ok = activeScene && diff && !loading;

  const submit = async () => {
    if (!ok) return; setError(""); setLoading(true);
    const res = await fetch("/api/generate", {
      method:"POST", headers:{"Content-Type":"application/json"},
      body:JSON.stringify({scene:activeScene,difficulty:diff,count:cnt}),
    });
    const data = await res.json();
    if (!res.ok) { setError(data.error||"生成失败"); setLoading(false); return; }
    router.push(`/course/${data.courseId}`);
  };

  return (
    <div className="min-h-screen bgdot">
      <div className="max-w-xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="display text-2xl font-bold">新建课程</h1>
          <button onClick={()=>router.push("/")} className="btn btn-ghost text-xs">返回</button>
        </div>
        <div className="space-y-8 anim-in">
          <div>
            <label className="block text-xs font-semibold opacity-20 uppercase tracking-[.15em] mb-3">对话场景</label>
            <div className="grid grid-cols-4 gap-2">
              {SCENE_PRESETS.map(s=>(
                <button key={s} onClick={()=>setScene(s)}
                  className="py-2.5 px-2 text-xs text-center border transition-all"
                  style={{
                    borderColor: scene===s ? "var(--accent)" : "var(--border)",
                    background: scene===s ? "rgba(212,166,89,0.08)" : "transparent",
                    color: scene===s ? "var(--accent)" : "var(--text2)",
                    fontWeight: scene===s ? 600 : 400,
                  }}>{s}</button>
              ))}
              <button onClick={()=>setScene("__custom__")}
                className="py-2.5 px-2 text-xs text-center border transition-all"
                style={{
                  borderColor: scene==="__custom__" ? "var(--accent)" : "var(--border)",
                  background: scene==="__custom__" ? "rgba(212,166,89,0.08)" : "transparent",
                  color: scene==="__custom__" ? "var(--accent)" : "var(--text2)",
                  fontWeight: scene==="__custom__" ? 600 : 400,
                }}>自定义</button>
            </div>
            {scene==="__custom__"&&(
              <motion.input initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}}
                type="text" value={cs} onChange={e=>setCs(e.target.value)} placeholder="输入场景..."
                className="input mt-3 text-sm" autoFocus/>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold opacity-20 uppercase tracking-[.15em] mb-3">难度等级</label>
            <div className="flex gap-2">
              {DIFFICULTY_LEVELS.map(d=>(
                <SelBtn key={d} selected={diff===d} onClick={()=>setDiff(d)}>
                  <span className="block text-sm">{d}</span>
                  <span className="block text-xs opacity-30 mt-0.5">{desc[d]}</span>
                </SelBtn>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold opacity-20 uppercase tracking-[.15em] mb-3">句子数量</label>
            <div className="flex gap-2">
              {SENTENCE_COUNTS.map(c=>(
                <SelBtn key={c} selected={cnt===c} onClick={()=>setCnt(c)}>
                  <span className="block text-sm">{c}</span>
                  <span className="block text-xs opacity-30 mt-0.5">句</span>
                </SelBtn>
              ))}
            </div>
          </div>

          {error && <p className="text-xs font-medium" style={{color:"var(--red)"}}>{error}</p>}

          <button onClick={submit} disabled={!ok}
            className="btn btn-primary w-full py-3.5 text-sm tracking-wide disabled:opacity-30">
            {loading?"AI 正在生成课程...":"生成课程"}
          </button>
        </div>
      </div>
    </div>
  );
}
