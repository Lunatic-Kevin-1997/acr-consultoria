import { Building2 } from "lucide-react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__contenedor contenedor">
        <a className="header__marca" href="#inicio">
          <span className="header__logo">
            <Building2 size={23} strokeWidth={2} />
          </span>

          <span className="header__identidad">
            <strong>ACR Consultoría</strong>
            <small>Ingeniería · Gestión · Cumplimiento</small>
          </span>
        </a>

        <nav className="header__navegacion" aria-label="Navegación principal">
          <a href="#quienes-somos">Quiénes Somos</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodologia">Metodología</a>
        </nav>

        <a className="header__contacto" href="#contacto">
          Contacto
        </a>
      </div>
    </header>
  );
}

export default Header;