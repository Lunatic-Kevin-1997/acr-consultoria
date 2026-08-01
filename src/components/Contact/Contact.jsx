import { useState } from "react";
import { ArrowRight, Mail, ShieldCheck } from "lucide-react";
import "./Contact.css";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/kevin.al.svr@gmail.com";

function Contact() {
  const [formStatus, setFormStatus] = useState({
    state: "idle",
    message: "",
  });

  const isSending = formStatus.state === "sending";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus({
      state: "sending",
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

      const submissionFailed =
        !response.ok ||
        result.success === false ||
        result.success === "false";

      if (submissionFailed) {
        throw new Error(
          result.message || "No se pudo enviar el formulario.",
        );
      }

      form.reset();

      setFormStatus({
        state: "success",
        message:
          "Mensaje enviado correctamente. Nos comunicaremos contigo pronto.",
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      setFormStatus({
        state: "error",
        message:
          "No pudimos enviar el mensaje. Intenta nuevamente o comunícate por WhatsApp.",
      });
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__contenedor contenedor">
        <div className="contact__informacion">
          <span className="contact__etiqueta">Contacto</span>

          <h2>Hablemos sobre el siguiente paso de tu operación.</h2>

          <p>
            Cuéntanos qué proceso, sistema o proyecto necesitas fortalecer.
            Responderemos con una primera orientación para definir alcance,
            prioridades y próximos pasos.
          </p>

          <ul className="contact__beneficios">
            <li>
              <Mail size={18} />
              <span>Respuesta inicial para empresas B2B</span>
            </li>

            <li>
              <ShieldCheck size={18} />
              <span>SST, medio ambiente, operación e ingeniería</span>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Configuración del correo recibido */}
          <input
            type="hidden"
            name="_subject"
            value="Nueva consulta desde ACR Consultoría"
          />

          <input type="hidden" name="_template" value="table" />

          {/*
            Para la demostración desactivamos el captcha.
            Conviene activarlo cuando la web pase a producción.
          */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Campo trampa contra bots */}
          <input
            className="contact-form__honeypot"
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="contact-form__grupo">
            <label htmlFor="nombre">Nombre</label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              autoComplete="name"
              minLength="2"
              required
            />
          </div>

          <div className="contact-form__grupo">
            <label htmlFor="correo">Correo corporativo</label>

            <input
              id="correo"
              name="email"
              type="email"
              placeholder="nombre@empresa.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="contact-form__grupo">
            <label htmlFor="empresa">Empresa</label>

            <input
              id="empresa"
              name="empresa"
              type="text"
              placeholder="Nombre de la empresa"
              autoComplete="organization"
              minLength="2"
              required
            />
          </div>

          <div className="contact-form__grupo">
            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos sobre tu necesidad o proyecto"
              rows="5"
              minLength="10"
              required
            />
          </div>

          <button
            className="contact-form__boton"
            type="submit"
            disabled={isSending}
            aria-busy={isSending}
          >
            {isSending ? "Enviando..." : "Enviar mensaje"}

            {!isSending && <ArrowRight size={18} />}
          </button>

          {formStatus.message && (
            <p
              className={`contact-form__estado contact-form__estado--${formStatus.state}`}
              role="status"
              aria-live="polite"
            >
              {formStatus.message}
            </p>
          )}

          <p className="contact-form__aviso">
            Al enviar este formulario, podremos contactarte para coordinar una
            primera conversación.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;