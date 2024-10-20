import { H1, H2, H3 } from "@/components/ui/Heading";
import Faq from "./_components/Faq";
import PastSponsors from "./_components/PastSponsors";
import Link from "next/link";
import { Metadata } from "next";
import SponsorshipBenefits from "./_components/SponsorshipBenefits";

const title = "Diventa sponsor di firenze.dev";
const description =
  "Diventa sponsor di firenze.dev: Sostieni la community degli sviluppatori di Firenze e dintorni sponsorizzando i nostri eventi. Crea connessioni, aumenta la tua brand recognition e condividi le tue tecnologie di punta. Scopri come contribuire alla crescita di una community dedicata alla promozione della cultura dello sviluppo software.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    description,
    title,
  },
};

export default function Home() {
  return (
    <main className="">
      <SponsorshipBenefits />
      <section className="container mx-auto p-6 lg:px-36 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Se non lo fai tu, lo sta già facendo il tuo competitor.
        </h2>
        <p className="text-lg mb-4">
          Non lasciare che altri prendano l&apos;iniziativa.
        </p>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="container grid lg:grid-cols-2 gap-12 content-start mx-auto p-6 py-24 lg:px-36">
          <div>
            <h2 className="text-xl leading-8">
              Il nostro obiettivo è creare un ambiente inclusivo e informale,
              dove gli appassionati di tecnologia e sviluppo software possono
              incontrarsi, condividere esperienze e costruire relazioni
              professionali e personali.
            </h2>
          </div>

          <p className="mt-8 md:mt-0 leading-loose">
            Evento dopo evento, la community è cresciuta rapidamente, aggregando{" "}
            <strong>centinaia di sviluppatori e sviluppatrici</strong> sul
            territorio fiorentino. Partecipano persone appassionate e curiose,
            desiderose di imparare e di mettersi alla prova.
          </p>
        </div>
      </section>
      <section className="container mx-auto p-2 py-6 lg:px-36 mt-8">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-wider">
          Perché sponsorizzare un evento
        </h2>
        <p className="my-4 text-xl">
          Sponsorizzando firenze.dev, la tua azienda avrà l&apos;opportunità di:
        </p>
        <ul className="list-outside ml-4 list-disc">
          <li className="mb-4">
            <strong>Accedere direttamente a una rete di sviluppatori</strong>{" "}
            curiosi e attivi.
          </li>
          <li className="mb-4">
            Incrementare la propria <strong>brand recognition</strong> nel
            settore tecnologico locale.
          </li>
          <li className="mb-4">
            Presentare e promuovere le proprie{" "}
            <strong>tecnologie e soluzioni innovative</strong>.
          </li>
          <li className="mb-4">
            Supportare lo sviluppo di una <strong>community tecnologica</strong>{" "}
            in continua crescita.
          </li>
        </ul>
      </section>

      {/* Event Structure Section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto p-2 py-12 lg:px-36 mt-8">
          <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-wider">
            Struttura di un evento
          </h2>
          <p className="my-4 text-xl">
            Gli eventi di firenze.dev seguono una struttura collaudata:
          </p>
          <ul className="list-outside ml-4 list-disc">
            <li className="mb-4">
              <strong>Accoglienza intorno alle 18:30</strong>, dopo l’orario
              lavorativo.
            </li>
            <li className="mb-4">
              Breve introduzione da parte del team firenze.dev.
            </li>
            <li className="mb-4">
              <strong>Lo sponsor avrà un&apos;opportunità di parlare</strong> e
              presentare i propri progetti o posizioni aperte.
            </li>
            <li className="mb-4">
              Segue il <strong>talk tecnico</strong>, della durata tra i 30 e i
              60 minuti.
            </li>
            <li className="mb-4">
              Sessione di domande e risposte (Q&A) per concludere l’incontro
              tecnico.
            </li>
            <li className="mb-4">
              Momento di <strong>networking</strong> con aperitivo dalle 20:00.
            </li>
          </ul>
        </div>
      </section>
      {/* Agreement Section */}
      <section className="container mx-auto p-2 pt-6 lg:px-36 mt-8">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-wider">
          Agreement
        </h2>
        <p className="my-4 text-xl">
          Per sponsorizzare uno o più eventi di firenze.dev è necessario
          rispettare alcune linee guida:
        </p>
        <ul className="list-outside ml-4 list-disc">
          <li className="mb-4">
            Lo sponsor ha uno spazio dedicato per parlare e promuovere la
            propria azienda o posizioni aperte.
          </li>
          <li className="mb-4">
            È possibile proporre argomenti o speaker, previa valutazione della
            qualità e rilevanza del contenuto.
          </li>
        </ul>
      </section>
      <section className="container mx-auto p-2 pt-6 lg:px-36 mt-8">
        <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-wider undefined">
          Sponsorizzare un Evento: Opportunità e Responsabilità
        </h2>
        <ul className="list-outside ml-4 list-disc my-4">
          <li className="mb-4">
            È fondamentale disporre di un <strong>luogo adeguato</strong> per
            l&apos;evento, che può essere una sala in affitto o, se compatibile, la
            sede dell&apos;azienda sponsor. Questa scelta riflette la professionalità
            e l&apos;impegno nella creazione di un ambiente propizio per il
            networking e l&apos;interazione.
          </li>
          <li className="mb-4">
            Il networking rappresenta un elemento chiave dei nostri eventi. Per
            facilitare le interazioni tra i partecipanti, offriamo un{" "}
            <strong>aperitivo di benvenuto</strong>. L&apos;azienda sponsor avrà la
            responsabilità di coprire i costi del catering, contribuendo così a
            creare un&apos;atmosfera accogliente e stimolante.
          </li>
          <li className="mb-4">
            Siamo in contatto con relatori di prestigio a livello nazionale e
            internazionale. Su richiesta dell&apos;azienda sponsor, è possibile
            organizzare un evento di grande richiamo. In questo caso, lo sponsor
            sarà responsabile dei costi di{" "}
            <strong>trasporto e alloggio per il relatore</strong>, garantendo
            così un livello di qualità e un&apos;attrattiva che porteranno valore
            all&apos;evento e all&apos;immagine dell&apos;azienda.
          </li>
        </ul>
      </section>

      {/* Sponsorship Process Section */}
      <div
        id="sponsor-us"
        className="p-16 lg:px-24 mt-16 mb-8 bg-gradient-to-r from-blue-700 to-indigo-900 md:rounded-md scroll-py-24"
      >
        <div className="container mx-auto">

        <h3 className="text-white font-serif font-semibold text-3xl mb-6 tracking-wide">
          {" "}
          Come diventare sponsor{" "}
        </h3>
        <p className="text-white">
          Scrivici a{" "}
          <a className="text-white" href="mailto:staff@firenze.dev">
            <b>staff@firenze.dev</b>
          </a>{" "}
          o visita la{" "}
          <a className="text-white" href="/contatti">
            <b>pagina dei contatti</b>
          </a>{" "}
          per maggiori informazioni o per fissare una call con il nostro team.
        </p>
        </div>
      </div>
      <section className="lg:px-36 ">
        <Faq />
      </section>
      <section className="container mx-auto p-2 lg:px-36 ">
        <PastSponsors />
      </section>
    </main>
  );
}
