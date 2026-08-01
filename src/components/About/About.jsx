import "./About.css";

function About() {
  return (
    <section className="about" id="quienes-somos">
      <div className="about__contenedor contenedor">
        <div className="about__informacion">
          <span className="etiqueta-seccion">Quiénes somos</span>

          <h2 className="titulo-seccion">
            Experiencia para conectar estrategia, operación y cumplimiento.
          </h2>

          <p className="texto-seccion">
            Somos una consultora B2B enfocada en acompañar a empresas
            industriales en retos donde la ingeniería, la mejora continua y la
            normativa deben trabajar juntas. Integramos experiencia en campo,
            criterio técnico y formación de posgrado para convertir
            diagnósticos en planes accionables.
          </p>
        </div>

        <article className="about__tarjeta">
          <strong className="about__numero">20+</strong>

          <h3>años de experiencia en el sector industrial</h3>

          <ul className="about__lista">
            <li>Posgrados y criterio técnico aplicado</li>

            <li>
              Trabajo con operaciones, mantenimiento, HSEQ y dirección
            </li>

            <li>Enfoque práctico, trazable y orientado a resultados</li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default About;