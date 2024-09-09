import Image from "next/image";
import Link from "next/link";
import eventImage from "./images/eventi.webp";
import { H4 } from "@/components/ui/Heading";

export default function EventIntro() {
  return (
    <section className="max-w-3xl max-auto">
      <Image
        src={eventImage}
        alt="firenze.dev eventi"
        width={1024}
        height={627}
      />
      <p className="mt-8">
        Gli sviluppatori, più di qualsiasi altra figura professionale, hanno un
        bisogno costante di aggiornare le proprie competenze e di mantenersi in
        contatto con un mondo che cambia molto velocemente. E spesso questo
        continuous learning richiede non solo l&apos;acquisizione di nuove
        conoscenze, ma anche il confronto con altri programmatori.
      </p>
      <p className="mt-8">
        Se anche tu sei uno sviluppatore a cui piace imparare cose nuove ed
        entrare in contatto con altre persone come te, firenze.dev fa al caso
        tuo.{" "}
      </p>
      <p className="my-8">
        Siamo ancora nuovi in città, ma stiamo facendo del nostro meglio per
        portare speaker e argomenti interessanti alla comunità. Ci teniamo a far
        sentire gli sviluppatori a proprio agio in questa comunità e aiutarli a
        connettersi con altre persone che fanno cose simili.{" "}
      </p>
      <H4>Come funzionano gli eventi di firenze.dev?</H4>
      <p className="mt-8">
        Ci troviamo in uno dei luoghi che ospitano i nostri eventi, facciamo un
        breve opening per rompere il ghiaccio, poi lo speaker tiene il talk o il
        workshop. Segue una sessione di domande e risposte e uno spazio aperto
        in cui ognuno è libero di esprimere la propria opinione
        sull&apos;argomento trattato.
      </p>
      <p className="mt-8">
        L&apos;evento si conclude con un aperitivo, durante il quale ci
        dedichiamo al networking.
      </p>
      <p className="my-8">
        Partecipare a queste sessioni è una buona occasione per imparare
        qualcosa di nuovo, condividere le tue conoscenze e venire in contatto
        con altri programmatori. Il nostro obiettivo è aggregare una comunità di
        sviluppatori, dar loro l&apos;opportunità di incontrarsi e ispirarli a
        creare progetti fantastici.
      </p>
      <H4>Come partecipare?</H4>
      <p className="mt-8">
        Partecipare è semplice:{" "}
        <Link href="/community" className="underline text-blue-600">
          iscriviti alla community
        </Link>{" "}
        e seguici sui canali social per sapere quando sarà il prossimo evento.
      </p>
      <p className="mt-8">
        Vuoi parlare di un argomento in particolare? Vorresti fare lo speaker ad
        uno degli eventi? Sei un&apos;azienda che vuole sponsorizzare o ospitare
        un evento? Scrivici e faccelo sapere, saremo contenti di conoscerti e
        ascoltare le tue proposte.
      </p>
    </section>
  );
}
