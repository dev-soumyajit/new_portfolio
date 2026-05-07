"use client";

import { motion } from "framer-motion";
import { Brain, Database, Zap, Cpu, Sparkles } from "lucide-react";
import { aiCapabilities } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BeamDivider } from "@/components/ui/beam-divider";

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  database: Database,
  zap: Zap,
  cpu: Cpu,
};

const orbitNodes = [
  { label: "LangChain", angle: 0, radius: 130, duration: 25, color: "rgba(120,80,255,0.6)" },
  { label: "RAG", angle: 72, radius: 130, duration: 28, color: "rgba(56,189,248,0.6)" },
  { label: "OpenAI", angle: 144, radius: 130, duration: 22, color: "rgba(52,211,153,0.6)" },
  { label: "Vectors", angle: 216, radius: 130, duration: 30, color: "rgba(251,146,60,0.6)" },
  { label: "Prompts", angle: 288, radius: 130, duration: 26, color: "rgba(236,72,153,0.6)" },
];

export function AiInnovation() {
  return (
    <section id="ai" className="relative py-20 px-4 sm:py-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/[0.04] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 text-center">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="mx-auto mb-6 block h-px bg-gradient-to-r from-emerald-400/80 to-primary/80"
            />
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              <Sparkles className="h-3.5 w-3.5" />
              AI & Innovation
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Applied{" "}
              <span className="gradient-text-cyan">Intelligence</span>
            </h2>
          </div>
        </SectionReveal>

        <BeamDivider />

        {/* Orbit Visual + Cards Grid */}
        <div className="mt-8 grid items-center gap-8 sm:mt-12 sm:gap-12 lg:grid-cols-2">
          {/* Orbit visualization */}
          <SectionReveal direction="left">
            <div className="relative mx-auto flex h-[280px] w-[280px] scale-[0.8] items-center justify-center sm:h-[340px] sm:w-[340px] sm:scale-100">
              {/* Orbit rings */}
              {[130, 90, 50].map((r) => (
                <div
                  key={r}
                  className="absolute rounded-full border border-white/[0.04]"
                  style={{ width: r * 2, height: r * 2 }}
                />
              ))}

              {/* Center brain */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-600/20 to-cyan-600/20 backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-cyan-500">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                {/* Pulse rings */}
                <div className="absolute inset-0 animate-ping rounded-full bg-primary/10" style={{ animationDuration: "3s" }} />
              </motion.div>

              {/* Orbiting nodes */}
              {orbitNodes.map((node, i) => (
                <div
                  key={node.label}
                  className="absolute left-1/2 top-1/2 animate-orbit"
                  style={{
                    "--orbit-radius": `${node.radius}px`,
                    "--orbit-duration": `${node.duration}s`,
                    animationDelay: `${-(node.angle / 360) * node.duration}s`,
                    marginLeft: "-1px",
                    marginTop: "-1px",
                  } as React.CSSProperties}
                >
                  <div className="flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-[oklch(0.1_0.01_260)] px-3 py-1.5 shadow-lg">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ background: node.color }}
                    />
                    <span className="text-[11px] font-medium text-foreground/80 whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Capability cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {aiCapabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon] || Brain;
              return (
                <SectionReveal key={cap.title} delay={i * 0.1} direction="right">
                  <SpotlightCard className="group h-full p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] transition-all group-hover:border-primary/30 group-hover:shadow-[0_0_15px_rgba(120,80,255,0.1)]">
                      <Icon className="h-5 w-5 text-primary/80" />
                    </div>
                    <h3 className="font-semibold">{cap.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </SpotlightCard>
                </SectionReveal>
              );
            })}
          </div>
        </div>

        {/* CTA banner */}
        <SectionReveal delay={0.3}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.06] sm:mt-16 sm:rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/[0.08] via-cyan-600/[0.05] to-emerald-600/[0.08]" />
            <div className="dot-bg absolute inset-0 opacity-50" />
            <div className="relative flex flex-col items-center gap-5 p-6 text-center sm:gap-6 sm:p-10 md:flex-row md:p-12 md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 animate-pulse-glow">
                <Brain className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold md:text-2xl">
                  Building the Future with AI
                </h3>
                <p className="mt-2 text-sm text-muted-foreground md:text-base">
                  From LLM-powered analysis platforms to intelligent automation —
                  I architect AI solutions designed for production reliability and real business impact.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                Discuss a Project
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
