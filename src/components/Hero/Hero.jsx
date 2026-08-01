import {
  ArrowRight,
  BadgeCheck,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__contenedor contenedor">
        <div className="hero__informacion">
          <div className="hero__etiqueta">
            <BadgeCheck size={16} />
            <span>Consultoría B2B para industria</span>
          </div>

          <h1>
            Asesoría técnica, excelencia operacional y cumplimiento normativo
            para plantas industriales.
          </h1>

          <p className="hero__descripcion">
            Acompañamos a organizaciones B2B en la optimización de procesos,
            sistemas de gestión, asesoría técnica de equipos y cumplimiento en
            SST y medio ambiente.
          </p>

          <a className="hero__boton" href="#contacto">
            Solicitar diagnóstico
            <ArrowRight size={18} />
          </a>
        </div>

        <article className="hero__tarjeta">
          <div className="hero__tarjeta-superior">
            <span className="hero__tarjeta-icono">
              <ChartNoAxesColumnIncreasing size={27} />
            </span>

            <span className="hero__tarjeta-etiqueta">Senior industrial</span>
          </div>

          <h2>
            Convertimos estándares técnicos en resultados operativos medibles.
          </h2>

          <ul className="hero__lista">
            <li>Excelencia operacional y mejora de procesos</li>
            <li>Sistemas de gestión, SST y medio ambiente</li>
            <li>Asesoría técnica en plantas y equipos industriales</li>
          </ul>

          <div className="hero__enfoque">
            <strong>Enfoque</strong>
            <span>Diagnóstico → Acción → Control</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;