import Link from "next/link";
import Image from "next/image";
import { TrendingUp, LayoutDashboard, ArrowUpRight } from "lucide-react";
import SiteNav from "@/components/site-nav";

const herramientas = [
  {
    n: "01",
    titulo: "Renta Fija",
    descripcion: "Dashboard de análisis y seguimiento de obligaciones negociables argentinas.",
    href: "https://rentafija.jmjaure.com",
    external: true,
    icon: <TrendingUp className="w-6 h-6" />,
    image: null,
  },
  {
    n: "02",
    titulo: "Golden Org Dashboard",
    descripcion: "Dashboard organizacional de Golden AI Studio.",
    href: "https://dashboard.jmjaure.com",
    external: true,
    icon: <LayoutDashboard className="w-6 h-6" />,
    image: null,
  },
  {
    n: "03",
    titulo: "Openclaw",
    descripcion: "Plataforma de gestión y análisis financiero personalizado.",
    href: "https://openclaw.jmjaure.com",
    external: true,
    icon: null,
    image: "/openclaw.png",
  },
  {
    n: "04",
    titulo: "Golden AI Studio",
    descripcion: "Estudio de producción audiovisual con inteligencia artificial.",
    href: "https://goldenstudio.ai",
    external: true,
    icon: null,
    image: "/logo-golden.png",
  },
  {
    n: "05",
    titulo: "Certiva Academy",
    descripcion: "Plataforma de aprendizaje y certificación profesional.",
    href: "https://certiva.academy",
    external: true,
    icon: null,
    image: "/logo-certiva.png",
  },
  {
    n: "06",
    titulo: "Portfolio Personal Inversiones",
    descripcion: "Plataforma de seguimiento y gestión de inversiones personales.",
    href: "https://www.portfoliopersonal.com/",
    external: true,
    icon: null,
    image: "/logo-portfolio.svg",
  },
];

export default function Herramientas() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <SiteNav />

      <section className="pt-36 pb-24 md:pt-44 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <nav className="font-mono text-xs tracking-wider mb-12" style={{ color: "var(--ink-muted)" }}>
            <Link href="/" className="hover:opacity-60 transition-opacity uppercase">JMJ</Link>
            <span className="mx-2">/</span>
            <span className="uppercase" style={{ color: "var(--ink)" }}>Herramientas</span>
          </nav>

          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-4">
              <p className="label-mono mb-4">№ 01 / Apps & Dashboards</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h1
                className="font-display leading-[1] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Herramientas{" "}
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>&amp; dashboards</span>
              </h1>
              <p className="font-serif-text text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "var(--ink-soft)" }}>
                Aplicaciones internas para análisis y gestión financiera, junto a los proyectos en los
                que trabajo actualmente.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--rule)" }}>
            {herramientas.map((h) => (
              <a
                key={h.n}
                href={h.href}
                target={h.external ? "_blank" : undefined}
                rel={h.external ? "noopener noreferrer" : undefined}
                className="group p-8 md:p-10 transition-all hover:bg-[var(--paper-dark)]"
                style={{ backgroundColor: "var(--paper)" }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="label-mono">{h.n}</span>
                    {h.icon && (
                      <div
                        className="w-10 h-10 flex items-center justify-center"
                        style={{ color: "var(--forest)" }}
                      >
                        {h.icon}
                      </div>
                    )}
                    {h.image && (
                      <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                        <Image src={h.image} alt={h.titulo} width={40} height={40} className="object-contain" />
                      </div>
                    )}
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    style={{ color: "var(--ink-muted)" }}
                  />
                </div>
                <h2
                  className="font-display text-2xl md:text-3xl mb-3 transition-colors group-hover:text-[var(--forest)]"
                  style={{ fontWeight: 400, color: "var(--ink)" }}
                >
                  {h.titulo}
                </h2>
                <p className="font-serif-text text-base leading-relaxed" style={{ color: "var(--ink-muted)" }}>
                  {h.descripcion}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="py-8 px-6 md:px-10 font-mono text-xs tracking-wide border-t"
        style={{ backgroundColor: "var(--forest)", color: "rgba(245,241,232,0.6)", borderColor: "rgba(245,241,232,0.12)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4">
          <span>© 2026 Juan María Jaureguialzo</span>
          <span>Buenos Aires · Argentina</span>
        </div>
      </footer>
    </div>
  );
}
