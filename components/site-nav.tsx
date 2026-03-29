import Link from "next/link";

export default function SiteNav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
      style={{
        backgroundColor: "rgba(15,25,35,0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,168,76,0.15)",
      }}
    >
      <Link href="/" className="font-semibold tracking-wide text-sm" style={{ color: "#c9a84c" }}>
        JMJ
      </Link>
      <div className="hidden md:flex gap-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <a href="/#servicios" className="hover:text-white transition-colors">Servicios</a>
        <a href="/#experiencia" className="hover:text-white transition-colors">Experiencia</a>
        <a href="/#educacion" className="hover:text-white transition-colors">Educación</a>
        <a href="/#contacto" className="hover:text-white transition-colors">Contacto</a>
        <Link href="/informacion-util" className="hover:text-white transition-colors">
          Información Útil
        </Link>
        <a
          href="https://rentafija.jmjaure.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Herramientas
        </a>
      </div>
      <a
        href="mailto:jmjaure@me.com"
        className="text-sm px-4 py-2 rounded-full font-medium transition-all"
        style={{ backgroundColor: "#c9a84c", color: "#0f1923" }}
      >
        Contactame
      </a>
    </nav>
  );
}
