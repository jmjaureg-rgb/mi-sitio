import { Briefcase, GraduationCap, Mail, Linkedin, TrendingUp, FileText, Building2, ChevronDown } from "lucide-react";

export default function Home() {
  const experiencia = [
    {
      empresa: "Golden AI Studio",
      cargo: "CFO & Co-Founder",
      periodo: "Julio 2024 — Presente",
      descripcion:
        "Cofundé un estudio AI–audiovisual para producir piezas comerciales híbridas (live action + IA). Lidero finanzas, fundraising, estructura societaria AR/US, revenue operations y governance. Responsable de cap table, data room y alineación de P&L/FCF con crecimiento.",
      logros: [
        "Estructuré y cerré ronda incorporando inversores estratégicos; definí valuación pre-money, condiciones SAFE/SA y vesting.",
        "Arquitectura legal: creación de sociedades espejo AR/US, acuerdos de IP/licencias y contratos comerciales.",
      ],
    },
    {
      empresa: "2020 Films SA",
      cargo: "Director Financiero",
      periodo: "Junio 2019 — Junio 2024",
      descripcion:
        "Financial Manager y Socio. A cargo de Contabilidad, Impuestos, Presupuestos, Reporting, Tesorería, Cobranzas, Sistemas y Recursos Humanos. Relaciones con entidades financieras, negociación de crédito, cash flow diario/mensual/anual y evaluación de proyectos.",
      logros: [],
    },
    {
      empresa: "Clasica Productora SA",
      cargo: "CFO — Vicepresidente & Socio",
      periodo: "Abril 2011 — Marzo 2019",
      descripcion:
        "Start-up de la compañía. Lideré todas las áreas financiero-administrativas. Negociación e instrumentación de crédito y financiamiento para largometrajes.",
      logros: [],
    },
    {
      empresa: "Ladoblea SA",
      cargo: "Director de Administración y Finanzas",
      periodo: "Agosto 2000 — Marzo 2011",
      descripcion:
        "Responsable de Contabilidad, Impuestos, Presupuestos, Tesorería, Cobranzas, Sistemas y RRHH. Relaciones bancarias, cash flow y presupuesto económico-financiero.",
      logros: [],
    },
    {
      empresa: "Exprinter Banco SA",
      cargo: "Oficial de Negocios Senior — Banca Corporativa",
      periodo: "Marzo 1996 — Marzo 1999",
      descripcion:
        "Captación de clientes corporativos. Generación de operaciones financieras (cheques, facturas, warrants, hipotecarios, comercio exterior). Desarrollo y control de cartera corporativa.",
      logros: [],
    },
  ];

  const servicios = [
    {
      icon: <TrendingUp className="w-7 h-7" />,
      titulo: "Planificación Financiera",
      descripcion:
        "Diseño de presupuestos, proyecciones de cash flow y modelos financieros para guiar decisiones estratégicas.",
    },
    {
      icon: <FileText className="w-7 h-7" />,
      titulo: "Fundraising & Estructura",
      descripcion:
        "Armado de data room, cap table, valuaciones pre-money, condiciones SAFE/SA y acuerdos con inversores.",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      titulo: "Estructura Societaria AR/US",
      descripcion:
        "Creación de sociedades espejo, acuerdos de IP/licencias, contratos comerciales y política de distribución.",
    },
    {
      icon: <Briefcase className="w-7 h-7" />,
      titulo: "Gestión Operativa",
      descripcion:
        "Contabilidad, impuestos, reporting, tesorería, relaciones bancarias y negociación de crédito.",
    },
  ];

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0f1923", fontFamily: "var(--font-geist-sans)" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{ backgroundColor: "rgba(15,25,35,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,168,76,0.15)" }}
      >
        <span className="font-semibold tracking-wide text-sm" style={{ color: "#c9a84c" }}>
          JMJ
        </span>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
          <a href="#experiencia" className="hover:text-white transition-colors">Experiencia</a>
          <a href="#educacion" className="hover:text-white transition-colors">Educación</a>
          <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          <a href="https://rentafija.jmjaure.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Herramientas</a>
        </div>
        <a
          href="mailto:jmjaure@me.com"
          className="text-sm px-4 py-2 rounded-full font-medium transition-all"
          style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
        >
          Contactame
        </a>
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 relative"
        style={{ background: "linear-gradient(135deg, #0f1923 0%, #1a2d3d 50%, #0f1923 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #c9a84c 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-6" style={{ color: "#c9a84c" }}>
            Fractional CFO
</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Juan<br />
            Jaureguialzo
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Más de 25 años liderando finanzas en industrias audiovisual, publicitaria y tecnológica.
            Estrategia financiera, fundraising y estructura societaria para empresas en crecimiento.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jmjaure@me.com"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:opacity-90"
              style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
            >
              Hablemos
            </a>
            <a
              href="https://www.linkedin.com/in/jaureguialzo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all border hover:bg-white/5"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#c9a84c" }}
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "#c9a84c" }}>
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 px-6" style={{ backgroundColor: "#1a2332" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#c9a84c" }}>
            Qué ofrezco
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Servicios de Fractional CFO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl transition-all hover:scale-[1.02]"
                style={{ backgroundColor: "#0f1923", border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <div className="mb-4" style={{ color: "#c9a84c" }}>{s.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.titulo}</h3>
                <p className="text-gray-400 leading-relaxed">{s.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0f1923" }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
            Por qué un Fractional CFO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Liderazgo financiero de nivel C,<br className="hidden md:block" /> sin el costo fijo
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Accedés a un CFO experimentado con foco en tu negocio, por la fracción de tiempo que necesitás.
            Ideal para startups, pymes en escala y empresas en procesos de fundraising o reestructuración.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { numero: "25+", label: "Años de experiencia" },
              { numero: "3", label: "Industrias lideradas" },
              { numero: "AR/US", label: "Estructura societaria dual" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2" style={{ color: "#c9a84c" }}>{stat.numero}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="py-24 px-6" style={{ backgroundColor: "#1a2332" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#c9a84c" }}>
            Trayectoria
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Experiencia Profesional
          </h2>
          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-px ml-3"
              style={{ backgroundColor: "rgba(201,168,76,0.2)" }}
            />
            <div className="space-y-10">
              {experiencia.map((exp, i) => (
                <div key={i} className="relative pl-12">
                  <div
                    className="absolute left-0 top-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
                  >
                    {i + 1}
                  </div>
                  <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: "#0f1923", border: "1px solid rgba(201,168,76,0.1)" }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-white">{exp.empresa}</h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c" }}>
                        {exp.periodo}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-3" style={{ color: "#c9a84c" }}>{exp.cargo}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.descripcion}</p>
                    {exp.logros.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {exp.logros.map((l, j) => (
                          <li key={j} className="flex gap-2 text-sm text-gray-400">
                            <span style={{ color: "#c9a84c" }}>→</span>
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
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section id="educacion" className="py-24 px-6" style={{ backgroundColor: "#0f1923" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3 text-center" style={{ color: "#c9a84c" }}>
            Formación
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
            Educación
          </h2>
          <div className="space-y-6">
            {[
              {
                institucion: "CEMA",
                titulo: "Master en Finanzas Corporativas",
                periodo: "1998",
              },
              {
                institucion: "UCES — Universidad de Ciencias Empresariales y Sociales",
                titulo: "Lic. en Administración de Empresas",
                periodo: "1993 — 1997",
              },
            ].map((edu, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-xl"
                style={{ backgroundColor: "#1a2332", border: "1px solid rgba(201,168,76,0.1)" }}
              >
                <div className="shrink-0">
                  <GraduationCap className="w-8 h-8" style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p className="font-semibold text-white">{edu.titulo}</p>
                  <p className="text-sm text-gray-400">{edu.institucion}</p>
                  <p className="text-xs mt-1" style={{ color: "#c9a84c" }}>{edu.periodo}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: "#1a2332", border: "1px solid rgba(201,168,76,0.1)" }}>
            <p className="text-sm font-medium text-gray-400 mb-3">Certificaciones & Idiomas</p>
            <div className="flex flex-wrap gap-3">
              {["Asesor Financiero", "Español — Nativo", "Inglés — Full Professional"].map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.2)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a2332 0%, #1a2d3d 50%, #1a2332 100%)" }}
      >
        <div className="max-w-xl mx-auto">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
            Hablemos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Tu empresa necesita<br />dirección financiera?
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Analizamos juntos la situación de tu compañía y definimos cómo puedo sumar valor como tu Fractional CFO.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jmjaure@me.com"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
            >
              <Mail className="w-4 h-4" />
              jmjaure@me.com
            </a>
            <a
              href="https://www.linkedin.com/in/jaureguialzo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all border hover:bg-white/5"
              style={{ borderColor: "rgba(201,168,76,0.4)", color: "#c9a84c" }}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 px-6 text-center text-sm text-gray-600"
        style={{ backgroundColor: "#0a1018", borderTop: "1px solid rgba(201,168,76,0.1)" }}
      >
        <p>© 2026 Juan Maria Jaureguialzo — Fractional CFO · Buenos Aires, Argentina</p>
      </footer>
    </div>
  );
}
