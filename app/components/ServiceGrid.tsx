import type { LucideIcon } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceGrid({
  services,
  brands,
}: {
  services: ServiceItem[];
  brands: string[];
}) {
  return (
    <>
      <div className="service-grid">
        {services.map((service) => (
          <article
            key={service.id}
            id={service.id}
            className="service-card"
          >
            <service.icon aria-hidden="true" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
      <div
        className="brand-cloud"
        aria-label="Marcas con las que trabajamos"
      >
        {brands.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </>
  );
}
