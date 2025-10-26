"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="theme-toggle"
        aria-label="Theme selector"
        title="Theme selector"
        disabled
      />
    );
  }

  const themes = [
    { value: "dark", label: "Dark", icon: "🌙" },
    { value: "light", label: "Light", icon: "☀️" },
    { value: "system", label: "System", icon: "🖥️" },
  ] as const;

  const currentTheme = themes.find(t => t.value === theme) || themes[0];

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        className="theme-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Current theme: ${currentTheme.label}`}
        title={`Current theme: ${currentTheme.label} - Click to change`}
        data-theme-mode={theme}
      />
      
      {isOpen && (
        <div 
          className="theme-dropdown"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "0.5rem",
            background: "var(--terminal-bg-secondary)",
            border: "1px solid var(--terminal-border)",
            borderRadius: "4px",
            padding: "0.5rem",
            minWidth: "120px",
            zIndex: 1000,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          }}
        >
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.5rem",
                background: theme === themeOption.value ? "var(--terminal-accent)" : "transparent",
                color: theme === themeOption.value ? "var(--terminal-bg)" : "var(--terminal-text)",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "0.9rem",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (theme !== themeOption.value) {
                  e.currentTarget.style.background = "var(--terminal-border-light)";
                }
              }}
              onMouseLeave={(e) => {
                if (theme !== themeOption.value) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              <span>{themeOption.icon}</span>
              <span>{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Click outside to close */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
