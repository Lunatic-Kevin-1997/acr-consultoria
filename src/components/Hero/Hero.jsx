import { ArrowRight } from "lucide-react";
import "./Hero.css";

function Hero() {
  const handleImageError = (event) => {
    event.currentTarget.style.display = "none";
  };

  return (
    <section className="hero-redesign" id="inicio">
      <div className="hero-redesign__contenedor contenedor">
        <header className="hero-header">
          <a className="hero-header__brand" href="#inicio">
            <img
              className="hero-header__logo-image" 
              src="/logos/qualisPro.png"
              alt="Qualis Pro" 
            />
          </a>

          <span className="hero-header__descriptor">
            Consultoría B2B especializada
          </span>
        </header>

        <div className="hero-redesign__grid">
          <div className="hero-redesign__content">
            <span className="hero-redesign__eyebrow">
              Ingeniería · Operaciones · SST · Lean Six Sigma
            </span>

            <h1>
              Ingeniería y Operaciones: Eficiencia que Rentabiliza
            </h1>

            <p className="hero-redesign__description">
              Acompañamos a empresas industriales a reducir riesgos, ordenar
              procesos y tomar decisiones técnicas con criterio experto.
            </p>

            <div className="hero-redesign__actions">
              <a className="hero-redesign__button" href="#contacto">
                Agenda un espacio
                <ArrowRight size={17} />
              </a>

              <span className="hero-redesign__action-copy">
                Diagnóstico ejecutivo para operaciones críticas
              </span>
            </div>
          </div>

          <div className="hero-redesign__visual">
            <img
              className="hero-redesign__image"
              src="/logos/fondo-hero.png"
              alt="Línea de producción industrial"
            />

            <div className="hero-redesign__experience">
              <strong>30+</strong>

              <p>
                años de experiencia combinada en investigación y desarrollo
                tecnológico, gestión industrial y asesoría especializada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;