import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

/*
  Perú:
  51 + número celular de 9 dígitos.

  Ejemplo:
  51987654321

  No colocar:
  +, espacios, guiones ni paréntesis.
*/
const WHATSAPP_NUMBER = "51923924073";

const WHATSAPP_MESSAGE =
  "Hola, vi la página de ACR Consultoría y me gustaría solicitar información sobre sus servicios.";

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      className="whatsapp-button"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      title="Escribir por WhatsApp"
    >
      <MessageCircle size={25} strokeWidth={2.2} />

      <span>WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;