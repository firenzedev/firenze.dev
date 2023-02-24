import Link from "next/link";
import H2 from "../../Heading/H2";
import FAQ from "./FAQ";
import PastSponsors from "./PastSponsors";
import logo from "../../../assets/images/firenzedev_darkbkg_shadow.svg";
import Hero from "../../Hero/Hero";
import Image from "next/image";
import H3 from "../../Heading/H3";
import H4 from "../../Heading/H4";
export default function Sponsorship() {
  return (
    <main className="">
      <Hero
        title="Diventa sponsor di firenze.dev"
        subtitle={
          <p className="my-8 ">
            La community di firenze.dev è nata nel settembre 2021 e sin
            dall&apos;inizio uno dei suoi punti di forza è stata
            l&apos;organizzazione periodica di <strong>eventi gratuiti</strong>,
            in presenza e aperti a tutti.
          </p>
        }
        image={
          <Image
            src={logo}
            alt="firenze.dev logo"
            width={256}
            height={256}
            priority
          />
        }
      />
      <section className="bg-gray-100">
        <div className="container grid lg:grid-cols-2 gap-12 content-start mx-auto p-6 py-24 lg:px-36">
          <div>
            <h2 className="text-xl leading-8">
              L&apos;obiettivo dei nostri meetup è
              creare uno spazio in cui tutti gli appassionati possano incontrarsi e
              condividere le proprie esperienze in un ambiente informale e
              amichevole, dove poter costruire relazioni stimolanti sia a livello
              umano che professionale.
            </h2>
          </div>

          <p className="mt-8 md:mt-0 leading-loose">
            Evento dopo evento, la community è cresciuta velocemente e aggrega
            ormai <strong>centinaia di sviluppatrici e sviluppatori</strong> su
            tutto il territorio fiorentino. Ai nostri incontri partecipano persone
            curiose, animate dalla passione per lo sviluppo software e la
            tecnologia, che hanno voglia di imparare cose nuove e mettersi in
            gioco.
          </p>
        </div>
      </section>
      <section className="container mx-auto p-2 py-6 lg:px-36 mt-8">
        <H2>Perché sponsorizzare un evento</H2>
        <p className="my-4 text-xl">
          Le aziende che sponsorizzano un evento di firenze.dev hanno la
          possibilità di:
        </p>
        <br />
        <ul className="list-outside ml-4 list-disc">
          <li className="mb-4">
            Entrare in{" "}
            <strong>contatto diretto con un gruppo di sviluppatori</strong>{" "}
            appassionati e curiosi
          </li>
          <li className="mb-4">
            Creare o rafforzare la propria <strong>brand recognition</strong>{" "}
            sul territorio
          </li>
          <li className="mb-4">
            Parlare delle proprie <strong>tecnologie di punta</strong> e
            contribuire alla loro diffusione
          </li>
          <li className="mb-4">
            Supportare una realtà che <strong>promuove la cultura</strong>{" "}
            legata allo sviluppo software
          </li>
        </ul>
        <H3>In dettaglio</H3>
        <ul className="list-outside ml-4 list-disc mt-4">
          <li className="mb-4">
            Agli eventi in presenza di firenze.dev partecipano solitamente{" "}
            <strong>dalle 30 alle 60 persone</strong>
          </li>
          <li className="mb-4">
            Abbiamo <strong>diverse centinaia di persone</strong> che ruotano
            intorno alla community, ricevono la newsletter e ci seguono sui
            nostri canali social
          </li>
          <li className="mb-4">
            Organizziamo in media{" "}
            <strong>una decina di eventi all&apos;anno</strong>, tutti gratuiti
            e in presenza
          </li>
          <li className="mb-4">
            Partecipiamo periodicamente come speaker a{" "}
            <strong>conferenze e workshop</strong> italiani ed internazionali
          </li>
          <li className="mb-4">
            Organizziamo <strong>attività di formazione</strong> nelle aziende,
            sia online che in presenza
          </li>
        </ul>
      </section>

      <section className="bg-gray-50">
        <div className="container mx-auto p-2 py-12 lg:px-36 mt-8">
          <H2>Struttura di un evento</H2>
          <p className="my-4 text-xl">
            Gli eventi di firenze.dev si svolgono in questo modo:
          </p>
          <ul className="list-outside ml-4 list-disc">
            <li className="mb-4">
              l&apos;appuntamento è intorno alle <strong>18:30</strong>, fuori
              dall&apos;orario lavorativo
            </li>
            <li className="mb-4">diamo inizio all&apos;evento facendo una breve introduzione</li>
            <li className="mb-4">
              <strong>
                lasciamo la parola all&apos;azienda sponsor, che ha a disposizione
                una decina di minuti
              </strong>
            </li>
            <li className="mb-4">
              segue poi il <strong>talk</strong> vero e proprio, che può durare
              tra i 30 e i 60 minuti circa
            </li>
            <li className="mb-4">
              dopo la sessione di Q&A, l&apos;host di firenze.dev chiude
              l&apos;incontro tecnico
            </li>
            <li className="mb-4">
              <strong>
                all&apos;azienda sponsor viene lasciato un breve spazio finale
              </strong>
            </li>
            <li className="mb-4">
              intorno alle 20:00 inizia il momento di <strong>networking</strong>{" "}
              accompagnato da un leggero aperitivo
            </li>
          </ul>
        </div>
      </section>
      <section className="container mx-auto p-2 pt-6 lg:px-36 mt-8">
        <H2>Agreement</H2>
        <p className="my-4 text-xl">
          Per poter sponsorizzare uno o più eventi di firenze.dev ci sono alcune
          regole da rispettare:
        </p>
        <ul className="list-outside ml-4 list-disc">
          <li className="mb-4">
            l&apos;azienda sponsor ha uno spazio per parlare durante
            l&apos;evento, dedicato a farsi conoscere e pubblicizzare le proprie
            attività, i propri prodotti o le posizioni aperte ai fini del
            recruitment
          </li>
          <li className="mb-4">
            al di là di questo spazio, l&apos;azienda sponsor ha facoltà di
            proporre un argomento o un talk, ma verranno accettati solamente
            speech di qualità e di interesse per la community
          </li>
          <li className="mb-4">
            qualora l&apos;azienda sponsor proponesse uno speaker, potrà essere
            preso in considerazione solo dopo un&apos;attenta analisi del suo
            curriculum, delle capacità di public speaking e di produrre
            contenuti di qualità
          </li>
        </ul>
      </section>
      <section className="container mx-auto p-2 pt-6 lg:px-36 mt-8">
        <H2>Cosa significa sponsorizzare un evento</H2>
        <ul className="list-outside ml-4 list-disc my-4">
          <li className="mb-4">
            Abbiamo bisogno di un <strong>luogo</strong> dove tenere
            l&apos;evento: può essere una sala a noleggio o anche la sede
            dell&apos;azienda sponsor, se adeguata
          </li>
          <li className="mb-4">
            Il networking è forse la parte più importante dei nostri eventi, ci
            piace offrire un <strong>leggero aperitivo</strong> ai nostri
            ospiti: l&apos;azienda sponsor si prende in carico il costo del
            catering
          </li>
          <li className="mb-4">
            Siamo in contatto con speaker di fama nazionale e internazionale: a
            richiesta dell&apos;azienda sponsor è possibile organizzare un
            evento di grande richiamo: in questo caso lo sponsor deve occuparsi
            dei costi di <strong>trasporto e di alloggio per lo speaker</strong>
          </li>
        </ul>
        <div className="p-16 lg:px-24 mt-16 mb-8 bg-gradient-to-r from-blue-700 to-indigo-900 md:rounded-md">
          <h3 className="text-white font-serif font-semibold text-3xl mb-6 tracking-wide"> Come diventare sponsor </h3>
          <p className="text-white">
            Puoi scriverci una mail a{" "}
            <a className="text-white" href="mailto:staff@firenze.dev"><b>staff@firenze.dev</b></a> oppure
            scriverci dalla <Link className="text-white" href="/contatti"><b>pagina dei contatti</b></Link> per
            chiedere maggiori informazioni o fissare una call con lo staff di
            firenze.dev.
          </p>
        </div>
      </section>
      <section className=" lg:px-36 ">
        <FAQ />
      </section>

      <section className="container mx-auto p-2 lg:px-36 ">
        <PastSponsors />
      </section>
    </main>
  );
}
