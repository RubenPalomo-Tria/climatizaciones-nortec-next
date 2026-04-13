import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import ToastClientProvider from "./components/ToastClientProvider";

export const metadata: Metadata = {
  title: "Climatizaciones Nortec | Servicio Técnico en Madrid",
  description:
    "Especialistas en aire acondicionado, aerotermia, instalación y mantenimiento con atención en menos de 24 horas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <ToastClientProvider />
        <CookieBanner />
      </body>
    </html>
  );
}
