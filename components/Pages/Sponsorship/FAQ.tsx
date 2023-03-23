import Bubble from "../../Bubble/Bubble";
import H2 from "../../Heading/H2";
const FAQS = [
  {
    question: "Dove si svolgono gli eventi?",
    answer:
      "Gli eventi si possono svolgere nella sede dell'azienda se è facilmente raggiungibile e ha spazi adeguati. Altrimenti è possibile noleggiare una sala della capienza adeguata, possiamo fornirti a richiesta maggiori dettagli sui costi",
  },
  {
    question: "Posso sponsorizzare solo una parte dell'evento?",
    answer:
      "Puoi decidere di occuparti solo di una parte, ad esempio la sala, l'aperitivo, lo speaker. In questo caso verrai citato come sponsor della serata, ma non avrai diritto a uno spazio dedicato",
  },
  {
    question: "Posso eseguire una donazione e pensate voi al resto?",
    answer:
      "Si, puoi fare una donazione e penseremo noi all'organizzazione dell'evento. Per essere considerato sponsor, la donazione dovrà coprire i costi dell'evento",
  },
  {
    question:
      "Posso ospitare firenze.dev nella mia azienda per un corso di formazione?",
    answer:
      "Si, ci piace fare formazione, l'abbiamo già fatto in passato e siamo molto felici di farlo",
  },
  {
    question: "Avete dei tier di sponsorship?",
    answer: "No",
  },
  {
    question:
      "Come posso fare se ho delle altre domande a cui non ho trovato risposta in questa pagina?",
    answer:
      "Scrivi una mail a staff@firenze.dev, saremo felici di fissare una call di approfondimento",
  },
];

export default function FAQ() {
  return (
    <section>
      <div className="text-center my-6">
        <H2>F.A.Q.</H2>
      </div>
      <ul>
        {FAQS.map((faq) => (
          <li key={`faq-${faq.question}`}>
            <div className="max-w-3xl mx-auto my-3 p-3">
              <div className="flex items-center">
                <div className="shrink-0 m-1 mr-2 w-12 h-12 flex justify-center items-center rounded-full bg-blue-700 text-lg text-white uppercase">
                  Q
                </div>
                <Bubble direction="left">
                  <strong>{faq.question}</strong>
                </Bubble>
              </div>
              <div className="flex items-center justify-end">
                <Bubble direction="right">{faq.answer}</Bubble>
                <div className="shrink-0 m-1 mr-2 w-12 h-12 flex justify-center items-center rounded-full bg-indigo-900 text-lg text-white uppercase">
                  a
                </div>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </section>
  );
}
