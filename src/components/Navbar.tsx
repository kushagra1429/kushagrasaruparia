"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experience", path: "/#experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-tight z-50">
          <span className="text-foreground">K</span>
          <span className="text-text-muted">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                  isActive || (link.path.startsWith("/#") && pathname === "/") ? "text-foreground" : "text-text-muted"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[2px] bg-accent-blue rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button
            className="text-text-muted hover:text-foreground transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-surface border-b border-border absolute top-full left-0 w-full"
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium transition-colors ${
                (pathname === link.path || (link.path.startsWith("/#") && pathname === "/")) ? "text-accent-blue" : "text-text-muted hover:text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
