import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import SiteNav from "@/components/site-nav";

export default function Home() {
  const experiencia = [
    {
      empresa: "Golden AI Studio",
      cargo: "CEO & Co-Founder",
      periodo: "2024 — Presente",
      descripcion:
        "Cofundé un estudio AI–audiovisual para producir piezas comerciales híbridas (live action + IA). Lidero finanzas, fundraising, estructura societaria AR/US, revenue operations y governance. Responsable de cap table, data room y alineación de P&L/FCF con crecimiento.",
      logros: [
        "Estructuré y cerré ronda incorporando inversores estratégicos; definí valuación pre-money, condiciones SAFE/SA y vesting.",
        "Arquitectura legal: creación de sociedades espejo AR/US, acuerdos de IP/licencias y contratos comerciales.",
      ],
    },
    {
      empresa: "2020 Films SA",
      cargo: "Director Financiero & Socio",
      periodo: "2019 — 2024",
      descripcion:
        "Financial Manager y Socio. A cargo de Contabilidad, Impuestos, Presupuestos, Reporting, Tesorería, Cobranzas, Sistemas y Recursos Humanos. Relaciones con entidades financieras, negociación de crédito, cash flow diario/mensual/anual y evaluación de proyectos.",
      logros: [],
    },
    {
      empresa: "Clasica Productora SA",
      cargo: "CFO — Vicepresidente & Socio",
      periodo: "2011 — 2019",
      descripcion:
        "Start-up de la compañía. Lideré todas las áreas financiero-administrativas. Negociación e instrumentación de crédito y financiamiento para largometrajes.",
      logros: [],
    },
    {
      empresa: "Ladoblea SA",
      cargo: "Director de Administración y Finanzas",
      periodo: "2000 — 2011",
      descripcion:
        "Responsable de Contabilidad, Impuestos, Presupuestos, Tesorería, Cobranzas, Sistemas y RRHH. Relaciones bancarias, cash flow y presupuesto económico-financiero.",
      logros: [],
    },
    {
      empresa: "Exprinter Banco SA",
      cargo: "Oficial de Negocios Senior — Banca Corporativa",
      periodo: "1996 — 1999",
      descripcion:
        "Captación de clientes corporativos. Generación de operaciones financieras (cheques, facturas, warrants, hipotecarios, comercio exterior). Desarrollo y control de cartera corporativa.",
      logros: [],
    },
  ];

  const servicios = [
    {
      n: "01",
      titulo: "Planificación financiera",
      descripcion:
        "Presupuestos, proyecciones de cash flow y modelos financieros para guiar decisiones estratégicas.",
    },
    {
      n: "02",
      titulo: "Fundraising & Estructura",
      descripcion:
        "Data room, cap table, valuaciones pre-money, condiciones SAFE/SA y acuerdos con inversores.",
    },
    {
      n: "03",
      titulo: "Estructura societaria AR/US",
      descripcion:
        "Sociedades espejo, acuerdos de IP/licencias, contratos comerciales y política de distribución.",
    },
    {
      n: "04",
      titulo: "Gestión operativa",
      descripcion:
        "Contabilidad, impuestos, reporting, tesorería, relaciones bancarias y negociación de crédito.",
    },
  ];

  const educacion = [
    {
      logo: "/logo-cema.jpg",
      institucion: "Universidad del CEMA",
      titulo: "Máster en Finanzas Corporativas",
      periodo: "1998",
    },
    {
      logo: "/logo-uces.jpg",
      institucion: "UCES",
      titulo: "Lic. en Administración de Empresas",
      periodo: "1993 — 1997",
    },
    {
      logo: "/logo-stanford.jpg",
      institucion: "Stanford University",
      titulo: "Aprendizaje automático supervisado: Regresión y clasificación",
      periodo: "2024",
    },
    {
      logo: "/logo-wharton.jpg",
      institucion: "Wharton Online",
      titulo: "AI Fundamentals for Non-Data Scientists",
      periodo: "2024",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <SiteNav />

      {/* HERO */}
      <section className="pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-16 md:mb-24">
            <div className="col-span-12 md:col-span-7">
              <p className="label-mono mb-8">№ 00 / Fractional CFO · Buenos Aires</p>
              <h1
                className="font-display leading-[0.92] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Juan María<br />
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>Jaureguialzo</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-5 md:pb-6">
              <div className="border-t pt-6" style={{ borderColor: "var(--rule)" }}>
                <p
                  className="font-serif-text text-lg md:text-xl leading-relaxed mb-8"
                  style={{ color: "var(--ink-soft)" }}
                >
                  Más de <span className="font-mono text-base" style={{ color: "var(--forest)" }}>25</span> años
                  liderando finanzas en industrias audiovisual, publicitaria y tecnológica. Estrategia,
                  fundraising y estructura societaria para empresas en crecimiento.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:jmjaure@me.com"
                    className="inline-flex items-center font-ui text-xs tracking-[0.18em] uppercase px-5 py-3 transition-all hover:opacity-90"
                    style={{
                      backgroundColor: "var(--forest)",
                      color: "var(--paper)",
                      borderRadius: "9999px",
                    }}
                  >
                    Hablemos →
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaureguialzo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-ui text-xs tracking-[0.18em] uppercase px-5 py-3 transition-all hover:bg-[var(--paper-dark)]"
                    style={{
                      border: "1px solid var(--forest)",
                      color: "var(--forest)",
                      borderRadius: "9999px",
                    }}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 border-t pt-8" style={{ borderColor: "var(--rule)" }}>
            {[
              { num: "25+", label: "Años de experiencia" },
              { num: "5", label: "Compañías lideradas" },
              { num: "AR / US", label: "Estructura societaria dual" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    color: "var(--forest)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div className="label-mono mt-3">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="py-24 md:py-32 px-6 md:px-10 border-t"
        style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper-dark)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-4">
              <p className="label-mono mb-4">№ 01 / Servicios</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Liderazgo financiero{" "}
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>de nivel C</span>,
                sin el costo fijo.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {servicios.map((s, i) => (
              <div
                key={s.n}
                className="py-10 md:py-12 md:px-10"
                style={{
                  borderTop: "1px solid var(--rule)",
                  borderBottom: i >= servicios.length - 2 ? "1px solid var(--rule)" : undefined,
                  borderLeft: i % 2 === 1 ? "1px solid var(--rule)" : undefined,
                }}
              >
                <div className="flex items-baseline gap-4 mb-5">
                  <span className="label-mono">{s.n}</span>
                  <h3 className="font-display text-2xl md:text-3xl" style={{ fontWeight: 400, color: "var(--ink)" }}>
                    {s.titulo}
                  </h3>
                </div>
                <p className="font-serif-text text-base md:text-lg leading-relaxed" style={{ color: "var(--ink-soft)" }}>
                  {s.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-4">
              <p className="label-mono mb-4">№ 02 / Trayectoria</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Tres décadas{" "}
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>en finanzas</span>{" "}
                corporativas.
              </h2>
            </div>
          </div>

          <div>
            {experiencia.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-12 gap-6 py-10 md:py-12"
                style={{
                  borderTop: "1px solid var(--rule)",
                  borderBottom: i === experiencia.length - 1 ? "1px solid var(--rule)" : undefined,
                }}
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="flex items-baseline gap-4">
                    <span className="label-mono">№ {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="font-mono text-sm mt-2" style={{ color: "var(--forest)" }}>
                    {exp.periodo}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3
                    className="font-display text-2xl md:text-3xl mb-1"
                    style={{ fontWeight: 400, color: "var(--ink)" }}
                  >
                    {exp.empresa}
                  </h3>
                  <p
                    className="font-ui text-sm mb-4 tracking-wide"
                    style={{ color: "var(--forest)" }}
                  >
                    {exp.cargo}
                  </p>
                  <p className="font-serif-text text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--ink-soft)" }}>
                    {exp.descripcion}
                  </p>
                  {exp.logros.length > 0 && (
                    <ul className="mt-5 space-y-2 max-w-2xl">
                      {exp.logros.map((l, j) => (
                        <li key={j} className="flex gap-3 font-serif-text text-base" style={{ color: "var(--ink-muted)" }}>
                          <span style={{ color: "var(--forest)" }}>→</span>
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section
        id="educacion"
        className="py-24 md:py-32 px-6 md:px-10 border-t"
        style={{ borderColor: "var(--rule)", backgroundColor: "var(--paper-dark)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 mb-16 md:mb-20">
            <div className="col-span-12 md:col-span-4">
              <p className="label-mono mb-4">№ 03 / Formación</p>
            </div>
            <div className="col-span-12 md:col-span-8">
              <h2
                className="font-display leading-[1] tracking-tight"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Formación{" "}
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>continua</span>.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--rule)" }}>
            {educacion.map((edu, i) => (
              <div
                key={i}
                className="flex items-start gap-6 p-8 md:p-10"
                style={{ backgroundColor: "var(--paper-dark)" }}
              >
                <div
                  className="shrink-0 w-14 h-14 overflow-hidden flex items-center justify-center"
                  style={{ backgroundColor: "var(--paper)", borderRadius: "0.5rem" }}
                >
                  <Image src={edu.logo} alt={edu.institucion} width={56} height={56} className="object-contain" />
                </div>
                <div>
                  <p className="label-mono mb-2">{edu.periodo}</p>
                  <p className="font-display text-xl mb-1" style={{ fontWeight: 400, color: "var(--ink)" }}>
                    {edu.titulo}
                  </p>
                  <p className="font-serif-text text-base" style={{ color: "var(--ink-muted)" }}>
                    {edu.institucion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-px p-8 md:p-10" style={{ backgroundColor: "var(--paper-dark)", borderTop: "1px solid var(--rule)" }}>
            <p className="label-mono mb-5">Certificaciones · Idiomas</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 font-serif-text text-base" style={{ color: "var(--ink-soft)" }}>
              <span>Asesor Financiero</span>
              <span style={{ color: "var(--ink-muted)" }}>·</span>
              <span>Español <em style={{ color: "var(--ink-muted)" }}>nativo</em></span>
              <span style={{ color: "var(--ink-muted)" }}>·</span>
              <span>Inglés <em style={{ color: "var(--ink-muted)" }}>full professional</em></span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 md:py-40 px-6 md:px-10 border-t"
        style={{ borderColor: "var(--rule)", backgroundColor: "var(--forest)", color: "var(--paper)" }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="label-mono mb-8" style={{ color: "rgba(245,241,232,0.5)" }}>
            № 04 / Contacto
          </p>
          <h2
            className="font-display leading-[0.95] tracking-tight mb-12 max-w-4xl"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 300 }}
          >
            ¿Tu empresa necesita{" "}
            <span style={{ fontStyle: "italic" }}>dirección financiera?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px max-w-4xl" style={{ backgroundColor: "rgba(245,241,232,0.18)" }}>
            <a
              href="mailto:jmjaure@me.com"
              className="group flex items-center justify-between p-6 md:p-8 transition-all hover:bg-[var(--forest-light)]"
              style={{ backgroundColor: "var(--forest)" }}
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 opacity-70" />
                <span className="font-display text-xl md:text-2xl" style={{ fontWeight: 400 }}>
                  jmjaure@me.com
                </span>
              </div>
              <span className="font-mono text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jaureguialzo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 md:p-8 transition-all hover:bg-[var(--forest-light)]"
              style={{ backgroundColor: "var(--forest)" }}
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-5 h-5 opacity-70" />
                <span className="font-display text-xl md:text-2xl" style={{ fontWeight: 400 }}>
                  /in/jaureguialzo
                </span>
              </div>
              <span className="font-mono text-2xl transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 md:px-10 font-mono text-xs tracking-wide"
        style={{ backgroundColor: "var(--forest)", color: "rgba(245,241,232,0.6)", borderTop: "1px solid rgba(245,241,232,0.12)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4">
          <span>© 2026 Juan María Jaureguialzo</span>
          <span>Buenos Aires · Argentina</span>
        </div>
      </footer>
    </div>
  );
}
