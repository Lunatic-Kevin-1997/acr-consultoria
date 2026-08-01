import { BarChart3, Factory, ShieldCheck } from "lucide-react";
import { services } from "../../data/services";
import "./Services.css";

const icons = {
  operation: BarChart3,
  compliance: ShieldCheck,
  project: Factory,
};

function Services() {
  return (
    <section className="services" id="servicios">
      <div className="services__contenedor contenedor">
        <div className="services__encabezado">
          <span className="etiqueta-seccion">Servicios principales</span>

          <h2 className="titulo-seccion">
            Servicios agrupados por los problemas que resolvemos.
          </h2>

          <p className="texto-seccion">
            En lugar de vender entregables aislados, abordamos las brechas que
            suelen frenar a las operaciones industriales: desempeño,
            cumplimiento y ejecución técnica.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => {
            const Icon = icons[service.icon];

            return (
              <article className="service-card" key={service.id}>
                <span className="service-card__icono">
                  <Icon size={25} strokeWidth={2} />
                </span>

                <h3>{service.title}</h3>

                <p className="service-card__descripcion">
                  {service.description}
                </p>

                <p className="service-card__incluye">{service.includes}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;