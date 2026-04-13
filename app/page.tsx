import {
  ArrowRight,
  Building2,
  Flame,
  House,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import FAQList from "./components/FAQList";
import HeroChecks from "./components/HeroChecks";
import InstallationGrid from "./components/InstallationGrid";
import LeadForm from "./components/LeadForm";
import MobileQuickActions from "./components/MobileQuickActions";
import ProcessGrid from "./components/ProcessGrid";
import ReasonGrid from "./components/ReasonGrid";
import ServiceGrid from "./components/ServiceGrid";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import WhyNortec from "./components/WhyNortec";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  id: string;
};

type Installation = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    id: "aire-acondicionado",
    title: "Aire acondicionado",
    description:
      "Reparamos todas las marcas, placas electrónicas y componentes clave con diagnóstico técnico y asesoramiento directo.",
    icon: Snowflake,
  },
  {
    id: "aerotermia",
    title: "Aerotermia",
    description:
      "Sistema integral de calefacción, aire acondicionado y ACS con mantenimiento preventivo y correctivo especializado.",
    icon: Thermometer,
  },
  {
    id: "mantenimiento",
    title: "Contratos de mantenimiento",
    description:
      "Planes personalizados para prevenir averías costosas, mejorar eficiencia y prolongar la vida útil del sistema.",
    icon: ShieldCheck,
  },
];

const process = [
  {
    title: "Servicio técnico autorizado",
    description:
      "Trabajamos con recambios oficiales y soluciones duraderas para que tu instalación cumpla normativa y funcione mejor.",
  },
  {
    title: "Trabajos garantizados",
    description:
      "Máxima garantía en reparaciones e instalaciones con foco en eficiencia energética y seguridad en edificios.",
  },
  {
    title: "Diagnóstico profesional",
    description:
      "Atención directa con técnicos especializados. Diagnóstico incluido en reparación y sin coste de desplazamiento en Madrid.",
  },
  {
    title: "Experiencia real",
    description:
      "Más de 15 años resolviendo averías, renovaciones e instalaciones térmicas para vivienda, comercio e industria.",
  },
];

const installations: Installation[] = [
  {
    title: "Split y MultiSplit",
    description:
      "La opción más habitual y económica para climatizar estancias individuales en viviendas.",
    icon: House,
  },
  {
    title: "Aire por conductos",
    description:
      "Sistema centralizado que distribuye aire a toda la vivienda mediante falso techo y rejillas.",
    icon: Building2,
  },
  {
    title: "Casettes y aire techo",
    description:
      "Unidades en falso techo con una integración visual limpia y muy funcional para zonas amplias.",
    icon: Zap,
  },
  {
    title: "Sistemas VRV",
    description:
      "Climatización central multi-split con múltiples unidades interiores y control eficiente de consumo.",
    icon: Wrench,
  },
  {
    title: "Aerotermias",
    description:
      "Captan energía del aire exterior y la transforman en calor para calefacción y agua caliente sanitaria.",
    icon: Flame,
  },
];

const maintenanceReasons = [
  {
    title: "Funcionamiento óptimo",
    description:
      "El mantenimiento regular permite que el equipo trabaje con menos esfuerzo y menor consumo energético.",
  },
  {
    title: "Normativa RITE",
    description:
      "Cumplimos los requisitos mínimos de mantenimiento exigidos por normativa y emitimos certificado.",
  },
  {
    title: "Calidad del aire",
    description:
      "La limpieza técnica evita acumulación de polvo, moho y bacterias, mejorando el aire interior.",
  },
  {
    title: "Mayor vida útil",
    description:
      "Prevenir fallos y averías frecuentes reduce el gasto a largo plazo y extiende la durabilidad del sistema.",
  },
];

const whyNortec = [
  "Atendemos avisos en menos de 24 horas.",
  "Resolvemos el 90% de averías antes de 48 horas.",
  "Stock de recambios, gases refrigerantes y primeras marcas.",
  "Contratos personalizados y registro técnico de mantenimientos.",
  "Asesoramiento técnico continuado para particulares y profesionales.",
];

const faqs = [
  {
    question: "¿Por qué mi aire acondicionado ha dejado de enfriar?",
    answer:
      "Suele deberse a falta de mantenimiento o pérdida de refrigerante. Si ya has reiniciado el equipo y limpiado filtros, lo ideal es revisar presión, fugas y estado del circuito con un técnico.",
  },
  {
    question: "¿Por qué huele mal la unidad interior?",
    answer:
      "Normalmente está relacionado con suciedad acumulada, drenaje en mal estado o higienización insuficiente del evaporador. Se corrige con limpieza técnica y revisión de desagüe.",
  },
  {
    question: "¿Qué hago si el equipo no enciende?",
    answer:
      "Puedes probar un reinicio eléctrico (desenchufe o automático unos segundos). Si persiste, puede haber fallo de placa base o comunicación interna y requiere diagnóstico profesional.",
  },
  {
    question: "¿Por qué gotea la unidad interior?",
    answer:
      "El motivo más común es obstrucción del desagüe o mantenimiento insuficiente de filtros y evaporador. Conviene actuar rápido para evitar daños por humedad.",
  },
  {
    question: "¿Por qué se para la unidad interior?",
    answer:
      "Puede estar relacionado con un funcionamiento incorrecto de la unidad exterior, ventilador o protección por fallo interno. Es recomendable revisar ambas unidades en conjunto.",
  },
  {
    question: "¿Cómo solicito asistencia?",
    answer:
      "Puedes contactarnos por teléfono o WhatsApp y te atenderá un técnico especializado. Si lo necesitas, nos desplazamos en un plazo máximo de 24 horas en Madrid.",
  },
];

