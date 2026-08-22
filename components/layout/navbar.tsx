"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-semibold">
          <span className="h-[9px] w-[9px] rounded-full bg-accent" />
          IGF <span className="font-sans text-sm font-medium opacity-60">SARL</span>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="opacity-80 transition-opacity hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <ThemeToggle />
          <Button href="#contact" className="hidden md:inline-flex">
            Demander un devis
          </Button>
          <button
            className="text-ink md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 text-sm font-medium md:hidden">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="py-2 opacity-80" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2 justify-center">
            Demander un devis
          </Button>
        </nav>
      )}
    </header>
  );
}
