"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  wordBased?: boolean;
}

export function TextReveal({
  text,
  className,
  delay = 0,
  wordBased = true,
}: TextRevealProps) {
  const items = wordBased ? text.split(" ") : text.split("");

  return (
    <span className={cn("inline-flex flex-wrap", className)}>
      {items.map((item, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * (wordBased ? 0.08 : 0.03),
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="inline-block"
          >
            {item}
            {wordBased && " "}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
