"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Marquee } from "@/components/ui/marquee";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { BeamDivider } from "@/components/ui/beam-divider";

const allSkills = skillCategories.flatMap((c) =>
  c.skills.map((s) => ({ ...s, category: c.title, color: c.color }))
);
const row1 = allSkills.slice(0, Math.ceil(allSkills.length / 2));
const row2 = allSkills.slice(Math.ceil(allSkills.length / 2));

function SkillPill({
  name,
  icon: Icon,
  color,
}: {
  name: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="group relative flex items-center gap-2.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.05]">
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} opacity-0 transition-opacity group-hover:opacity-[0.06]`} />
      <Icon className="h-3.5 w-3.5 text-muted-foreground/60 transition-colors group-hover:text-foreground/80" />
      <span className="relative text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {name}
      </span>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:py-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-600/[0.03] blur-[120px]" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-violet-600/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 text-center">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="mx-auto mb-6 block h-px bg-gradient-to-r from-cyan-400/80 to-primary/80"
            />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Tech Stack
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Tools I{" "}
              <span className="gradient-text-cyan">Work With</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Infinite Marquee */}
        <SectionReveal delay={0.2}>
          <div className="mt-12 space-y-4">
            <Marquee speed="slow">
              {row1.map((s) => (
                <SkillPill key={s.name} name={s.name} icon={s.icon} color={s.color} />
              ))}
            </Marquee>
            <Marquee speed="slow" reverse>
              {row2.map((s) => (
                <SkillPill key={s.name} name={s.name} icon={s.icon} color={s.color} />
              ))}
            </Marquee>
          </div>
        </SectionReveal>

        <BeamDivider />

        {/* Category Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SectionReveal key={category.title} delay={0.1 + i * 0.08}>
              <SpotlightCard className="group h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
                  >
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{category.title}</h3>
                    <p className="text-xs text-muted-foreground/60">{category.skills.length} technologies</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + si * 0.05 }}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </SpotlightCard>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
