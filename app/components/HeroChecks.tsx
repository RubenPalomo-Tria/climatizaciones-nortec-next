import { CheckCircle2 } from "lucide-react";

export default function HeroChecks() {
  return (
    <ul
      className="hero-checks"
      aria-label="Ventajas clave"
    >
      <li>
        <CheckCircle2
          size={18}
          aria-hidden="true"
        />{" "}
        Atención urgente 24h
      </li>
      <li>
        <CheckCircle2
          size={18}
          aria-hidden="true"
        />{" "}
        Técnicos especialistas multimarca
      </li>
      <li>
        <CheckCircle2
          size={18}
          aria-hidden="true"
        />{" "}
        Diagnóstico incluido en la reparación
      </li>
    </ul>
  );
}
