import H3 from "../../Heading/H3";
import SubscribeForm from "../../SubscribeForm/SubscribeForm";

export default function HowToPartecipate() {
  return (
    <section className="mt-16">
      <H3>Come partecipare</H3>
      <p className="mt-8">
        <strong>Chiunque può entrare a far parte della community</strong>: la
        partecipazione è completamente <strong>gratuita</strong> e{" "}
        <strong>non è richiesto alcun tipo di impegno</strong>.
      </p>
      <p className="mt-8">
        Iscrivendosi si avrà accesso ai nostri canali di comunicazione e si
        potrà restare aggiornati sui prossimi eventi e sulle nostre attività.
      </p>
      <p className="mt-8">
        Poi, chi vuole contribuire in maniera attiva, può dare la propria
        disponibilità a partecipare al lavoro del gruppo, ad esempio aiutando
        gli altri, partecipando all’&apos;organizzazione degli eventi oppure
        facendo proposte per migliorare la community.
      </p>
      <p className="mt-8">
        Iscriviti ed entra a far parte di firenze.dev, altri sviluppatori come
        ti stanno aspettando.
      </p>
      <div id="subscribe">
        <SubscribeForm />
      </div>
    </section>
  );
}
