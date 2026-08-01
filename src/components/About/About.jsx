import "./About.css";

function PersonImage({ src, alt, placeholder }) {
  if (placeholder) {
    return (
      <div className="founder-card__placeholder" aria-label={alt}>
        Agregar foto
      </div>
    );
  }

  return (
    <img
      className="founder-card__image"
      src={src}
      alt={alt}
      onError={(event) => {
        event.currentTarget.style.display = "none";
        event.currentTarget.nextElementSibling.style.display = "grid";
      }}
    />
  );
}

function About() {
  return (
    <section className="leadership" id="quienes-somos">
      <div className="leadership__container contenedor">
        <div className="leadership__intro">
          <div className="leadership__heading">
            <span className="section-kicker">Nuestra mayor virtud</span>

            <h2 className="section-title">
              Liderazgo
              <br />
              Especializado
            </h2>

            <span className="leadership__line" />
          </div>

          <article className="leadership__description-card">
            <p>
              Somos una alianza estratégica de especialistas en asesorías
              técnicas y de gestión, con más de 30 años de experiencia
              combinada en investigación y desarrollo tecnológico, asesoría y
              gestión de proyectos industriales. Integramos conocimiento,
              experiencia y criterio práctico para transformar riesgos,
              procesos y decisiones de inversión en resultados medibles.
            </p>

            <div className="leadership__tags">
              <span>Experiencia en Productividad</span>
              <span>Capacitación Continua</span>
              <span>Asesoría técnica</span>
              <span>Investigación y Desarrollo Tecnológico</span>
            </div>
          </article>
        </div>

        <div className="founders">
          <div className="founders__heading">
            <span className="section-kicker">Equipo fundador</span>

            <h3>
              Dos miradas complementarias para
              <br />
              decisiones industriales críticas
            </h3>
          </div>

          <div className="founders__grid">
            <article className="founder-card">
              <div className="founder-card__media">
                <PersonImage
                  src="/images/angela-chira.png"
                  alt="Ángela Chira Rivera"
                />

                <div
                  className="founder-card__placeholder"
                  style={{ display: "none" }}
                >
                  Agregar foto
                </div>
              </div>

              <div className="founder-card__content">
                <span className="founder-card__role">Socia consultora</span>

                <h4>Ángela Chira Rivera</h4>

                <p>
                  Especialista en gestión operativa, enfocada en ordenar
                  procesos, reducir riesgos y traducir el análisis técnico en
                  decisiones claras para la empresa.
                </p>
              </div>
            </article>

            <article className="founder-card">
              <div className="founder-card__media">
                <PersonImage
                  src="/images/pedro-angeles.png"
                  alt="Pedro Ángeles Chero"
                />

                <div
                  className="founder-card__placeholder"
                  style={{ display: "none" }}
                >
                  Agregar foto
                </div>
              </div>

              <div className="founder-card__content">
                <span className="founder-card__role">Socio consultor</span>

                <h4>Pedro Ángeles Chero</h4>

                <p>
                  Consultor especializado en proyectos industriales, mejora de
                  operaciones y validación técnica de inversiones con enfoque
                  práctico y orientado a resultados.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;