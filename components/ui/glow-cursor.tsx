"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function GlowCursor() {
  const [visible, setVisible] = useState(false);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [cursorX, cursorY, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[99] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform"
      style={{
        left: cursorX,
        top: cursorY,
        width: 500,
        height: 500,
        background:
          "radial-gradient(circle, oklch(0.7 0.2 270 / 6%) 0%, transparent 70%)",
      }}
      aria-hidden="true"
    />
  );
}
