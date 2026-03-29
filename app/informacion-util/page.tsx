import Link from "next/link";
import { FileText } from "lucide-react";
import SiteNav from "@/components/site-nav";

export default function InformacionUtil() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0f1923", fontFamily: "var(--font-geist-sans)" }}
    >
      <SiteNav />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#c9a84c" }}>
            Recursos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Información Útil
          </h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Material de referencia para la toma de decisiones financieras.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/informacion-util/tratamiento-impositivo"
              className="group p-8 rounded-2xl transition-all hover:scale-[1.02]"
              style={{ backgroundColor: "#1a2332", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <div className="mb-4" style={{ color: "#c9a84c" }}>
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-[#c9a84c] transition-colors">
                Tratamiento Impositivo de Activos Financieros
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm">
                Tabla completa del tratamiento en Ganancias y Bienes Personales para el Período Fiscal 2022.
              </p>
            </Link>
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
