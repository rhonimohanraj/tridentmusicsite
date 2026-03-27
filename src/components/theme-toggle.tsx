"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    // Mark as manually overridden so timezone auto-switch doesn't interfere
    localStorage.setItem("theme-manual-override", "true");
  }

  if (!mounted) return <div className="w-4 h-4" />;

  return (
    <button
      onClick={toggle}
      className="text-muted-foreground hover:text-foreground transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
