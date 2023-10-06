import H1 from "../../Heading/H1";
import ErrorImage from "./images/error.svg";
import Image from "next/image";
import Link from "next/link";
import SecondaryButton from "../../Button/SecondaryButton";

export default function FourOrFour() {
  return (
    <main className="container mx-auto px-2 pt-6 lg:px-56">
      <div>
        <p className="text-center text-lg md:text-xl mt-6 mb-4">
          Ci dispiace, ma non siamo riusciti a trovare la pagina che stai cercando.
        </p>
        <div className="leading-8">
        <p>Potresti provare una delle seguenti opzioni:</p>
        <ul className="list-disc list-inside">
          <li>
            <Link href="/">Torna alla pagina iniziale</Link>: Puoi farlo
            cliccando sul nostro logo o utilizzando il pulsante &quot;Home&quot;
            nella barra di navigazione.
          </li>
          <li className="visible lg:hidden">
            Naviga tramite il menu: Esplora il nostro menu di navigazione per
            trovare la sezione o la pagina di tuo interesse.
          </li>

          <li>
            <Link href="/contatti">Contattaci</Link>: Se pensi che si tratti di
            un errore, ti preghiamo di contattarci e segnalare il problema.
            Saremo felici di assisterti.
          </li>
        </ul>
        <p className="mt-8">

        Ci scusiamo per l&apos;inconveniente. Grazie per la tua comprensione e per
        aver visitato il sito web.
        </p>
        </div>
      </div>
      <div className="text-center my-16">
        <Link href="/">
          <SecondaryButton>Torna alla Home Page</SecondaryButton>
        </Link>
      </div>
      <div className="flex justify-center">
        <Image src={ErrorImage} alt="Error Icon" />
      </div>
    </main>
  );
}
