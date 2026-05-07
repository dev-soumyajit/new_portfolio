"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { navItems, personalInfo } from "@/data/portfolio-data";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map(({ href }) => href.replace("#", ""));
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visibleSections.add(id);
          } else {
            visibleSections.delete(id);
          }
        });

        // Pick the first visible section in DOM order
        const current = sectionIds.find((id) => visibleSections.has(id));
        if (current) {
          setActiveSection(`#${current}`);
        }
      },
      { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Floating pill navbar (appears after scroll) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -80, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -80, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[calc(100%-2rem)] max-w-fit sm:w-auto"
          >
            {/* Desktop pill */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[oklch(0.09_0.01_260/75%)] px-1.5 py-1.5 shadow-xl shadow-black/20 backdrop-blur-xl">
              <MagneticButton strength={0.1}>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20"
                >
                  <Terminal className="h-3.5 w-3.5 text-primary" />
                </button>
              </MagneticButton>

              {navItems.map(({ label, href }) => (
                <MagneticButton key={href} strength={0.08}>
                  <button
                    onClick={() => scrollTo(href)}
                    className={`relative rounded-full px-4 py-2 text-base font-medium transition-colors ${
                      activeSection === href
                        ? "text-foreground"
                        : "text-muted-foreground/60 hover:text-foreground/90"
                    }`}
                  >
                    {activeSection === href && (
                      <motion.span
                        layoutId="floatingNav"
                        className="absolute inset-0 rounded-full bg-white/[0.08]"
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                </MagneticButton>
              ))}

              <MagneticButton strength={0.08}>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="ml-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2 text-base font-medium text-white transition-opacity hover:opacity-90"
                >
                  Hire Me
                </button>
              </MagneticButton>
            </div>

            {/* Mobile floating pill */}
            <div className="flex md:hidden items-center justify-between rounded-full border border-white/[0.08] bg-[oklch(0.09_0.01_260/75%)] px-2 py-1.5 shadow-xl shadow-black/20 backdrop-blur-xl">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10"
              >
                <Terminal className="h-3.5 w-3.5 text-primary" />
              </button>

              <span className="text-[13px] font-semibold gradient-text">
                {personalInfo.name.split(" ")[0]}
              </span>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06]"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Top static navbar (hides when floating pill appears) ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        className={`fixed top-0 left-0 right-0 z-40 transition-[pointer-events] ${scrolled ? "pointer-events-none" : ""}`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <MagneticButton>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-base font-bold tracking-tight sm:text-lg"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Terminal className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
            </button>
          </MagneticButton>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="px-4 py-2 text-base text-muted-foreground/60 transition-colors hover:text-foreground/90"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="ml-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-2 text-base font-medium text-foreground/80 transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
            >
              Hire Me
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 rounded-full p-2.5 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[oklch(0.07_0.01_260/95%)] backdrop-blur-xl" />
            <div className="relative flex h-full flex-col items-center justify-center gap-7">
              {navItems.map(({ label, href }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
                  onClick={() => scrollTo(href)}
                  className="text-2xl font-bold text-foreground/80 transition-colors hover:text-primary sm:text-3xl"
                >
                  {label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ delay: navItems.length * 0.05 }}
                onClick={() => scrollTo("#contact")}
                className="mt-4 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-base font-medium text-white sm:text-lg"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
