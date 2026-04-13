import type { LucideIcon } from "lucide-react";

type InstallationItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function InstallationGrid({
  installations,
}: {
  installations: InstallationItem[];
}) {
  return (
    <div className="installation-grid">
      {installations.map((item) => (
        <article
          key={item.title}
          className="installation-card"
        >
          <item.icon aria-hidden="true" />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
