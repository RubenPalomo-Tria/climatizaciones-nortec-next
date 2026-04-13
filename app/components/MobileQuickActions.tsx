import { PhoneCall, MessageCircle } from "lucide-react";

export default function MobileQuickActions() {
  return (
    <nav
      className="mobile-quick-actions"
      aria-label="Acciones rápidas"
    >
      <a href="tel:+34919993839">
        <PhoneCall
          size={18}
          aria-hidden="true"
        />{" "}
        Llamar
      </a>
      <a
        href="https://wa.me/34679285294"
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle
          size={18}
          aria-hidden="true"
        />{" "}
        WhatsApp
      </a>
    </nav>
  );
}
