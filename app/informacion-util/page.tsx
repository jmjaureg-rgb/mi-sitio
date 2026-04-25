import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SiteNav from "@/components/site-nav";

const recursos = [
  {
    n: "01",
    titulo: "Tratamiento Impositivo de Activos Financieros",
    descripcion:
      "Tabla completa del tratamiento en Ganancias y Bienes Personales para el Período Fiscal 2022.",
    href: "/informacion-util/tratamiento-impositivo",
    external: false,
  },
];

export default function InformacionUtil() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <SiteNav />

      <section className="pt-36 pb-24 md:pt-44 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <nav className="font-mono text-xs tracking-wider mb-12" style={{ color: "var(--ink-muted)" }}>
            <Link href="/" className="hover:opacity-60 transition-opacity uppercase">JMJ</Link>
            <span className="mx-2">/</span>
            <span className="uppercase" style={{ color: "var(--ink)" }}>Información Útil</span>
          </nav>

          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-4">
              <p className="label-mono mb-4">№ 01 / Recursos</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h1
                className="font-display leading-[1] tracking-tight mb-6"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Información{" "}
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>útil</span>
              </h1>
              <p className="font-serif-text text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "var(--ink-soft)" }}>
                Material de referencia para la toma de decisiones financieras.
              </p>
            </div>
          </div>

          <div>
            {recursos.map((r) => {
              const Wrap = r.external ? "a" : Link;
              const wrapProps = r.external
                ? { href: r.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: r.href };
              return (
                <Wrap
                  key={r.n}
                  {...(wrapProps as { href: string })}
                  className="group block py-10 md:py-14 transition-colors hover:bg-[var(--paper-dark)] -mx-6 md:-mx-10 px-6 md:px-10"
                  style={{ borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}
                >
                  <div className="grid grid-cols-12 gap-6 items-baseline">
                    <div className="col-span-12 md:col-span-2">
                      <span className="label-mono">№ {r.n}</span>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                      <h2
                        className="font-display text-2xl md:text-4xl mb-3 transition-colors group-hover:text-[var(--forest)]"
                        style={{ fontWeight: 400, color: "var(--ink)" }}
                      >
                        {r.titulo}
                      </h2>
                      <p className="font-serif-text text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--ink-muted)" }}>
                        {r.descripcion}
                      </p>
                    </div>
                    <div className="hidden md:flex col-span-1 justify-end">
                      <ArrowUpRight
                        className="w-6 h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                        style={{ color: "var(--ink-muted)" }}
                      />
                    </div>
                  </div>
                </Wrap>
              );
            })}
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
