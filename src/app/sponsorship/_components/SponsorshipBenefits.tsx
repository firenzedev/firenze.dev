import React from "react";

const SponsorshipBenefits = () => {
  return (
    <section className="container mx-auto p-6 lg:px-36">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">
        Immagina una comunità che riunisce i migliori talenti tech del
        territorio.
      </h1>
      <p className="text-lg mb-4">
        Dove le aziende hanno l&apos;opportunità di entrare in contatto diretto
        con sviluppatori appassionati, motivati e pronti a crescere.{" "}
        <strong>firenze.dev è esattamente questo:</strong> una piattaforma che
        mette in connessione persone, idee e opportunità.
      </p>

      <h2 className="text-2xl lg:text-3xl font-semibold mt-6 mb-4">
        Ecco perché dovresti sponsorizzarci:
      </h2>

      <ol className="list-decimal ml-6 space-y-4">
        <li>
          <h3 className="font-bold">
            Visibilità diretta nel cuore dell&apos;innovazione locale
          </h3>
          <p>
            Firenze.dev è un punto di riferimento per sviluppatori e tecnologi a
            Firenze. Sponsor come te saranno al centro di ogni evento,
            conferenza e workshop, diventando un partner essenziale per chi
            guida la trasformazione digitale.
          </p>
        </li>
        <li>
          <h3 className="font-bold">
            Accesso esclusivo ai migliori talenti tech
          </h3>
          <p>
            Ogni nostro evento riunisce professionisti esperti e mid-senior
            developers che cercano nuove sfide e opportunità di crescita.
            Sponsorizzarci significa entrare in contatto diretto con questi
            professionisti, aumentando la tua possibilità di attrarre i talenti
            più in gamba.
          </p>
        </li>
        <li>
          <h3 className="font-bold">
            Posizionamento come leader nel settore tech
          </h3>
          <p>
            Associa il tuo brand a valori come innovazione, crescita e
            formazione continua. Firenze.dev non è solo una community, ma un
            movimento per il miglioramento delle competenze nel settore IT. La
            tua azienda verrà vista come un pilastro del progresso tecnologico.
          </p>
        </li>
        <li>
          <h3 className="font-bold">Networking di qualità</h3>
          <p>
            Non solo talenti, ma anche altri leader aziendali e professionisti
            del settore si riuniscono ai nostri eventi. Sponsorizzare
            Firenze.dev ti darà l&apos;opportunità di espandere il tuo network
            professionale e creare collaborazioni strategiche con altre aziende
            all’avanguardia.
          </p>
        </li>
        <li>
          <h3 className="font-bold">Impatto locale, valore globale</h3>
          <p>
            Sostenendo Firenze.dev, investi non solo nella community locale, ma
            anche nella crescita di un ecosistema tecnologico che ha ambizioni
            internazionali. Sarai parte di una storia di successo che sta
            contribuendo a far emergere Firenze come hub tecnologico.
          </p>
        </li>
      </ol>

      <p className="text-lg mt-6">
        Diventare nostro sponsor significa non solo mettere il tuo brand davanti
        ai futuri leader del tech, ma anche contribuire attivamente al loro
        percorso di crescita. Sei pronto a fare la differenza?
      </p>
    </section>
  );
};

export default SponsorshipBenefits;
