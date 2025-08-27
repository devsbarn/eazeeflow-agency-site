"use client";

import { Hero } from "@/components/saas/Hero";
import { PainPoints } from "@/components/saas/PainPoints";
import { Solution } from "@/components/saas/Solution";
import { SocialProof } from "@/components/saas/SocialProof";
import { Process } from "@/components/saas/Process";
import { FAQ } from "@/components/saas/FAQ";
import { FinalCTA } from "@/components/saas/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Hero />
      <PainPoints />
      <Solution />
      <SocialProof />
      <Process />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
