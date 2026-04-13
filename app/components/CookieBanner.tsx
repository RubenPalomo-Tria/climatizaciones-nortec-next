"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Aceptar"
      containerClasses="cookie-banner"
      buttonClasses="cookie-banner-button"
      expires={150}
    >
      Utilizamos cookies para mejorar tu experiencia. Al continuar navegando,
      aceptas nuestra política de cookies.
    </CookieConsent>
  );
}
