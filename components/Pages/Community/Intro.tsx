import SecondaryButton from "../../Button/SecondaryButton";

export default function Intro() {
  return (
    <section>
      <p className="pt-8">
        Siamo un gruppo di persone animate dalla passione comune per la{" "}
        <strong>tecnologia</strong> e lo <strong>sviluppo</strong> del codice.
      </p>
      <p className="pt-8">
        Il nostro scopo è quello di creare un{" "}
        <strong>punto di aggregazione</strong> per tutti gli sviluppatori di
        Firenze e dintorni, organizzando{" "}
        <strong>eventi gratuiti e aperti</strong> a tutti.
      </p>
      <p className="pt-8">
        Vogliamo promuovere lo <strong>scambio di idee</strong> e la{" "}
        <strong>collaborazione</strong> per creare un ambiente amichevole e
        stimolante, che possa favorire la crescita delle persone.
      </p>
      <div className="mt-8 text-center">
        <SecondaryButton>Iscriviti</SecondaryButton>
      </div>
    </section>
  );
}
