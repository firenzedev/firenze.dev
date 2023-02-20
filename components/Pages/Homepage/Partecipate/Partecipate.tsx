import H3 from "../../../Heading/H3";
import SubscribeForm from "../../../SubscribeForm/SubscribeForm";

export default function Partecipate() {
  return (
    <section className=" mx-auto lg:flex">
      <div className="lg:w-1/2 p-2 px-24 leading-8">
        <H3>Partecipa</H3>
        <ul>
          <li>
            Non vedi l&apos;ora di discutere della nuovissima libreria
            JavaScript?
          </li>
          <li>
            Sei ansioso di scoprire le novità della prossima versione di Java?
          </li>
          <li>Magari sei un guru di Python o stai imparando Go?</li>
        </ul>
        <hr className="my-4"></hr>
        <p className="mb-6">
          Non importa quali siano i linguaggi e le tecnologie che ti
          appassionano: la nostra community di sviluppatori è aperta a chiunque
          sia interessato alla programmazione, che sia un professionista, un
          neofita o un semplice curioso.
        </p>
        <p className="mb-6">
          <strong>
            Entrare a far parte della community non richiede alcun impegno
          </strong>{" "}
          e ti consentirà di accedere a tutti i nostri canali e di rimanere
          sempre aggiornato sulle nostre attività.
        </p>
        <p className="mb-6">
          Poi, se lo desideri, potrai proporre argomenti, dare supporto agli
          altri membri e collaborare all’organizzazione degli eventi.
        </p>
      </div>
      <div className="lg:w-1/2" id="subscribe">
        <SubscribeForm />
      </div>
    </section>
  );
}
