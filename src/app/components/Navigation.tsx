"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Experience" },
    { href: "/portfolio", label: "Work" },
    { href: "/articles", label: "Writing" },
    { href: "/recommendations", label: "Refs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link href="/" className="brand">
          tekeshwar<span className="brand-dot">.</span>singh
        </Link>

        <nav className="nav hidden md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-toggle md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "close" : "menu"}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu md:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={pathname === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
