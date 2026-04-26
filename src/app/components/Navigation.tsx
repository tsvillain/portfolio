"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const mainItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Experience" },
    { href: "/portfolio", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  const moreItems = [
    { href: "/articles", label: "Articles" },
    { href: "/recommendations", label: "Refs" },
  ];

  return (
    <header className="header">
      <div className="container flex justify-between items-center">
        <Link href="/" className="logo">TS</Link>

        <nav className="hidden md:flex gap-2">
          {mainItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <span style={{ padding: '0 0.5rem', color: 'black' }}>|</span>
          {moreItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden"
          style={{ padding: '0.5rem 1rem', border: '2px solid black', boxShadow: '4px 4px 0 black', background: '#ffff00', fontWeight: 600 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'X' : 'MENU'}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#ffff00', borderBottom: '3px solid black', padding: '1rem' }}>
          {[...mainItems, ...moreItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ display: 'block', padding: '0.75rem', borderBottom: '2px solid black' }}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}