import Image from "next/image";
import Link from "next/link";
import H1 from "../../Heading/H1";
import H2 from "../../Heading/H2";
import H3 from "../../Heading/H3";
import FAQ from "./FAQ";
import numberAtEventImage from "./numero-di-iscritti-agli-eventi-di-firenze.dev.png";
import PastSponsors from "./PastSponsors";

const numbers = { events: 6, other: 5 };

const followers = {
  linkedin: 189,
  newsletter: 294,
  discord: 112,
  twitter: 45,
};

export default function Sponsorship() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-36">
      <section>
        <H1>Diventa sponsor di firenze.dev</H1>
        <p className="my-8">
          La community di firenze.dev è nata nel settembre 2021. Abbiamo fatto
          il primo piccolo evento a dicembre, proprio a fine dell&apos;emergenza
          covid. E Nel corso del 2022 la commnity è cresciuta molto,
          organizzando un totale di {numbers.events} eventi al quale si sono
          iscritti più di 200 sviluppatori e sviluppatrici.
        </p>
        <p className="my-8">
          Agli eventi di firenze.dev partecipano sviluppatori da tutto il
          territorio fiorentino. L&apos;obiettivo dei nostri eventi è creare uno
          spazio in cui gli sviluppatori possano incontrarsi, condividere le
          loro esperienze e conoscenze, stare a proprio agio e costruire delle
          relazioni professionali sane e costruttive.
        </p>
      </section>
      <section>
        <H2>Perchè sponsorizzare un evento</H2>
        <p className="my-4 mb-16">
          La nostra offerta di sponsorizzazione è dedicata alle aziende a cui
          interessa:
          <ul className="list-inside list-disc">
            <li>Entrare in contatto diretto con sviluppatori</li>
            <li>Creare brand recognition sul territorio</li>
            <li>Parlare di tecnologie a loro care</li>
          </ul>
        </p>
      </section>
      <section>
        <H2>Alcuni numeri</H2>
        <p className="my-4 mb-16">
          <ul className="list-inside list-disc">
            <li>
              Agli eventi di firenze.dev partecipano solitamente{" "}
              <strong>dalle 20 alle 60 persone</strong>.
            </li>
            <li>
              Abbiamo circa <strong>{countPeople()} persone</strong> che ruotano
              intorno alla community e partecipano agli eventi. Divisi tra la
              newsletter, linkedin, discord e i social network.
            </li>
            <li>
              Abbiamo organizzato <strong>{numbers.events} eventi</strong> dal
              vivo in presenza
            </li>
            <li>
              Partecipato come speaker a{" "}
              <strong>{numbers.other} conferenze</strong> e workshop italiani ed
              internazionali
            </li>
            <li>
              Abbiamo <strong>realizzato corsi</strong> online per sviluppatori
              e in presenza nelle aziende.
            </li>
          </ul>
        </p>
      </section>
      <Image
        src={numberAtEventImage}
        alt="numero di iscritti agli eventi di firenze.dev"
        className="mb-16"
      />
      <section>
        <H2>Struttura di un evento</H2>
        <p className="my-4 mb-16">
          Gli eventi di firenze.dev si svolgono in questo modo:
          <ul className="list-inside list-disc">
            <li>L&apos;evento inizia alle 18:30.</li>
            <li>Alle 18:45 facciamo un intro alla serata.</li>
            <li>
              Poi, l&apos;azienda che sponsoriza ha a disposizione 10 minuti per
              parlare.
            </li>
            <li>A seguire ascoltiamo il talk.</li>
            <li>L&apos;host di firenze.dev fa una chiusura.</li>
            <li>
              L&apos;azienda che sponsorizza chiude l&apos;incontro
              &quot;tecnico&quot;.
            </li>
            <li>
              Intorno alle 20:00 Inizia il momento di networking fino alle 21
              circa.
            </li>
            <li>
              Lo staff di firenze.dev e chi si vuole aggregare vanno a cena
              insieme.
            </li>
          </ul>
        </p>
      </section>
      <section>
        <H2>Requirements</H2>
        <p className="my-4 mb-16">
          Per poter sponsorizzare uno o più eventi di firenze.dev ci sono delle
          regole da rispettare:
          <ul className="list-inside list-disc">
            <li>
              Puoi proporre un argomento o un talk, valuteremo insieme la
              qualità e se è interessante per la community.
            </li>
            <li>
              Puoi proporre uno speaker. Ci assicureremo della sua abilità di
              speaking ad un pubblico e della qualità delle slide e del talk. Su
              questo siamo tassativi e possiamo mettere il veto.
            </li>
            <li>
              Non accettiamo argomenti poco interessanti e/o marchette pure.
              L&apos;azienda ha uno spazio per parlare durante l&apos;evento,
              dedicato a farsi pubblicità.
            </li>
          </ul>
        </p>
      </section>
      <section>
        <H2>Costi</H2>
        <p className="my-4 mb-16">
          <ul className="list-inside list-disc">
            <li>
              Il costo del luogo per svolgere l&apos;evento. Può essere anche la
              sede dell&apos;azienda
            </li>
            <li>
              Il costo per l&apos;aperitivo. Riteniamo che il networking sia
              importante come il talk, e ci teniamo che sia ben fatto.
            </li>
            <li>
              Se è presente uno speaker che viene da fuori, i costi di trasporto
              e alloggio{" "}
            </li>
          </ul>
        </p>
      </section>
      <section>
        <H2>Come diventare sponsor</H2>
        <p className="my-4">
          Puoi scriverci una mail a{" "}
          <a href="mailto:staff@firenze.dev">staff@firenze.dev</a> oppure
          scriverci dalla <Link href="/contatti">pagina dei contatti</Link> per
          chiedere maggiori informazioni o fissare una call con lo staff di
          firenze.dev.
        </p>
        <H3>Donazioni</H3>
        <p className="my-4 mb-16">
          firenze.dev è anche una associazione senza scopo di lucro, possiamo
          ricevere donazioni (non detraibili) ma non possiamo emettere fattura.
        </p>
      </section>
      <FAQ />
      <PastSponsors />
    </main>
  );
}

function countPeople(): number {
  return Object.values(followers).reduce(
    (total, partial) => total + partial,
    0
  );
}

/**
 * sponsor passati: register, extendi
 */
