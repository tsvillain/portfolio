"use client";

import { usePathname } from "next/navigation";
import ThemeSelector from "./ThemeSelector";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/portfolio", label: "projects" },
    { href: "/games", label: "games" },
    { href: "/recommendations", label: "recommendations" },
    { href: "/articles", label: "articles" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav>
      <div className="container">
        <div className="nav-title">tsvillain@portfolio:~$ <span className="cursor"></span></div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a 
                  href={item.href}
                  className={pathname === item.href ? "active" : ""}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
}
