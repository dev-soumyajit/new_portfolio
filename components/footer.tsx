"use client";

import { Heart, Terminal } from "lucide-react";
import { personalInfo, navItems } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons";

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: TwitterIcon, href: personalInfo.social.twitter, label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-600/[0.02] to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-lg font-bold">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                <Terminal className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground/60 leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/40">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-muted-foreground/60 transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/40">
              Connect
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-muted-foreground/50 transition-all hover:border-white/[0.12] hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground/40">
            Crafted with <Heart className="h-3 w-3 text-red-500/60" /> by Soumyajit
          </p>
        </div>
      </div>
    </footer>
  );
}
