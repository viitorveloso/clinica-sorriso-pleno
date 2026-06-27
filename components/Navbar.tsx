"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { linksNav } from "@/lib/data";
import ToothIcon from "@/components/ToothIcon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-white/95 text-navy shadow-sm backdrop-blur"
          : "bg-transparent text-white"
      }`}
    >
      <nav className="container-base flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-lg font-bold md:text-xl"
          onClick={() => setOpen(false)}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full ${
              solid ? "bg-turquoise/10 text-turquoise-600" : "bg-white/15 text-white"
            }`}
          >
            <ToothIcon className="h-5 w-5" />
          </span>
          <span>
            Sorriso <span className="text-turquoise">Pleno</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {linksNav.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contato" className="btn-primary px-5 py-2.5">
            Agendar
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-navy/5 bg-white text-navy md:hidden">
          <ul className="container-base flex flex-col py-4">
            {linksNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-sm font-medium hover:bg-cinza"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-2">
              <Link
                href="/contato"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Agendar
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
