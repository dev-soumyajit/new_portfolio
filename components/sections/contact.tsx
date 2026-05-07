"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { SectionReveal } from "@/components/ui/section-reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GradientBorder } from "@/components/ui/gradient-border";
import { BeamDivider } from "@/components/ui/beam-divider";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/social-icons";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unexpected error occurred.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:py-32 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.04] blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-cyan-600/[0.03] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mb-4 text-center">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              className="mx-auto mb-6 block h-px bg-gradient-to-r from-primary/80 to-emerald-400/80"
            />
            <span className="text-sm font-medium uppercase tracking-[0.25em] text-primary/80">
              Contact
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I&apos;d love
              to hear from you.
            </p>
          </div>
        </SectionReveal>

        <BeamDivider />

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-2 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400">Available for work</span>
                </div>
                <h3 className="text-2xl font-bold">Get in Touch</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  I&apos;m always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-white/[0.12] hover:bg-white/[0.04]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground/60">Email</p>
                      <p className="text-sm text-foreground/80">{personalInfo.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>

                <div className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/60">Location</p>
                    <p className="text-sm text-foreground/80">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
                  Find me on
                </p>
                <div className="flex gap-2">
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
                        className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] text-muted-foreground/60 transition-all hover:border-primary/30 hover:text-foreground hover:shadow-[0_0_15px_rgba(120,80,255,0.08)]"
                      >
                        <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                      </a>
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.15} className="lg:col-span-3">
            <GradientBorder className="p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  ].map((field) => (
                    <div key={field.id} className="group relative">
                      <label
                        htmlFor={field.id}
                        className={`mb-2 block text-sm font-medium transition-colors ${
                          focused === field.id ? "text-primary" : "text-foreground/60"
                        }`}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        required
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) =>
                          setFormData((p) => ({ ...p, [field.id]: e.target.value }))
                        }
                        onFocus={() => setFocused(field.id)}
                        onBlur={() => setFocused(null)}
                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/30 focus:border-primary/40 focus:shadow-[0_0_20px_rgba(120,80,255,0.06)]"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`mb-2 block text-sm font-medium transition-colors ${
                      focused === "message" ? "text-primary" : "text-foreground/60"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/30 focus:border-primary/40 focus:shadow-[0_0_20px_rgba(120,80,255,0.06)]"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                {error ? (
                  <p className="text-sm text-red-400">{error}</p>
                ) : null}

                <MagneticButton className="w-full">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSending}
                    className="group relative w-full overflow-hidden rounded-xl py-3.5 text-sm font-medium transition-all disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600" />
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="relative flex items-center justify-center gap-2 text-white">
                      {isSending ? (
                        <>
                          <Send className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : submitted ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>
                </MagneticButton>
              </form>
            </GradientBorder>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
