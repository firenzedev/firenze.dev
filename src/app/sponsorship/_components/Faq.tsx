import Bubble from "@/components/ui/Bubble";
import { H2 } from "@/components/ui/Heading";

const FAQS = [
  {
    question: "Dove si svolgono gli eventi?",
    answer:
      "Gli eventi possono svolgersi presso la sede della tua azienda, a condizione che sia facilmente raggiungibile e disponga di spazi adeguati. In alternativa, possiamo organizzare il noleggio di una sala con la capienza necessaria. Siamo disponibili a fornirti maggiori dettagli sui costi e sulle opzioni disponibili su richiesta.",
  },
  {
    question: "È possibile sponsorizzare solo una parte dell'evento?",
    answer:
      "Sì, hai la flessibilità di sponsorizzare specifici aspetti dell'evento, come la location, l'aperitivo o il relatore. In tal caso, verrai riconosciuto come sponsor della serata, ma non avrai diritto a uno spazio dedicato. Questa opzione consente di massimizzare l'impatto della tua sponsorizzazione secondo le tue esigenze.",
  },
  {
    question: "Posso effettuare una donazione e lasciare a voi l'organizzazione?",
    answer:
      "Assolutamente, è possibile effettuare una donazione e ci occuperemo noi dell'intera organizzazione dell'evento. Tuttavia, per essere riconosciuto come sponsor ufficiale, la donazione dovrà coprire i costi dell'evento. Questa è un'opzione ideale per chi desidera contribuire senza gestire direttamente i dettagli operativi.",
  },
  {
    question: "Come posso effettuare una donazione?",
    answer:
      "Puoi fare una donazione tramite bonifico bancario, intestata alla Associazione culturale firenze.dev, associazione no profit. Oppure tramite opencollective.com",
  },
  {
    question: "Posso ospitare firenze.dev nella mia azienda per un corso di formazione?",
    answer:
      "Sì, siamo entusiasti di offrire corsi di formazione e abbiamo già collaborato con altre aziende in passato con risultati positivi. Sarà un'opportunità per i tuoi dipendenti di accedere a contenuti di alta qualità e per la tua azienda di posizionarsi come promotore della crescita professionale.",
  },
  {
    question: "Avete dei tier di sponsorship?",
    answer: "Attualmente non disponiamo di tier di sponsorship. Ogni sponsor ha la possibilità di contribuire in modo unico e personalizzato, garantendo un'esperienza di sponsorizzazione flessibile e su misura.",
  },
  {
    question: "Come posso fare se ho ulteriori domande che non sono state trattate in questa pagina?",
    answer:
      "Ti invitiamo a contattarci via email all'indirizzo staff@firenze.dev. Saremmo lieti di organizzare una call di approfondimento per rispondere a tutte le tue domande e fornirti ulteriori informazioni sui nostri eventi e opportunità di sponsorizzazione.",
  },
];


export default function Faq() {
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
