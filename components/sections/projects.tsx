"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  X,
  Brain,
  Video,
  Phone,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { projects, type Project } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "@/components/ui/tilt-card";
import { GradientBorder } from "@/components/ui/gradient-border";
import { BeamDivider } from "@/components/ui/beam-divider";
import { GithubIcon } from "@/components/ui/social-icons";

const iconMap: Record<string, React.ElementType> = {
  brain: Brain,
  video: Video,
  phone: Phone,
};

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const Icon = iconMap[project.icon] || Brain;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 12 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-2xl border border-white/[0.08] bg-[oklch(0.09_0.01_260)] shadow-2xl"
      >
        {/* Compact gradient header */}
        <div className={`relative h-24 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="h-16 w-16 text-white/10" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.01_260)] via-transparent to-transparent" />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-black/30 p-1.5 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/50 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="p-5">
          {/* Title row */}
          <div className="flex items-center gap-3">
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient}`}>
              <Icon className="h-4.5 w-4.5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
              <p className="text-sm text-muted-foreground/70">{project.subtitle}</p>
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{project.description}</p>

          {/* Features */}
          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/50">
              Features
            </h4>
            <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <ChevronRight className="h-2.5 w-2.5 text-primary/70" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted-foreground/70"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-5 flex gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <ExternalLink className="h-3 w-3" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] py-2 text-sm font-medium transition-all hover:bg-white/[0.06]"
              >
                <GithubIcon className="h-3 w-3" /> Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 px-4 sm:py-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/[0.03] blur-[100px]" />
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
              Projects
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Things I&apos;ve{" "}
              <span className="gradient-text">Built</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Production-grade applications with modern architectures and real users.
            </p>
          </div>
        </SectionReveal>

        <BeamDivider />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = iconMap[project.icon] || Brain;
            return (
              <SectionReveal key={project.id} delay={i * 0.12}>
                <TiltCard>
                  <GradientBorder
                    containerClassName="h-full"
                    className="h-full cursor-pointer overflow-hidden"
                  >
                    <div onClick={() => setSelected(project)} className="h-full">
                      {/* Gradient header */}
                      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10 transition-all hover:bg-black/5" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <Icon className="h-20 w-20 text-white/15" />
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.01_260)] via-transparent to-transparent" />

                        {/* Floating badge */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-md transition-all hover:bg-white/20"
                          >
                            Live <ArrowUpRight className="h-3 w-3" />
                          </a>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                          {project.subtitle}
                        </p>
                        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground/70"
                            >
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground/70">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </GradientBorder>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
