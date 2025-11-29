"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2, MoreVertical } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreMenuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close "More" menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const mainNavItems = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Experience" },
    { href: "/portfolio", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const moreNavItems = [
    { href: "/articles", label: "Articles" },
    { href: "/recommendations", label: "Recommendations" },
    { href: "/games", label: "Games" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent pt-4"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-slate-900 group"
          >
            <div className="bg-primary text-black p-1.5 rounded-md group-hover:rotate-12 transition-transform">
              <Code2 size={20} />
            </div>
            <span>
              tsvillain<span className="text-primary">.com</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === item.href ? "text-primary" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* More Dropdown */}
              <li className="relative" ref={moreMenuRef}>
                <button
                  onClick={() => setIsMoreOpen(!isMoreOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                    moreNavItems.some(item => item.href === pathname) ? "text-primary" : "text-slate-600"
                  }`}
                >
                  More <MoreVertical size={16} />
                </button>
                
                {isMoreOpen && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 animate-in fade-in zoom-in-95 duration-200">
                    {moreNavItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm hover:bg-slate-50 ${
                          pathname === item.href ? "text-primary bg-slate-50" : "text-slate-700"
                        }`}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-4 animate-in slide-in-from-top-5 fade-in-20">
          <ul className="flex flex-col gap-4">
            {[...mainNavItems, ...moreNavItems].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-base font-medium py-2 ${
                    pathname === item.href ? "text-primary" : "text-slate-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
