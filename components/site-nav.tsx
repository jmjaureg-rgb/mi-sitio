"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Servicios", href: "/#servicios" },
    { label: "Experiencia", href: "/#experiencia" },
    { label: "Educación", href: "/#educacion" },
    { label: "Información Útil", href: "/informacion-util" },
    { label: "Herramientas", href: "/herramientas" },
    { label: "Contacto", href: "/#contacto" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(245, 241, 232, 0.92)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight"
          style={{ color: "var(--forest)" }}
        >
          JMJ<span style={{ fontStyle: "italic", fontWeight: 300 }}>.</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 font-ui text-sm" style={{ color: "var(--ink-soft)" }}>
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="transition-colors hover:opacity-60"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href="mailto:jmjaure@me.com"
          className="hidden md:inline-flex items-center font-ui text-xs tracking-[0.18em] uppercase px-5 py-2.5 transition-all hover:opacity-90"
          style={{
            backgroundColor: "var(--forest)",
            color: "var(--paper)",
            borderRadius: "9999px",
          }}
        >
          Hablemos
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--forest)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4 font-ui text-sm"
          style={{
            color: "var(--ink-soft)",
            borderTop: "1px solid var(--rule)",
            backgroundColor: "var(--paper)",
          }}
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="py-1 transition-colors hover:opacity-60"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:jmjaure@me.com"
            className="mt-2 text-center font-ui text-xs tracking-[0.18em] uppercase px-5 py-3"
            style={{
              backgroundColor: "var(--forest)",
              color: "var(--paper)",
              borderRadius: "9999px",
            }}
            onClick={() => setOpen(false)}
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}
