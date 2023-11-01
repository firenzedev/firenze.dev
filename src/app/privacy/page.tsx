import { H1, H4 } from "@/components/ui/Heading";
import { Metadata } from "next";

const title = "Privacy policy";
const description = "Trattamento dei dati e privacy policy di firenze.dev";

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
    <main className="container mx-auto p-2 pt-6 lg:px-56">
      <H1>Privacy Policy</H1>
      <div className="pt-4">
        <H4>
          Informativa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679
        </H4>
      </div>
      <p className="pb-10">
        Noi di <i>firenze.dev</i> riteniamo che la privacy dei nostri visitatori
        sia estremamente importante. Questo documento descrive dettagliatamente
        i tipi di informazioni personali che vengono raccolte e registrate dal
        nostro sito e come esse vengano utilizzate.
      </p>
      <H4>File di Registrazione (Log Files)</H4>
      <p className="pb-10">
        Come molti altri siti web, il nostro utilizza file di log. Questi file
        registrano semplicemente i visitatori del sito - di solito una procedura
        standard delle aziende di hosting e dei servizi di analisi degli
        hosting. Le informazioni contenute nei file di registro comprendono
        indirizzi di protocollo Internet (IP), il tipo di browser, Internet
        Service Provider (ISP), informazioni come data e ora, pagine referral,
        pagine d&apos;uscita ed entrata o il numero di clic. Queste informazioni
        vengono utilizzate per analizzare le tendenze, amministrare il sito,
        monitorare il movimento degli utenti sul sito e raccogliere informazioni
        demografiche. Gli indirizzi IP e le altre informazioni non sono
        collegate a informazioni personali che possono essere identificate,
        dunque tutti i dati sono raccolti in forma assolutamente anonima.
      </p>
      <H4>Cookie Policy</H4>
      <p className="pb-10">
        Questo sito utilizza cookies, anche di terze parti, per migliorare
        l&apos;esperienza di navigazione, consentire a chi naviga di usufruire di
        eventuali servizi online e monitorare la navigazione nel sito.
      </p>
      <H4>Gestione dei Cookies</H4>
      <p className="pb-4">
        I cookies utilizzati in questo sito rientrano nelle categorie descritte
        di seguito.
      </p>
      <p className="font-bold">
        Attività strettamente necessarie al funzionamento
      </p>
      <p className="pb-4">
        Questi cookies hanno natura tecnica e permettono al sito di funzionare
        correttamente. Ad esempio, mantengono l&apos;utente collegato durante la
        navigazione evitando che il sito richieda di collegarsi più volte per
        accedere alle pagine successive.
      </p>
      <p className="font-bold">Attività di salvataggio delle preferenze</p>
      <p className="pb-4">
        Questi cookie permettono di ricordare le preferenze selezionate
        dall&apos;utente durante la navigazione, ad esempio, consentono di impostare
        la lingua.
      </p>
      <p className="font-bold">
        Attività statistiche e di misurazione dell&apos;audience
      </p>
      <p className="pb-4">
        Questi cookie ci aiutano a capire, attraverso dati raccolti in forma
        anonima e aggregata, come gli utenti interagiscono con i siti internet
        fornendo informazioni relative alle sezioni visitate, il tempo trascorso
        sul sito, eventuali malfunzionamenti. Questo aiuta a migliorare la resa
        dei siti internet.
      </p>
      <p className="font-bold">Cookie di social media</p>
      <p className="pb-10">
        Questi cookie di terza parte vengono utilizzati per integrare alcune
        diffuse funzionalità dei principali social media (e.g. Facebook,
        Twitter, ecc.) e fornirle all&apos;interno del sito. Ad esempio sono
        utilizzati per permettere la registrazione al sito tramite il proprio
        social account.
      </p>
      <H4>Finalità del trattamento</H4>
      <p className="pb-2">
        I dati possono essere raccolti per una o più delle seguenti finalità:
      </p>
      <ul className="list-disc list-inside pb-10">
        <li>
          fornire l&apos;accesso ad aree riservate del sito o a materiali
          condivisi
        </li>
        <li>
          invio di comunicazioni di carattere informativo, organizzativo,
          notizie, aggiornamenti sulle iniziative di <i>firenze.dev</i>
        </li>
        <li>eseguire gli obblighi previsti da leggi o regolamenti</li>
        <li>gestione contatti</li>
      </ul>
      <H4>Modalità del trattamento</H4>
      <p className="pb-2">I dati verranno trattati con le seguenti modalità:</p>
      <ul className="list-disc list-inside pb-10">
        <li>raccolta dati con modalità single-opt, in apposito database</li>
        <li>
          registrazione ed elaborazione su supporto cartaceo e/o magnetico
        </li>
        <li>
          organizzazione degli archivi in forma prevalentemente automatizzata,
          ai sensi del Disciplinare Tecnico in materia di misure minime di
          sicurezza, Allegato B del Codice della Privacy
        </li>
      </ul>
      <H4>Natura obbligatoria</H4>
      <p className="pb-10">
        L&apos;unico dato richiesto obbligatoriamente per l&apos;iscrizione alla
        community è un indirizzo e-mail valido.
      </p>
      <H4>Diritti dell&apos;interessato</H4>
      <p className="pb-2">
        Ai sensi ai sensi dell&apos;art. 7 (Diritto di accesso ai dati personali
        ed altri diritti) del Codice della Privacy, vi segnaliamo che i vostri
        diritti in ordine al trattamento dei dati sono:
      </p>
      <ul className="list-disc list-inside">
        <li>
          conoscere, mediante accesso gratuito l&apos;esistenza di trattamenti
          di dati che possano riguardarvi
        </li>
        <li>essere informati sulla natura e sulle finalità del trattamento</li>
        <li>
          ottenere a cura del titolare, senza ritardo:
          <ul className="list-disc list-inside ml-6">
            <li className="mt-2">
              la conferma dell&apos;esistenza o meno di dati personali che vi
              riguardano, anche se non ancora registrati, e la comunicazione in
              forma intellegibile dei medesimi dati e della loro origine, nonché
              della logica e delle finalità su cui si basa il trattamento; la
              richiesta può essere rinnovata, salva l&apos;esistenza di
              giustificati motivi, con intervallo non minore di novanta giorni
            </li>
            <li className="mt-2">
              la cancellazione, la trasformazione in forma anonima o il blocco
              dei dati trattati in violazione di legge, compresi quelli di cui
              non è necessaria la conservazione in relazione agli scopi per i
              quali i dati sono stati raccolti o successivamente trattati
            </li>
            <li className="mt-2">
              l&apos;aggiornamento, la rettifica ovvero, qualora vi abbia
              interesse, l&apos;integrazione dei dati esistenti
            </li>
            <li className="mt-2">
              opporvi in tutto o in parte per motivi legittimi al trattamento
              dei dati personali che vi riguardano ancorché pertinenti allo
              scopo della raccolta
            </li>
          </ul>
        </li>
      </ul>
      <p className="py-6">
        Vi segnaliamo che il titolare del trattamento dei dati è{" "}
        <i>firenze.dev</i> (nelle persone degli amministratori del sito Tiziano
        Pessa e Lorenzo Spinelli). Per esercitare i diritti previsti
        all&apos;art. 7 del Codice della Privacy ovvero per la cancellazione dei
        vostri dati dall&apos;archivio o per ogni altra richiesta di
        informazioni o chiarimenti, è sufficiente contattarci inviando un
        messaggio a <a href="mailto:admin@firenze.dev">admin@firenze.dev</a>
      </p>
      <p className="pb-10">
        Tutti i dati sono protetti attraverso l&apos;uso di antivirus, firewall
        e protezione attraverso password.
      </p>
      <H4>Consenso</H4>
      <p className="pb-10">
        Usando il nostro sito web o iscrivendoti alla community, acconsenti alla
        nostra politica sulla privacy e accetti i suoi termini. Se desideri
        ulteriori informazioni o hai domande sulla nostra politica sulla privacy
        non esitare a contattarci scrivendo a{" "}
        <a href="mailto:admin@firenze.dev">admin@firenze.dev</a>
      </p>
    </main>
  );
}
