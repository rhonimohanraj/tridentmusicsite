"use client";

import { useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";

function TimezoneAutoSwitcher() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Only auto-switch if user hasn't manually overridden
    const userOverride = localStorage.getItem("theme-manual-override");
    if (userOverride === "true") return;

    function getThemeForTime(): "dark" | "light" {
      const hour = new Date().getHours();
      // Dark mode: 7 PM (19) to 7 AM (7)
      return hour >= 19 || hour < 7 ? "dark" : "light";
    }

    const correctTheme = getThemeForTime();
    if (theme !== correctTheme) {
      setTheme(correctTheme);
    }

    // Re-check every 5 minutes
    const interval = setInterval(() => {
      const override = localStorage.getItem("theme-manual-override");
      if (override === "true") return;
      setTheme(getThemeForTime());
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [setTheme, theme]);

  return null;
}

export function TimezoneThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="trident-theme"
    >
      <TimezoneAutoSwitcher />
      {children}
    </ThemeProvider>
  );
}
