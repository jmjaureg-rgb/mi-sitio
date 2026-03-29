"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Experiencia", href: "/#experiencia" },
    { label: "Educación", href: "/#educacion" },
    { label: "Contacto", href: "/#contacto" },
    { label: "Información Útil", href: "/informacion-util" },
    { label: "Herramientas", href: "/herramientas" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(15,25,35,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="font-semibold tracking-wide text-sm" style={{ color: "#c9a84c" }}>
          JMJ
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:jmjaure@me.com"
          className="hidden md:block text-sm px-4 py-2 rounded-full font-medium transition-all"
          style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
        >
          Contactame
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-8 pb-6 flex flex-col gap-4 text-sm text-gray-400"
          style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="hover:text-white transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:jmjaure@me.com"
            className="mt-2 text-center px-4 py-2 rounded-full font-medium"
            style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
            onClick={() => setOpen(false)}
          >
            Contactame
          </a>
        </div>
      )}
    </nav>
  );
}
