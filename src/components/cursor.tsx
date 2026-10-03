"use client";

import { useEffect, useRef } from "react";

// Same cursor as tridentfilms.ca: a dot that tracks the pointer and a ring that eases
// behind it, growing over links and buttons. The native cursor stays visible.
const HOVER_TARGETS = "a, button, [role='button'], input, select, textarea, label";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let mX = -100, mY = -100, rX = -100, rY = -100, frame = 0;

    const onMove = (e: MouseEvent) => {
      mX = e.clientX;
      mY = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${mX}px, ${mY}px) translate(-50%, -50%)`;
    };
    const onOver = (e: MouseEvent) => {
      const hovering = !!(e.target as Element | null)?.closest?.(HOVER_TARGETS);
      ring.current?.classList.toggle("hovering", hovering);
    };
    const animate = () => {
      rX += (mX - rX) * 0.11;
      rY += (mY - rY) * 0.11;
      if (ring.current) ring.current.style.transform = `translate(${rX}px, ${rY}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    frame = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="tf-cursor-dot" aria-hidden />
      <div ref={ring} className="tf-cursor-ring" aria-hidden />
    </>
  );
}
