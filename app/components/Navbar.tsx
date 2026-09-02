"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Our Doctor", href: "/doctor" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Arfat Dental Center"
            className="h-12 w-12 rounded-xl object-contain"
          />

          <div>
            <div className="text-lg font-bold tracking-tight text-slate-950">
              Arfat Dental
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-600">
              Clinic
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-cyan-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            WhatsApp
          </a>

          <Link
            href="/appointment"
            className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-600/20 transition hover:-translate-y-0.5 hover:bg-cyan-700"
          >
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl border border-slate-200 p-2.5 lg:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-5 bg-slate-900" />
          <span className="my-1.5 block h-0.5 w-5 bg-slate-900" />
          <span className="block h-0.5 w-5 bg-slate-900" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-1 text-sm font-semibold text-slate-700"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/appointment"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-cyan-600 px-6 py-3 text-center text-sm font-semibold text-white"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
