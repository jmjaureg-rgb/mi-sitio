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

function taxColor(value: string): string {
  const v = value.toLowerCase().trim();
  if (v === "(*)") return "#6b7280";
  if (v.startsWith("no gravado") || v.startsWith("exento")) return "#4ade80";
  if (v.includes("gravado")) return "#f87171";
  return "#d1d5db";
}

export default function TratamientoImpositivo() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0f1923", fontFamily: "var(--font-geist-sans)" }}
    >
      <SiteNav />

      <section className="pt-28 pb-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/informacion-util"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Información Útil
          </Link>

          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-3" style={{ color: "#c9a84c" }}>
            Impuestos
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Tratamiento Impositivo de Activos Financieros
          </h1>
          <p className="text-gray-400 mb-8">
            Período Fiscal 2022 — Con normativa publicada al 04/10/2022
          </p>

          {/* Leyenda */}
          <div className="flex flex-wrap gap-6 mb-8">
            {[
              { color: "#4ade80", label: "Exento / No gravado" },
              { color: "#f87171", label: "Gravado" },
              { color: "#6b7280", label: "No aplica (*)" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Tabla */}
          <div
            className="overflow-x-auto rounded-2xl"
            style={{ border: "1px solid rgba(201,168,76,0.15)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#1a2332" }}>
                  <th
                    rowSpan={2}
                    className="text-left px-4 py-3 font-semibold text-white"
                    style={{
                      borderBottom: "1px solid rgba(201,168,76,0.2)",
                      borderRight: "1px solid rgba(201,168,76,0.15)",
                      minWidth: "280px",
                      verticalAlign: "bottom",
                    }}
                  >
                    Activo Financiero
                  </th>
                  <th
                    colSpan={2}
                    className="text-center px-4 py-3 font-semibold"
                    style={{
                      borderBottom: "1px solid rgba(201,168,76,0.1)",
                      borderRight: "1px solid rgba(201,168,76,0.15)",
                      color: "#c9a84c",
                    }}
                  >
                    Ganancias — P.F. 2022
                  </th>
                  <th
                    rowSpan={2}
                    className="text-center px-4 py-3 font-semibold text-white"
                    style={{
                      borderBottom: "1px solid rgba(201,168,76,0.2)",
                      minWidth: "180px",
                      verticalAlign: "bottom",
                    }}
                  >
                    Bienes Personales — P.F. 2022
                  </th>
                </tr>
                <tr style={{ backgroundColor: "#1a2332" }}>
                  <th
                    className="text-center px-4 py-2 font-medium text-gray-400"
                    style={{
                      borderBottom: "1px solid rgba(201,168,76,0.2)",
                      borderRight: "1px solid rgba(201,168,76,0.1)",
                      minWidth: "190px",
                    }}
                  >
                    Rendimiento
                  </th>
                  <th
                    className="text-center px-4 py-2 font-medium text-gray-400"
                    style={{
                      borderBottom: "1px solid rgba(201,168,76,0.2)",
                      borderRight: "1px solid rgba(201,168,76,0.15)",
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
                    style={{ backgroundColor: i % 2 === 0 ? "#0f1923" : "#111e2a" }}
                    className="transition-colors hover:brightness-110"
                  >
                    <td
                      className="px-4 py-3 text-gray-300"
                      style={{ borderRight: "1px solid rgba(201,168,76,0.08)" }}
                    >
                      {row.activo}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-medium"
                      style={{
                        borderRight: "1px solid rgba(201,168,76,0.08)",
                        color: taxColor(row.rendimiento),
                      }}
                    >
                      {row.rendimiento}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-medium"
                      style={{
                        borderRight: "1px solid rgba(201,168,76,0.08)",
                        color: taxColor(row.enajenacion),
                      }}
                    >
                      {row.enajenacion}
                    </td>
                    <td
                      className="px-4 py-3 text-center font-medium"
                      style={{ color: taxColor(row.bsPersonales) }}
                    >
                      {row.bsPersonales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notas */}
          <div
            className="mt-10 p-6 rounded-2xl"
            style={{ backgroundColor: "#1a2332", border: "1px solid rgba(201,168,76,0.1)" }}
          >
            <h2 className="text-lg font-semibold text-white mb-6">Notas y aclaraciones</h2>
            <div className="space-y-3">
              {notas.map((n) => (
                <div key={n.id} className="flex gap-3 text-sm text-gray-400">
                  <span className="shrink-0 font-semibold" style={{ color: "#c9a84c" }}>
                    ({n.id})
                  </span>
                  <span>{n.texto}</span>
                </div>
              ))}
            </div>
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
