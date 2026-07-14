"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { WordToken } from "@/hooks/use-practice-engine";

interface InputAreaProps {
  words: WordToken[];
  currentWordIndex: number; inputValue: string; hintVisible: boolean;
  feedback: "correct"|"error"|null;
  inputRef: React.RefObject<HTMLInputElement|null>;
  onKeyDown: (e:React.KeyboardEvent)=>void; onKeyUp: (e:React.KeyboardEvent)=>void;
  onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void; onFocus: ()=>void;
}

export default function InputArea({ words, currentWordIndex, inputValue, hintVisible, feedback, inputRef, onKeyDown, onKeyUp, onChange, onFocus }: InputAreaProps) {
  const currentWord = words[currentWordIndex];
  const total = words.length;

  return (
    <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.35,delay:.1}}
      className="card px-6 py-10 relative cursor-text" onClick={()=>inputRef.current?.focus()}>

      <div className="flex items-center justify-center gap-3 flex-wrap">
        {Array.from({length:total}).map((_,i)=>{
          const done = i < currentWordIndex;
          const cur = i === currentWordIndex;

          if (done) return (
            <motion.span key={i} initial={{opacity:0,scale:.7}} animate={{opacity:1,scale:1}}
              className="inline-flex items-end justify-center min-w-[2ch] px-1 h-9 text-sm font-semibold" style={{color:"var(--green)"}}>
              {words[i]?.en}
            </motion.span>
          );

          if (cur) return (
            <motion.div key={i} className={`flex flex-col items-center ${feedback==="error"?"shake":""}`}
              animate={feedback==="correct"?{scale:[1,1.12,1]}:{}} transition={{duration:.3}}>
              <span className="text-xl font-bold h-8 flex items-center tracking-wide"
                style={{color:feedback==="correct"?"var(--green)":feedback==="error"?"var(--red)":"var(--text)"}}>
                {inputValue||<span className="inline-block w-1 h-5 bg-[var(--accent)] animate-pulse rounded-sm"/>}
              </span>
              <span className="block h-0.5 rounded-full transition-all duration-200"
                style={{width:inputValue?`${Math.max(inputValue.length*14,48)}px`:"48px",
                  background:feedback==="correct"?"var(--green)":feedback==="error"?"var(--red)":"var(--accent)"}}/>
            </motion.div>
          );

          return <span key={i} className="inline-block w-14 h-0.5 bg-white/10 align-middle mt-8"/>;
        })}
      </div>

      <input ref={inputRef} type="text" value={inputValue} onChange={onChange} onKeyDown={onKeyDown} onKeyUp={onKeyUp} onFocus={onFocus}
        className="absolute opacity-0 w-0 h-0 pointer-events-none" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>

      <div className="flex items-center justify-between mt-6">
        <p className="text-xs opacity-35">空格确认 · Tab 偷看</p>
        <div className="h-5">
          <AnimatePresence>
            {hintVisible && currentWord && (
              <motion.span initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} exit={{opacity:0,y:4}}
                className="text-sm font-semibold" style={{color:"var(--accent)"}}>{currentWord.en}</motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {feedback && (
          <motion.div initial={{opacity:0,scale:.4}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:.4}}
            className="absolute top-4 right-4 text-lg font-bold pointer-events-none"
            style={{color:feedback==="correct"?"var(--green)":"var(--red)"}}>
            {feedback==="correct"?"✓":"✗"}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
