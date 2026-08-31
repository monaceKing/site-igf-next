"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fonction pour faire défiler sans modifier l'URL
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const cleanId = targetId.replace("#", "");
    const element = document.getElementById(cleanId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Ferme le menu mobile si ouvert
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Logo IGF SARL"
            width={120}
            height={40}
            className="h-auto w-auto max-h-9"
            priority
          />
        </Link>

        {/* NAVIGATION DESKTOP */}
        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="cursor-pointer opacity-80 transition-opacity hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <ThemeToggle />
          
          {/* BOUTON DEVIS DESKTOP */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="hidden cursor-pointer rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 md:inline-flex"
          >
            Demander un devis
          </a>

          {/* BOUTON HAMBURGER MOBILE */}
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

      {/* MENU MOBILE */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 text-sm font-medium md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="cursor-pointer py-2 opacity-80"
            >
              {link.label}
            </a>
          ))}
          
          {/* BOUTON DEVIS MOBILE */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="mt-2 flex cursor-pointer justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white"
          >
            Demander un devis
          </a>
        </nav>
      )}
    </header>
  );
}