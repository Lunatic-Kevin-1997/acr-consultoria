import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__contenedor contenedor">
        <a className="header__marca" href="#inicio">
          <img
            className="header__logo-imagen"
            src="/logos/qualisProFull.png"
            alt="Qualis Pro"
          />

          <span className="header__identidad">
            <strong>Qualis Pro</strong>
            <small>Excelencia operacional · Cumplimiento · Resultados</small>
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