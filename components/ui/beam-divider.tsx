"use client";

import { motion } from "framer-motion";

export function BeamDivider() {
  return (
    <div className="relative flex items-center justify-center py-8">
      <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <motion.div
        className="absolute h-px w-32 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        animate={{ x: [-200, 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
