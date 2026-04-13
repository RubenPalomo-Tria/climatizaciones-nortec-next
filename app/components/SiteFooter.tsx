import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid container">
        <div>
          <h3>Climatizaciones Nortec</h3>
          <p>
            Soluciones para todo tipo de climatización. Particular y profesional
            con servicio técnico garantizado.
          </p>
        </div>
        <div>
          <h4>Servicios</h4>
          <ul>
            <li>
              <a href="#aerotermia">Aerotermia</a>
            </li>
            <li>
              <a href="#aire-acondicionado">Aire acondicionado</a>
            </li>
            <li>
              <a href="#mantenimiento">Mantenimiento</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Información</h4>
          <ul>
            <li>
              <a href="#proceso">Sobre nosotros</a>
            </li>
            <li>
              <Link href="/">Tienda (próximamente)</Link>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@climatizaciones.nortec"
                target="_blank"
                rel="noreferrer"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Política de Cookies</a>
            </li>
            <li>
              <a href="#">Política de Privacidad</a>
            </li>
            <li>
              <a href="#">Protección de Datos</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
