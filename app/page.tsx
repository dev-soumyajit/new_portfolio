"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { GlowCursor } from "@/components/ui/glow-cursor";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { AiInnovation } from "@/components/sections/ai-innovation";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <GlowCursor />
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AiInnovation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
