import flagImage from "./images/flag.svg";
import communityImage from "./images/community.svg";
import mentorshipImage from "./images/mentorship.svg";
import PrimaryButton from "../../Button/PrimaryButton";
import H2 from "../../Heading/H2";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "next/link";

export default function AboutMainContent() {
  return (
    <>
      <p className="mt-8">
        Due amici accomunati dalla passione per la tecnologia e lo sviluppo,
        dalla voglia di imparare e di condividere la conoscenza: è così che in
        una sera d&apos;estate è nata <strong>firenze.dev</strong>, quando{" "}
        <a href="#lorenzo">Lorenzo</a> e <a href="#tiziano">Tiziano</a>, davanti
        a un bicchiere di birra, hanno deciso di concretizzare un&apos;idea che
        ronzava nelle loro teste da molto tempo.
      </p>
      <p className="my-8">Ma perchè fondare una community?</p>

      <AboutSection
        title="La confraternita dei programmatori"
        image={flagImage}
        mainText={
          <p className="p-2">
            Esistono già altre realtà sul territorio di Firenze che organizzano
            eventi dedicati al mondo dello sviluppo: si tratta sempre di
            iniziative interessanti e stimolanti, ma a volte manca un momento di
            vero confronto, un elemento aggregativo che consenta alle persone
            non solo di recepire passivamente delle nozioni, ma di sentirsi
            partecipi di una iniziativa comune, un luogo per far incrociare le
            tante esperienze e conoscenze diverse.
          </p>
        }
        secondaryText={
          <p className="my-8">
            L&apos;idea alla base di <strong>firenze.dev</strong> è proprio
            quella di creare una{" "}
            <strong>community aperta e partecipativa</strong>, focalizzata sulla
            programmazione in tutte le sue declinazioni,{" "}
            <strong>che accolga chiunque sia appassionato di sviluppo</strong>,
            indipendentemente dallo specifico linguaggio o dalla tecnologia
            utilizzata.
          </p>
        }
        quoteText={
          <p>
            A partire dal XII secolo, a Firenze nascono le Arti, corporazioni
            che aggregavano coloro che esercitavano la medesima professione:
            queste organizzazioni hanno assunto con il tempo una importanza
            sempre maggiore, contribuendo in maniera determinante alla
            straordinaria fortuna della città toscana. Nove secoli dopo,
            firenze.dev aspira a essere una moderna corporazione, aperta a tutti
            i programmatori e agli appassionati di sviluppo software.
          </p>
        }
      />
      <AboutSection
        title="L'unione fa la forza"
        image={communityImage}
        mainText={
          <p className="p-2">
            Ma <strong>firenze.dev</strong> non nasce solo come punto di
            aggregazione, sin dall&apos;inizio si pone come luogo di{" "}
            <strong>crescita personale e professionale</strong>: organizzando
            eventi gratuiti e aperti a tutti fornisce l&apos;occasione per un
            confronto costruttivo con altri sviluppatori, contribuendo non solo
            ad <strong>aumentare e migliorare le conoscenze</strong> di tutti,
            ma anche a costruire e rafforzare la{" "}
            <strong>
              professionalità legata alla figura del programmatore
            </strong>
            , molto spesso sottovalutata o trascurata da chi lavora in questo
            settore.
          </p>
        }
        quoteText={
          <p>
            Meglio sviluppare velocemente o rilasciare codice di qualità? Se il
            cliente non mi chiede dei test automatici, devo farli lo stesso?
            Basta che il software funzioni o devo preoccuparmi di
            qualcos&apos;altro? Queste sono alcune tra le tante domande alle
            quali risponde <strong>firenze.dev</strong>, per cercare di capire
            insieme quali siano le caratteristiche che definiscono la
            professionalità di uno sviluppatore.
          </p>
        }
      />
      <AboutSection
        title="Mentoring"
        image={mentorshipImage}
        mainText={
          <p className="p-2">
            Ultimo punto, ma non meno importante: <strong>firenze.dev</strong>{" "}
            vuole essere un solido elemento di <strong>supporto</strong> per i
            neofiti, per chi si sta avvicinando al mondo della programmazione,
            ma non ha ancora accumulato sufficiente esperienza per sapersi
            muovere con sicurezza in questo ambiente.{" "}
            <strong>firenze.dev</strong> si propone di offrire degli{" "}
            <strong>incontri dedicati proprio ai più giovani</strong>, per
            essere loro di stimolo e di aiuto, fornendo al tempo stesso una{" "}
            <strong>guida nel loro lavoro quotidiano</strong>, costituita da un
            ampio gruppo di esperti e professionisti.
          </p>
        }
        quoteText={
          <p>
            Troppo spesso, purtroppo, la passione e la curiosità dei più giovani
            finiscono per spegnersi di fronte alla routine di un lavoro
            ripetitivo e non troppo stimolante, frenando la loro crescita e
            lasciandoli via via più indietro rispetto a un settore che è in
            continua evoluzione. Uno degli obiettivi primari di{" "}
            <strong>firenze.dev</strong> è quello di affiancare i programmatori
            più inesperti per guidarli attraverso un percorso di crescita
            professionale.
          </p>
        }
      />

      <p className="my-8">
        Queste le idee che, tra una birra e l&apos;altra, hanno portato alla
        creazione di firenze.dev. Se anche tu condividi questo pensiero e vuoi
        partecipare alle attività della community, unisciti a noi per crescere
        insieme!
      </p>
      <div className="text-center">
        <Link href="/community/#subscribe">
          <PrimaryButton>Iscriviti</PrimaryButton>
        </Link>
      </div>
    </>
  );
}

interface AboutSectionProps {
  title: string;
  image: any;
  mainText: ReactNode;
  secondaryText?: ReactNode;
  quoteText: ReactNode;
}

function AboutSection({
  title,
  image,
  mainText,
  secondaryText,
  quoteText,
}: AboutSectionProps) {
  return (
    <section className="mt-16">
      <H2>{title}</H2>
      <div className="my-8 lg:flex">
        <div className="lg:min-w-40">
          <Image src={image} width={160} height={160} alt="code flag" />
        </div>
        {mainText}
      </div>
      {secondaryText}

      <Quote content={quoteText} />
    </section>
  );
}

function Quote({ content }: { content: ReactNode }) {
  return (
    <div className="flex bg-blue-900 text-white p-4 rounded-xl mb-16">
      <div className="w-1/12 text-red-500 font-semibold text-5xl italic">{`{`}</div>
      <div className="italic font-semibold">{content}</div>
      <div className="w-1/12 text-red-500 font-semibold text-5xl italic flex items-end">{`}`}</div>
    </div>
  );
}
