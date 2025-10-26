"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, actualTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getThemeIcon = () => {
    if (theme === "system") return "🖥️";
    if (theme === "dark") return "🌙";
    return "☀️";
  };

  const getThemeLabel = () => {
    if (theme === "system") return "System theme (auto)";
    if (theme === "dark") return "Dark theme";
    return "Light theme";
  };

  const getNextThemeLabel = () => {
    if (theme === "dark") return "Switch to light theme";
    if (theme === "light") return "Switch to system theme";
    return "Switch to dark theme";
  };

  if (!mounted) {
    return (
      <button
        className="theme-toggle"
        aria-label="Theme toggle"
        title="Theme toggle"
        disabled
      />
    );
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={getNextThemeLabel()}
      title={`${getThemeLabel()} - Click to ${getNextThemeLabel().toLowerCase()}`}
      data-theme-mode={theme}
    />
  );
}
