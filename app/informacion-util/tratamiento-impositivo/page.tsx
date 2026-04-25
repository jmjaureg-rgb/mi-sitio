import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SiteNav from "@/components/site-nav";

type Row = {
  activo: string;
  rendimiento: string;
  enajenacion: string;
  bsPersonales: string;
};

const data: Row[] = [
  { activo: "Acciones argentinas con cotización (CNV)", rendimiento: "dividendo: gravado 7% (b)", enajenacion: "exento", bsPersonales: "exento (tributa R.Sustituto)" },
  { activo: "Acciones argentinas con cotización (no comercializada en CNV)", rendimiento: "dividendo: gravado 7% (b)", enajenacion: "gravado 15%", bsPersonales: "exento (tributa R.Sustituto)" },
  { activo: "Acciones argentinas sin cotización", rendimiento: "dividendo: gravado 7% (b)", enajenacion: "gravado 15%", bsPersonales: "exento (tributa R.Sustituto)" },
  { activo: "Acciones del exterior", rendimiento: "dividendo: gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "ADR", rendimiento: "dividendo: gravado 7% (b)", enajenacion: "gravado 15%", bsPersonales: "(1)" },
  { activo: "Bonos Soberanos de Brasil", rendimiento: "No gravado", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Bonos Corporativos de Brasil", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Bonos corporativos del exterior", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Bonos del Estado Argentino en $", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento" },
  { activo: "Bonos del Estado Argentino en USD", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento" },
  { activo: "Bonos del Estado Extranjeros", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Caja de ahorro argentina en dólares", rendimiento: "exento", enajenacion: "(*)", bsPersonales: "exento" },
  { activo: "Caja de ahorro argentina en pesos", rendimiento: "exento", enajenacion: "(*)", bsPersonales: "exento" },
  { activo: "Cauciones Bursátiles (a)", rendimiento: "gravado a escala", enajenacion: "(*)", bsPersonales: "gravado" },
  { activo: "CEDEAR", rendimiento: "dividendo: gravado a escala", enajenacion: "exento", bsPersonales: "gravado" },
  { activo: "Cuenta corriente argentina en dólares", rendimiento: "(*)", enajenacion: "(*)", bsPersonales: "gravado" },
  { activo: "Cuenta corriente argentina en pesos", rendimiento: "(*)", enajenacion: "(*)", bsPersonales: "gravado" },
  { activo: "FCI argentinos Art. 21 inciso K) LBP (d)", rendimiento: "exento", enajenacion: "exento (***)", bsPersonales: "exento" },
  { activo: "FCI argentino abierto en pesos — CNV (2)", rendimiento: "(2)", enajenacion: "exento (**)", bsPersonales: "gravado (4)" },
  { activo: "FCI argentino abierto en USD — CNV (2)", rendimiento: "(2)", enajenacion: "exento (**)", bsPersonales: "gravado (4)" },
  { activo: "FCI argentino abierto en pesos — fuera de CNV (2)", rendimiento: "(2)", enajenacion: "gravado 5%", bsPersonales: "gravado" },
  { activo: "FCI argentino abierto en USD — fuera de CNV (2)", rendimiento: "(2)", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "FCI cerrado en pesos (2)", rendimiento: "(2)", enajenacion: "exento", bsPersonales: "gravado (4)" },
  { activo: "FCI cerrado en dólares (2)", rendimiento: "(2)", enajenacion: "exento", bsPersonales: "gravado (4)" },
  { activo: "FCI del exterior", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Fideicomiso Financiero del exterior", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Fideicomisos Financieros del país Art. 21 inciso K) LBP (d)", rendimiento: "exento", enajenacion: "exento (***)", bsPersonales: "exento" },
  { activo: "Instrumentos emitidos en $ para fomentar inversión productiva (3)", rendimiento: "exento", enajenacion: "gravado", bsPersonales: "exento" },
  { activo: "Letras del Tesoro extranjero", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Letras del Tesoro Argentino en $", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento" },
  { activo: "Letras del Tesoro Argentino en USD", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento" },
  { activo: "Monedas digitales (5)", rendimiento: "(*)", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Money market o cualquier otra cuenta remunerada del exterior", rendimiento: "gravado a escala", enajenacion: "(*)", bsPersonales: "gravado" },
  { activo: "ON de empresas argentinas en $ (Obligaciones Negociables)", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento (c)" },
  { activo: "ON de empresas argentinas en USD (Obligaciones Negociables)", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "gravado" },
  { activo: "ON de empresas extranjeras (Obligaciones Negociables)", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Plazo fijo en Argentina en pesos sin cláusula de ajuste", rendimiento: "exento", enajenacion: "(*)", bsPersonales: "exento" },
  { activo: "Plazo fijo en Argentina en pesos con cláusula de ajuste", rendimiento: "exento", enajenacion: "(*)", bsPersonales: "exento" },
  { activo: "Plazo fijo en Argentina en dólares", rendimiento: "gravado a escala", enajenacion: "(*)", bsPersonales: "exento" },
  { activo: "Plazo fijo (time deposit) en el exterior", rendimiento: "gravado a escala", enajenacion: "(*)", bsPersonales: "gravado" },
  { activo: "Títulos públicos argentinos en $", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento" },
  { activo: "Títulos públicos argentinos en USD", rendimiento: "exento", enajenacion: "exento (**)", bsPersonales: "exento" },
  { activo: "Títulos Públicos Extranjeros", rendimiento: "gravado a escala", enajenacion: "gravado 15%", bsPersonales: "gravado" },
  { activo: "Títulos, acciones y demás valores de Bolivia", rendimiento: "No gravado", enajenacion: "No gravado", bsPersonales: "No gravado" },
];

const notas = [
  { id: "*", texto: "No resulta de aplicación." },
  { id: "**", texto: "Según el artículo 26 inciso u), para el período fiscal 2022 el resultado de la compraventa estará exento en la medida que coticen en bolsas o mercados de valores." },
  { id: "***", texto: "En tanto cumplan las condiciones del inciso u) del artículo 26 LIG." },
  { id: "1", texto: "No existe una única postura: la posición mayoritaria es que no está gravado por haber tributado la sociedad emisora de las acciones como R.Sustituto en Bs.Personales." },
  { id: "2", texto: "De acuerdo a la modificación del art. 26 inciso h) introducida por el art. 33 de la Ley 27541, vuelve a renacer la exención para los rendimientos de los FCI según art. 25 inc. b) Ley 24083, siempre que los referidos títulos sean colocados por oferta pública." },
  { id: "3", texto: "Serán aquellos que establezca el PEN. No hay remisión a la exención si estos instrumentos se enajenaran (modificación introducida por Ley 27.638); su enajenación estará alcanzada por el impuesto cedular del art. 98 LIG t.o. 2019." },
  { id: "4", texto: "No comprendidos en el Artículo 21 inciso k) de la Ley del Impuesto sobre los Bienes Personales (incorporado por la Ley 27.638)." },
  { id: "5", texto: "Interpretación exteriorizada por AFIP a través de su Dictamen DAT 2/2022." },
  { id: "a", texto: "Existen opiniones doctrinarias que consideran su tratamiento asimilable a operaciones de pase y por tanto las consideran exentas." },
  { id: "b", texto: "Modificación introducida por el artículo 7 de la Ley 27.630 al primer párrafo del artículo 97 de la LIG (T.O. 2019)." },
  { id: "c", texto: "Exención introducida por Ley 27.638 en tanto sean en moneda nacional y cumplan las condiciones del art. 36 Ley 23.576." },
  { id: "d", texto: "La Ley 27.638 ha agregado una nueva exención para estos instrumentos colocados por oferta pública de la CNV cuyo activo subyacente esté integrado como mínimo por: 1) títulos emitidos por el Estado; 2) depósitos a plazo fijo, caja de ahorro u otras formas de captación (Ley 21526); 3) ON en pesos (art. 36 Ley 23576); 4) instrumentos en pesos para fomentar la inversión productiva." },
];

type Tone = "exento" | "gravado" | "neutral" | "default";

function tone(value: string): Tone {
  const v = value.toLowerCase().trim();
  if (v === "(*)") return "neutral";
  if (v.startsWith("no gravado") || v.startsWith("exento")) return "exento";
  if (v.includes("gravado")) return "gravado";
  return "default";
}

function toneStyle(t: Tone): React.CSSProperties {
  switch (t) {
    case "exento":
      return { color: "var(--forest)" };
    case "gravado":
      return { color: "#A8401C" };
    case "neutral":
      return { color: "var(--ink-muted)" };
    default:
      return { color: "var(--ink-soft)" };
  }
}

export default function TratamientoImpositivo() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--paper)", color: "var(--ink)" }}>
      <SiteNav />

      <section className="pt-32 pb-24 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="font-mono text-xs tracking-wider mb-10" style={{ color: "var(--ink-muted)" }}>
            <Link href="/" className="hover:opacity-60 transition-opacity uppercase">JMJ</Link>
            <span className="mx-2">/</span>
            <Link href="/informacion-util" className="hover:opacity-60 transition-opacity uppercase">Información Útil</Link>
            <span className="mx-2">/</span>
            <span className="uppercase" style={{ color: "var(--ink)" }}>Tratamiento Impositivo</span>
          </nav>

          <Link
            href="/informacion-util"
            className="inline-flex items-center gap-2 font-ui text-sm transition-colors hover:opacity-60 mb-8"
            style={{ color: "var(--forest)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Información Útil
          </Link>

          {/* Header */}
          <div className="grid grid-cols-12 gap-6 mb-14 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="label-mono mb-4">№ 01 / Impuestos</p>
              <h1
                className="font-display leading-[1] tracking-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 300, color: "var(--ink)" }}
              >
                Tratamiento{" "}
                <span style={{ fontStyle: "italic", color: "var(--forest)" }}>impositivo</span>{" "}
                de activos financieros
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="border-t pt-4" style={{ borderColor: "var(--rule)" }}>
                <p className="font-mono text-xs uppercase tracking-wider mb-1" style={{ color: "var(--ink-muted)" }}>
                  Período fiscal
                </p>
                <p className="font-display text-2xl" style={{ fontWeight: 400, color: "var(--ink)" }}>
                  2022
                </p>
                <p className="font-serif-text text-sm mt-2" style={{ color: "var(--ink-muted)" }}>
                  Normativa publicada al 04/10/2022
                </p>
              </div>
            </div>
          </div>

          {/* Leyenda */}
          <div className="flex flex-wrap gap-6 mb-10 pb-6 border-b" style={{ borderColor: "var(--rule)" }}>
            {[
              { color: "var(--forest)", label: "Exento / No gravado" },
              { color: "#A8401C", label: "Gravado" },
              { color: "var(--ink-muted)", label: "No aplica (*)" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 font-ui text-sm" style={{ color: "var(--ink-soft)" }}>
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Tabla */}
          <div className="overflow-x-auto" style={{ border: "1px solid var(--rule)" }}>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "var(--paper-dark)" }}>
                  <th
                    rowSpan={2}
                    className="text-left px-4 py-4 label-mono"
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      borderRight: "1px solid var(--rule)",
                      minWidth: "280px",
                      verticalAlign: "bottom",
                      color: "var(--ink)",
                    }}
                  >
                    Activo financiero
                  </th>
                  <th
                    colSpan={2}
                    className="text-center px-4 py-3 font-ui font-semibold"
                    style={{
                      borderRight: "1px solid var(--rule)",
                      color: "var(--forest)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Ganancias — P.F. 2022
                  </th>
                  <th
                    rowSpan={2}
                    className="text-center px-4 py-4 label-mono"
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      minWidth: "180px",
                      verticalAlign: "bottom",
                      color: "var(--ink)",
                    }}
                  >
                    Bienes Personales — P.F. 2022
                  </th>
                </tr>
                <tr style={{ backgroundColor: "var(--paper-dark)" }}>
                  <th
                    className="text-center px-4 py-3 label-mono"
                    style={{
                      borderTop: "1px solid var(--rule)",
                      borderBottom: "1px solid var(--rule)",
                      borderRight: "1px solid var(--rule)",
                      minWidth: "190px",
                    }}
                  >
                    Rendimiento
                  </th>
                  <th
                    className="text-center px-4 py-3 label-mono"
                    style={{
                      borderTop: "1px solid var(--rule)",
                      borderBottom: "1px solid var(--rule)",
                      borderRight: "1px solid var(--rule)",
                      minWidth: "190px",
                    }}
                  >
                    Resultado Enajenación
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr
                    key={i}
                    style={{ backgroundColor: i % 2 === 0 ? "var(--paper)" : "rgba(15,61,46,0.025)" }}
                  >
                    <td
                      className="px-4 py-3 font-serif-text"
                      style={{ borderRight: "1px solid var(--rule)", borderTop: "1px solid var(--rule)", color: "var(--ink-soft)" }}
                    >
                      {row.activo}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-ui font-medium text-sm"
                      style={{ borderRight: "1px solid var(--rule)", borderTop: "1px solid var(--rule)", ...toneStyle(tone(row.rendimiento)) }}
                    >
                      {row.rendimiento}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-ui font-medium text-sm"
                      style={{ borderRight: "1px solid var(--rule)", borderTop: "1px solid var(--rule)", ...toneStyle(tone(row.enajenacion)) }}
                    >
                      {row.enajenacion}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-ui font-medium text-sm"
                      style={{ borderTop: "1px solid var(--rule)", ...toneStyle(tone(row.bsPersonales)) }}
                    >
                      {row.bsPersonales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notas */}
          <div className="mt-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <p className="label-mono">Notas</p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="space-y-4">
                {notas.map((n) => (
                  <div key={n.id} className="grid grid-cols-12 gap-4 font-serif-text text-base leading-relaxed pb-4 border-b" style={{ borderColor: "var(--rule)", color: "var(--ink-soft)" }}>
                    <span className="col-span-2 md:col-span-1 font-mono text-sm" style={{ color: "var(--forest)" }}>
                      ({n.id})
                    </span>
                    <span className="col-span-10 md:col-span-11">{n.texto}</span>
                  </div>
                ))}
              </div>
            </div>
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
