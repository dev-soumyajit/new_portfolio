"use client";

import { motion } from "framer-motion";
import { ArrowDown, MapPin, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { FloatingIcons } from "@/components/ui/floating-icons";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons";

const line = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.15, duration: 0.8 },
  }),
};

const charVariants = {
  hidden: { y: "110%", rotateX: -80 },
  visible: (i: number) => ({
    y: "0%",
    rotateX: 0,
    transition: {
      delay: 0.6 + i * 0.03,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const nameChars = "Soumyajit Khan".split("");

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 sm:px-6 sm:pt-28">
      <FloatingIcons />

      {/* Aurora blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute left-[15%] top-[10%] h-[250px] w-[300px] rounded-full blur-[100px] sm:h-[500px] sm:w-[700px] sm:blur-[140px]"
          style={{
            background: "linear-gradient(135deg, rgba(120,80,255,0.15), rgba(56,189,248,0.08))",
            animation: "aurora-1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute right-[10%] top-[30%] h-[200px] w-[250px] rounded-full blur-[80px] sm:h-[400px] sm:w-[500px] sm:blur-[120px]"
          style={{
            background: "linear-gradient(135deg, rgba(236,72,153,0.1), rgba(120,80,255,0.08))",
            animation: "aurora-2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-[40%] bottom-[10%] h-[180px] w-[220px] rounded-full blur-[80px] sm:h-[350px] sm:w-[450px] sm:blur-[100px]"
          style={{
            background: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(52,211,153,0.06))",
            animation: "aurora-3 12s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Radial fade edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, oklch(0.07 0.01 260) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Name — character reveal */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground/70"
          >
            <Terminal className="mr-2 inline-block h-3.5 w-3.5" />
            Hello World, I&apos;m
          </motion.p>

          <h1 className="overflow-hidden whitespace-nowrap text-[2rem] font-bold leading-[1.1] tracking-tight min-[375px]:text-[2.5rem] sm:text-6xl md:text-8xl lg:text-9xl">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={charVariants}
                initial="hidden"
                animate="visible"
                className="inline-block gradient-text"
                style={{ transformOrigin: "bottom" }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </h1>

          {/* Role typing line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/40" />
            <TypingAnimation
              words={[
                "Full Stack Developer",
                "AI Engineer",
                "MERN Stack Developer",
                "Backend Architect",
              ]}
              className="text-lg font-medium text-foreground/70 sm:text-xl md:text-2xl"
            />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          custom={3}
          variants={line}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-8 max-w-xl text-center text-base text-muted-foreground/80 sm:text-lg"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div
          custom={4}
          variants={line}
          initial="hidden"
          animate="visible"
          className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground/60"
        >
          <MapPin className="h-3.5 w-3.5" />
          {personalInfo.location}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-medium transition-all"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-purple-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute inset-px rounded-full bg-[oklch(0.07_0.01_260)] opacity-0 transition-opacity group-hover:opacity-0" />
              <span className="relative text-white">View My Work</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-3.5 text-sm font-medium text-foreground/80 backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.05]"
            >
              Let&apos;s Talk
              <span className="inline-block transition-transform group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-2"
        >
          {[
            { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
            { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
            { icon: TwitterIcon, href: personalInfo.social.twitter, label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <MagneticButton key={label} strength={0.2}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group rounded-full border border-white/[0.06] bg-white/[0.02] p-3 text-muted-foreground/60 backdrop-blur-sm transition-all hover:border-primary/30 hover:text-foreground hover:shadow-[0_0_20px_rgba(120,80,255,0.1)]"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/40">
            Scroll
          </span>
          <ArrowDown className="h-4 w-4 text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
