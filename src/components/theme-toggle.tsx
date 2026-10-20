"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { useSyncExternalStore } from "react";
import { isForcedDark } from "@/lib/forced-dark";

const noopSubscribe = () => () => {};

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  // false on the server and during hydration, true once hydrated on the client
  // (the theme is only known client-side, so this avoids a hydration mismatch).
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false
  );
  const forcedDark = isForcedDark(usePathname());

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    // Mark as manually overridden so timezone auto-switch doesn't interfere
    localStorage.setItem("theme-manual-override", "true");
  }

  if (!mounted) return <div className="w-4 h-4" />;
  // The theme is pinned on this route, so the control would be a dead switch.
  if (forcedDark) return null;

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
