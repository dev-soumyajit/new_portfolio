"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Briefcase, Rocket, Download } from "lucide-react";
import { personalInfo, stats } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { BeamDivider } from "@/components/ui/beam-divider";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "End-to-end development from pixel-perfect UIs to scalable backend architectures.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Cpu,
    title: "AI Engineering",
    description: "Production LLM systems, RAG pipelines, and intelligent automation workflows.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Briefcase,
    title: "DevOps",
    description: "Docker, CI/CD pipelines, AWS deployments, and infrastructure automation.",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Rocket,
    title: "Product Builder",
    description: "Shipping real products that users love — from idea to production deployment.",
    gradient: "from-orange-500/20 to-amber-500/20",
  },
];

function parseStatValue(value: string): { number: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  return match ? { number: parseInt(match[1], 10), suffix: match[2] } : { number: 0, suffix: value };
}

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 sm:py-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 text-center">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="mx-auto mb-6 block h-px bg-gradient-to-r from-primary/80 to-cyan-400/80"
            />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              About Me
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Not Your Average{" "}
              <span className="gradient-text">Developer</span>
            </h2>
          </div>
        </SectionReveal>

        <BeamDivider />

        {/* Bento Grid */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-3">
          {/* Main bio — large card spanning 4 cols, 2 rows */}
          <SectionReveal className="sm:col-span-2 md:col-span-4 md:row-span-2">
            <SpotlightCard className="h-full p-6 sm:p-8 md:p-10">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    Who I Am
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                    {personalInfo.about}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={personalInfo.resumeUrl}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2 text-sm text-muted-foreground transition-all hover:border-primary/30 hover:text-foreground"
                  >
                    <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
                    Resume
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </SectionReveal>

          {/* Stats — 2 cols, 2 rows, each stat in its own mini card */}
          {stats.map(({ label, value }, i) => {
            const { number, suffix } = parseStatValue(value);
            return (
              <SectionReveal key={label} delay={0.1 + i * 0.08} className="sm:col-span-1 md:col-span-1">
                <SpotlightCard
                  className="flex h-full flex-col items-center justify-center p-6 text-center"
                  spotlightColor={
                    i % 2 === 0
                      ? "rgba(120,80,255,0.1)"
                      : "rgba(56,189,248,0.1)"
                  }
                >
                  <p className="text-3xl font-bold gradient-text md:text-4xl">
                    <AnimatedCounter target={number} suffix={suffix} />
                  </p>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground/70">
                    {label}
                  </p>
                </SpotlightCard>
              </SectionReveal>
            );
          })}

          {/* Highlight cards — bottom row, each spans ~1.5 cols */}
          {highlights.map((h, i) => (
            <SectionReveal
              key={h.title}
              delay={0.2 + i * 0.08}
              className="sm:col-span-1 md:col-span-3"
            >
              <SpotlightCard className="group h-full p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${h.gradient} transition-transform group-hover:scale-110`}
                  >
                    <h.icon className="h-5 w-5 text-foreground/80" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
