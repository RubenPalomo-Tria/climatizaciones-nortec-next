export default function FAQList({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
