"use client";

import { MotionConfig } from "framer-motion";

// Honors the OS reduce-motion setting for every framer-motion animation
// (transforms are skipped, opacity/colour changes still run).
export function MotionPreferences({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