const brands = [
  "Daikin",
  "Hitachi",
  "Bosch",
  "Toshiba",
  "LG",
  "Mitsubishi",
  "Fujitsu",
  "Panasonic",
];

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main>
        <section
          className="hero section"
          id="inicio"
        >
          <div className="hero-grid container">
            <div className="hero-copy">
              <p className="eyebrow">Servicio técnico garantizado en Madrid</p>
              <h1>
                Soluciones de climatización con atención en menos de 24 horas
              </h1>
              <p>
                Particular y profesional. Instalación, sustitución, reparación y
                mantenimiento para aire acondicionado, aerotermia y sistemas
                térmicos. Diagnóstico técnico y recambios oficiales.
              </p>

              <div className="hero-actions">
                <a
                  className="primary-action"
                  href="tel:+34919993839"
                >
                  Llamar ahora{" "}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                  />
                </a>
                <a
                  className="ghost-action"
                  href="https://wa.me/34679285294"
                  target="_blank"
                  rel="noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </div>

              <HeroChecks />
            </div>

            <LeadForm />
          </div>
        </section>

        <section
          className="section"
          id="servicios"
        >
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">
                Tipos de soluciones para todas las marcas
              </p>
              <h2>Servicios de climatización para negocio y vivienda</h2>
              <p>
                En Nortec ofrecemos la mejor selección de soluciones adaptadas a
                cada entorno. Si el equipo tiene arreglo, te ayudamos a
                repararlo. Si conviene sustituir, te proponemos la opción más
                eficiente para ahorrar y ganar confort.
              </p>
            </div>

            <ServiceGrid
              services={services}
              brands={brands}
            />
          </div>
        </section>

        <section
          className="section alt-section"
          id="proceso"
        >
          <div className="container">
            <div className="stats-grid">
              <article>
                <strong>&lt;24h</strong>
                <p>Respuesta media en avisos</p>
              </article>
              <article>
                <strong>90%</strong>
                <p>Averías resueltas antes de 48h</p>
              </article>
              <article>
                <strong>15+</strong>
                <p>Años de experiencia en Madrid</p>
              </article>
              <article>
                <strong>100%</strong>
                <p>Trabajos garantizados</p>
              </article>
            </div>

            <div className="section-head compact">
              <p className="eyebrow">¿Cómo lo hacemos?</p>
              <h2>
                Metodología técnica, transparente y orientada a largo plazo
              </h2>
            </div>

            <ProcessGrid process={process} />
          </div>
        </section>

        <section
          className="section"
          id="instalaciones"
        >
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Instalación y sustitución de equipos</p>
              <h2>Diseñamos la instalación más eficiente para cada espacio</h2>
              <p>
                Te ayudamos a elegir la mejor opción para conseguir una
                climatización idónea con el máximo ahorro energético.
              </p>
            </div>

            <InstallationGrid installations={installations} />
          </div>
        </section>

        <section
          className="section alt-section"
          id="mantenimiento"
        >
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">
                Contrate ya su servicio de mantenimiento
              </p>
              <h2>Programa preventivo, certificado y adaptado a normativa</h2>
              <p>
                Las instalaciones térmicas deben mantenerse según su programa
                preventivo. Un mantenimiento correcto mejora rendimiento, reduce
                consumo y evita averías costosas.
              </p>
            </div>

            <ReasonGrid reasons={maintenanceReasons} />

            <div className="split-cta">
              <article>
                <h3>¿Por qué Nortec?</h3>
                <WhyNortec items={whyNortec} />
              </article>
              <article>
                <h3>Desplazamiento gratuito en Comunidad de Madrid</h3>
                <p>
                  Nuestro equipo técnico te atiende de forma especializada, sin
                  operadores y con presupuesto sin compromiso. Solo abonaras
                  diagnóstico si finalmente no realizas la reparación.
                </p>
                <div className="mini-pills">
                  <span>Recambios originales</span>
                  <span>Trabajos 100% garantizados</span>
                  <span>Refrigerante de todo tipo</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section"
          id="faq"
        >
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Averías frecuentes</p>
              <h2>¿Tiene una avería en su aire acondicionado?</h2>
              <p>
                Si notas mal funcionamiento, goteo, olores, falta de frío o
                fallos de encendido, te ayudamos a evaluar el problema y aplicar
                la solución más rentable.
              </p>
            </div>

            <FAQList faqs={faqs} />
          </div>
        </section>

        <section
          className="section cta-section"
          id="contacto"
        >
          <div className="cta-wrap container">
            <div>
              <p className="eyebrow">Climatizaciones Nortec</p>
              <h2>
                Especialistas en aire acondicionado y sistemas de climatización
              </h2>
              <p>
                Servicio Técnico de Reparaciones. Atendemos todos los avisos en
                24 horas. Llámanos o escríbenos y te orientamos desde el primer
                minuto.
              </p>
            </div>

            <div className="contact-box">
              <a href="tel:+34919993839">
                <PhoneCall
                  size={18}
                  aria-hidden="true"
                />{" "}
                91 999 38 39
              </a>
              <a href="tel:+34679285294">
                <PhoneCall
                  size={18}
                  aria-hidden="true"
                />{" "}
                679 28 52 94
              </a>
              <a href="mailto:info@climatizacionesnortec.com">
                info@climatizacionesnortec.com
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
                WhatsApp directo
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileQuickActions />
    </div>
  );
}
