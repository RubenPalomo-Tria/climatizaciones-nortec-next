import { CheckCircle2 } from "lucide-react";

export default function WhyNortec({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2
            size={18}
            aria-hidden="true"
          />{" "}
          {item}
        </li>
      ))}
    </ul>
  );
}
