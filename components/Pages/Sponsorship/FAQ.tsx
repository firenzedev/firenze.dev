import H3 from "../../Heading/H3";

const FAQS = [
  {
    question: "Dove si svolgono gli eventi?",
    answer:
      "Gli eventi si possono svolgere nella sede dell'azienda se è facilmente raggiungibile e ha spazi adeguati. Altrimenti si tengono in luoghi appositi, ad esempio le murate, lo students hotel, ecc...",
  },
  {
    question: "Posso sponsorizzare solo una parte dell'evento?",
    answer:
      "Puoi decidere di occuparti solo di una parte, ad esempio la sala, l'aperitivo, lo speaker. In questo caso ti consideriamo un collaboratore e non uno sponsor.",
  },
  {
    question: "Posso eseguire una donazione e pensate voi al resto?",
    answer:
      "Si, puoi fare una donazione e penseremo noi all'organizzazione dell'evento. Per essere considerato sponsor, la donazione dovà coprire i costi dell'evento",
  },
  {
    question:
      "Posso ospitare firenze.dev nella mia azienda per un corso di formazione?",
    answer: "Si, l'abbiamo già fatto e siamo molto felici di farlo.",
  },
  {
    question: "Avete dei tier di sponsorship?",
    answer: "No. ",
  },
  {
    question: "Come posso eseguire una donazione?",
    answer:
      "Puoi eseguire la donazione tramite bonifico bancario intestato all'associazione no profit firenze.dev",
  },
];

export default function FAQ() {
  return (
    <section>
      <H3>F.A.Q.</H3>
      <ul>
        {FAQS.map((faq, index) => (
          <li key={`faq-${faq.question}`} className="mb-4">
            <strong>{faq.question}</strong> <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
