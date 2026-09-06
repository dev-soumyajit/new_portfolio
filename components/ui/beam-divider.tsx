"use client";

import { motion } from "framer-motion";

export function BeamDivider() {
  return (
    <div className="relative flex items-center justify-center py-8">
      {/* Base line */}
      <div className="h-px w-full max-w-lg bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      {/* Animated beam */}
      <motion.div
        className="absolute h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        animate={{ x: [-200, 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Glow behind the beam */}
      <motion.div
        className="absolute h-4 w-32 rounded-full bg-primary/10 blur-md"
        animate={{ x: [-200, 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Center diamond dot */}
      <div className="absolute flex h-2 w-2 items-center justify-center">
        <div className="h-1.5 w-1.5 rotate-45 rounded-[1px] border border-primary/30 bg-primary/10" />
        <div className="absolute h-3 w-3 rounded-full bg-primary/5 blur-sm" />
      </div>
    </div>
  );
}
