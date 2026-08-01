import { Factory, ShieldCheck, Workflow } from "lucide-react";
import "./Services.css";

const services = [
  {
    id: 1,
    icon: Workflow,
    title: "Más rendimiento en tu operación diaria",
    description:
      "Identificamos en 1-2 días dónde tu planta puede ganar en eficiencia —menos mermas, menos tiempos muertos— y te entregamos un plan de acción concreto que incluye diagnóstico operacional, mejora de procesos, indicadores, rutinas de gestión y estandarización.",
  },
  {
    id: 2,
    icon: Factory,
    title: "Decisiones de inversión con respaldo técnico",
    description:
      "Te acompañamos a evaluar, comprar o importar el equipo correcto para tu operación —con levantamientos, especificaciones técnicas, identificación de la tecnología adecuada según objetivos de productividad o ambientales, evaluación y acompañamiento a proveedores hasta la puesta en marcha— con criterio que te da seguridad en la inversión.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Tu empresa en regla y protegida",
    description:
      "Revisamos el estado de tu documentación básica frente a SUNAFIL —IPERC, registros, SST— con matrices legales, auditorías, planes de acción y preparación para inspecciones, para que tu operación esté respaldada y tranquila.",
  },
];

function Services() {
  return (
    <section className="solutions" id="servicios">
      <div className="solutions__container contenedor">
        <div className="solutions__heading">
          <span className="section-kicker">Soluciones clave</span>

          <h2 className="section-title">
            Diseñadas alrededor de
            <br />
            tus desafíos operativos
          </h2>
        </div>

        <div className="solutions__grid">
          {services.map(({ id, icon: Icon, title, description }) => (
            <article className="solution-card" key={id}>
              <span className="solution-card__icon">
                <Icon size={23} strokeWidth={2} />
              </span>

              <h3>{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;