import SiteNav from "@/components/site-nav";
import { TrendingUp } from "lucide-react";

const herramientas = [
  {
    titulo: "Renta Fija",
    descripcion: "Dashboard de análisis y seguimiento de instrumentos de renta fija.",
    href: "https://rentafija.jmjaure.com",
    icon: (
      <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(201,168,76,0.15)" }}>
        <TrendingUp className="w-6 h-6" style={{ color: "#c9a84c" }} />
      </div>
    ),
  },
  {
    titulo: "Openclaw",
    descripcion: "Plataforma de gestión y análisis financiero personalizado.",
    href: "https://openclaw.jmjaure.com",
    icon: (
      <img src="/openclaw.png" alt="Openclaw" className="w-12 h-12 object-contain" />
    ),
  },
];

export default function Herramientas() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0f1923", fontFamily: "var(--font-geist-sans)" }}
    >
      <SiteNav />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#c9a84c" }}>
            Apps & Dashboards
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Herramientas
          </h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Dashboards y aplicaciones para análisis y gestión financiera.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {herramientas.map((h) => (
              <a
                key={h.titulo}
                href={h.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 rounded-2xl transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#1a2332", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div className="mb-5">{h.icon}</div>
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {h.titulo}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm">{h.descripcion}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        className="py-8 px-6 text-center text-sm text-gray-600"
        style={{ backgroundColor: "#0a1018", borderTop: "1px solid rgba(201,168,76,0.1)" }}
      >
        <p>© 2026 Juan Jaureguialzo — Fractional CFO · Buenos Aires, Argentina</p>
      </footer>
    </div>
  );
}
