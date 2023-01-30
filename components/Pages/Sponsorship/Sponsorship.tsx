import Image from "next/image";
import Link from "next/link";
import H1 from "../../Heading/H1";
import H2 from "../../Heading/H2";
import FAQ from "./FAQ";
import PastSponsors from "./PastSponsors";

export default function Sponsorship() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-36">
      <section className="mt-8">
        <H1>Diventa sponsor di firenze.dev</H1>
        <p className="my-8">
          La community di firenze.dev è nata nel settembre 2021 e sin dall&apos;inizio
          uno dei suoi punti di forza è stata l&apos;organizzazione periodica di <strong>eventi 
          gratuiti</strong>, in presenza e aperti a tutti. 
          L&apos;obiettivo dei nostri meetup è creare uno
          spazio in cui tutti gli appassionati possano incontrarsi e condividere le
          proprie esperienze in un ambiente informale e amichevole, dove poter costruire
          relazioni stimolanti sia a livello umano che professionale.
        </p>
        <p className="my-8">
          Evento dopo evento, la community è cresciuta velocemente e aggrega ormai <strong>centinaia 
          di sviluppatrici e sviluppatori</strong> su tutto il territorio
          fiorentino. Ai nostri incontri partecipano persone curiose, animate dalla passione
          per lo sviluppo software e la tecnologia, che hanno voglia di imparare cose nuove
          e mettersi in gioco.
        </p>
      </section>
      <section className="mt-8">
        <H2>Perché sponsorizzare un evento</H2>
        <p className="my-4">
          Le aziende che sponsorizzano un evento di firenze.dev hanno la possibilità di:
        </p>          
        <ul className="list-inside list-disc">
          <li>Entrare in <strong>contatto diretto con un gruppo di sviluppatori</strong> appassionati e curiosi</li>
          <li>Creare o rafforzare la propria <strong>brand recognition</strong> sul territorio</li>
          <li>Parlare delle proprie <strong>tecnologie di punta</strong> e contribuire alla loro diffusione</li>
          <li>Supportare una realtà che <strong>promuove la cultura</strong> legata allo sviluppo software</li>
        </ul>
      </section>
      <section className="mt-8">
        <H2>In dettaglio</H2>
        <ul className="list-inside list-disc my-4">
          <li>
            Agli eventi in presenza di firenze.dev partecipano solitamente{" "}
            <strong>dalle 30 alle 60 persone</strong>
          </li>
          <li>
            Abbiamo <strong>diverse centinaia di persone</strong> che ruotano
            intorno alla community, ricevono la newsletter e ci seguono 
            sui nostri canali social
          </li>
          <li>
            Organizziamo in media <strong>una decina di eventi all&apos;anno</strong>, 
            tutti gratuiti e in presenza
          </li>
          <li>
            Partecipiamo periodicamente come speaker a{" "}
            <strong>conferenze e workshop</strong> italiani ed
            internazionali
          </li>
          <li>
            Organizziamo <strong>attività di formazione</strong> nelle aziende, 
            sia online che in presenza 
          </li>
        </ul>
      </section>
      <section className="mt-8">
        <H2>Struttura di un evento</H2>
        <p className="my-4">
          Gli eventi di firenze.dev si svolgono in questo modo:
        </p>
        <ul className="list-inside list-disc">
          <li>l&apos;appuntamento è intorno alle <strong>18:30</strong>, fuori dall&apos;orario lavorativo</li>
          <li>diamo inizio all&apos;evento facendo una breve introduzione</li>
          <li><strong>lasciamo la parola all&apos;azienda sponsor, che ha a disposizione una decina di minuti</strong></li>
          <li>segue poi il <strong>talk</strong> vero e proprio, che può durare tra i 30 e i 60 minuti circa</li>
          <li>dopo la sessione di Q&A, l&apos;host di firenze.dev chiude l&apos;incontro tecnico</li>
          <li><strong>all&apos;azienda sponsor viene lasciato un breve spazio finale</strong></li>
          <li>intorno alle 20:00 inizia il momento di <strong>networking</strong> accompagnato da un leggero aperitivo</li>
        </ul>
      </section>
      <section className="mt-8">
        <H2>Agreement</H2>
        <p className="my-4">
          Per poter sponsorizzare uno o più eventi di firenze.dev ci sono alcune
          regole da rispettare:
        </p>
        <ul className="list-inside list-disc">
          <li>
            l&apos;azienda sponsor ha uno spazio per parlare durante l&apos;evento,
            dedicato a farsi conoscere e pubblicizzare le proprie attività, i propri
            prodotti o le posizioni aperte ai fini del recruitment
          </li>
          <li>
            al di là di questo spazio, l&apos;azienda sponsor ha facoltà di proporre 
            un argomento o un talk, ma verranno accettati solamente speech di qualità e
            di interesse per la community
          </li>
          <li>
            qualora l&apos;azienda sponsor proponesse uno speaker, potrà essere preso in considerazione
            solo dopo un&apos;attenta analisi del suo curriculum, delle capacità di public speaking
            e di produrre contenuti di qualità
          </li>
        </ul>
      </section>
      <section className="mt-8">
        <H2>Cosa significa sponsorizzare un evento</H2>
        <ul className="list-inside list-disc my-4">
          <li>
            Abbiamo bisogno di un <strong>luogo</strong> dove tenere l&apos;evento: può essere una sala
            a noleggio o anche la sede dell&apos;azienda sponsor, se adeguata
          </li>
          <li>
            Il networking è forse la parte più importante dei nostri eventi, ci piace offrire
            un <strong>leggero aperitivo</strong> ai nostri ospiti: l&apos;azienda sponsor si prende in carico
            il costo del catering
          </li>
          <li>
            Siamo in contatto con speaker di fama nazionale e internazionale: a richiesta 
            dell&apos;azienda sponsor è possibile organizzare un evento di grande richiamo:
            in questo caso lo sponsor deve occuparsi dei costi di <strong>trasporto e di alloggio
            per lo speaker</strong>
          </li>
        </ul>
      </section>
      <section className="mt-8">
        <H2>Come diventare sponsor</H2>
        <p className="my-4">
          Puoi scriverci una mail a{" "}
          <a href="mailto:staff@firenze.dev">staff@firenze.dev</a> oppure
          scriverci dalla <Link href="/contatti">pagina dei contatti</Link> per
          chiedere maggiori informazioni o fissare una call con lo staff di
          firenze.dev.
        </p>
      </section>
      <FAQ />
      <PastSponsors />
    </main>
  );
}
