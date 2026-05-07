"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, Zap } from "lucide-react";
import { experiences } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Badge } from "@/components/ui/badge";
import { BeamDivider } from "@/components/ui/beam-divider";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 px-4 sm:py-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-indigo-600/[0.04] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionReveal>
          <div className="mb-4 text-center">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="mx-auto mb-6 block h-px bg-gradient-to-r from-primary/80 to-indigo-400/80"
            />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Experience
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Where I&apos;ve{" "}
              <span className="gradient-text">Worked</span>
            </h2>
          </div>
        </SectionReveal>

        <BeamDivider />

        <div className="relative mt-12">
          {/* Glowing timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px md:left-12">
            <div className="h-full w-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-transparent"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ filter: "blur(3px)" }}
            />
          </div>

          {experiences.map((exp, index) => (
            <SectionReveal key={exp.company} delay={index * 0.15}>
              <div className="relative mb-12 pl-20 md:pl-28">
                {/* Timeline node */}
                <div className="absolute left-[26px] top-0 z-10 md:left-[42px]">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
                    className="relative flex h-7 w-7 items-center justify-center"
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow" />
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <Zap className="h-3 w-3 text-primary" />
                    </div>
                  </motion.div>
                </div>

                {/* Period badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1 text-xs font-medium text-primary"
                >
                  <Calendar className="h-3 w-3" />
                  {exp.period}
                </motion.div>

                <SpotlightCard className="p-6 md:p-8">
                  <div>
                    <h3 className="text-xl font-bold md:text-2xl">{exp.role}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="h-3.5 w-3.5 text-primary/60" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-primary/60" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {exp.highlights.map((highlight, hi) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + hi * 0.08 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="border-white/[0.06] bg-white/[0.04] text-xs text-muted-foreground"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
