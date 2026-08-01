import { methodologySteps } from "../../data/methodology";
import "./Methodology.css";

function Methodology() {
  return (
    <section className="methodology" id="metodologia">
      <div className="methodology__contenedor contenedor">
        <div className="methodology__encabezado">
          <span className="etiqueta-seccion">Metodología</span>

          <h2 className="titulo-seccion">
            Una ruta simple para pasar de la brecha al resultado sostenible.
          </h2>

          <p className="texto-seccion">
            Trabajamos con equipos internos para que las soluciones no se
            queden en documentos: se implementen, se midan y se mantengan.
          </p>
        </div>

        <div className="methodology__grid">
          {methodologySteps.map((step) => (
            <article
              className={`methodology-card ${
                step.featured ? "methodology-card--featured" : ""
              }`}
              key={step.id}
            >
              <span className="methodology-card__numero">{step.number}</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Methodology;