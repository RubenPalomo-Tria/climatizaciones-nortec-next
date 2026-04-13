export default function ProcessGrid({
  process,
}: {
  process: { title: string; description: string }[];
}) {
  return (
    <div className="process-grid">
      {process.map((step, index) => (
        <article
          key={step.title}
          className="process-card"
        >
          <span>{index + 1}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  );
}
