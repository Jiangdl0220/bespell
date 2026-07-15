"use client";

import { useRef, useState, type ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

export default function Card3D({ children, className = "" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [shadow, setShadow] = useState("");

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max ±6deg
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
    setShadow(
      `${(x - centerX) / 8}px ${(y - centerY) / 8}px 24px rgba(45, 138, 78, 0.08)`
    );
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)");
    setShadow("0 2px 8px rgba(0,0,0,0.04)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        boxShadow: shadow || "0 2px 8px rgba(0,0,0,0.04)",
        transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
