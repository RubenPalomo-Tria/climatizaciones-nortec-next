export default function ReasonGrid({
  reasons,
}: {
  reasons: { title: string; description: string }[];
}) {
  return (
    <div className="reason-grid">
      {reasons.map((reason) => (
        <article key={reason.title}>
          <h3>{reason.title}</h3>
          <p>{reason.description}</p>
        </article>
      ))}
    </div>
  );
}
