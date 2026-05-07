"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  Zap,
  Cloud,
  GitBranch,
  Box,
} from "lucide-react";

const icons = [
  { Icon: Brain, x: "10%", y: "20%", delay: 0 },
  { Icon: Code2, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Database, x: "75%", y: "70%", delay: 1 },
  { Icon: Globe, x: "15%", y: "75%", delay: 1.5 },
  { Icon: Server, x: "90%", y: "45%", delay: 0.3 },
  { Icon: Cpu, x: "5%", y: "50%", delay: 0.8 },
  { Icon: Zap, x: "50%", y: "10%", delay: 1.2 },
  { Icon: Cloud, x: "70%", y: "85%", delay: 0.6 },
  { Icon: GitBranch, x: "30%", y: "85%", delay: 1.8 },
  { Icon: Box, x: "60%", y: "25%", delay: 0.4 },
];

export function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {icons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-5 w-5 text-white/[0.07] md:h-6 md:w-6" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
