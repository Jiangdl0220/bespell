"use client";

import dynamic from "next/dynamic";

const InkParticles = dynamic(() => import("@/components/ink-particles"), {
  ssr: false,
});

export default function InkParticlesClient() {
  return <InkParticles />;
}
