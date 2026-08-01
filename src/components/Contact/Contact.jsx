import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./Contact.css";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/kevin.al.svr@gmail.com";

function Contact() {
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });

  const isSending = status.type === "sending";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus({
      type: "sending",
      message: "Enviando mensaje...",
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "No se pudo enviar el mensaje.");
      }

      form.reset();

      setStatus({
        type: "success",
        message: "Mensaje enviado correctamente.",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          "No se pudo enviar el mensaje. También puedes escribirnos por WhatsApp.",
      });
    }
  };

  return (
    <section className="contact-new" id="contacto">
      <div className="contact-new__container contenedor">
        <div className="contact-new__panel">
          <div className="contact-new__information">
            <span>Siguiente paso</span>

            <h2>
              Conversemos sobre
              <br />
              tu proyecto sin costo
            </h2>

            <p>
              Cuéntanos el desafío: riesgo regulatorio, procesos, inversión
              técnica o una operación que necesita orden y resultados.
            </p>

            <small>
              Respuesta prioritaria para equipos industriales y gerencias de
              operaciones.
            </small>
          </div>

          <form className="contact-new__form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="_subject"
              value="Nueva consulta desde Qualis Pro"
            />

            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              className="contact-new__honeypot"
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="contact-new__field">
              <label htmlFor="nombre">Nombre</label>

              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombre y apellido"
                minLength="2"
                required
              />
            </div>

            <div className="contact-new__field">
              <label htmlFor="correo">Correo corporativo</label>

              <input
                id="correo"
                name="email"
                type="email"
                placeholder="nombre@empresa.com"
                required
              />
            </div>

            <div className="contact-new__field">
              <label htmlFor="desafio">Desafío principal</label>

              <textarea
                id="desafio"
                name="desafio"
                placeholder="Cuéntanos brevemente qué necesitas resolver"
                rows="5"
                minLength="10"
                required
              />
            </div>

            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar mensaje"}

              {!isSending && <ArrowRight size={17} />}
            </button>

            {status.message && (
              <p
                className={`contact-new__status contact-new__status--${status.type}`}
                role="status"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;