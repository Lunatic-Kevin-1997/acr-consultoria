import {
  CircleCheckBig,
  ClipboardList,
  FileSearch,
} from "lucide-react";

import "./Methodology.css";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Levantamos riesgos, procesos críticos y oportunidades con mirada ejecutiva y técnica.",
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Plan de Acción",
    description:
      "Priorizamos iniciativas, responsables, indicadores y decisiones con impacto operativo real.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Implementación y Resultados",
    description:
      "Acompañamos la ejecución, medimos avances y transferimos capacidades al equipo interno.",
    icon: CircleCheckBig,
  },
];

function Methodology() {
  return (
    <section className="methodology-new" id="metodologia">
      <div className="methodology-new__container contenedor">
        <div className="methodology-new__heading">
          <span>Metodología</span>

          <h2>
            De la evaluación técnica
            <br />
            al resultado medible
          </h2>
        </div>

        <div className="methodology-new__grid">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article className="methodology-new__card" key={number}>
              <div className="methodology-new__card-top">
                <strong>{number}</strong>
                <Icon size={25} aria-hidden="true" />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Methodology;