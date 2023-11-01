import Image from "next/image";
import teamWorkImage from "./teamwork.png";
import { H2 } from "@/components/ui/Heading";

export default function WhatWeBelieve() {
  return (
    <section className="my-8 bg-slate-100 shadow-lg p-4">
      <H2>In cosa crediamo</H2>
      <p className="mt-8">
        La nostra community è un’organizzazione senza scopo di lucro, animata da
        persone che hanno deciso di dedicare una parte del proprio tempo a
        costruire relazioni, condividere le proprie conoscenze e dare supporto
        agli altri. Facciamo tutto questo su base volontaria perché crediamo in
        questi valori:
      </p>
      <div className="grid lg:grid-cols-3 gap-1 mt-8">
        <div className="lg:col-span-2">
          <ul className="list-disc list-inside">
            <li className="mt-4">
              ci appassiona imparare cose nuove e approfondire le nostre
              conoscenze
            </li>
            <li className="mt-4">
              pensiamo che sia importante avere un punto di riferimento che
              possa essere di supporto a tutti gli sviluppatori per la loro
              crescita professionale
            </li>
            <li className="mt-4">
              siamo convinti che l’apprendimento sia favorito da un clima
              amichevole e stimolante
            </li>
            <li className="mt-4">
              crediamo che i rapporti umani e le relazioni interpersonali
              costituiscano il veicolo migliore per la trasmissione della
              conoscenza
            </li>
            <li className="mt-4">
              diamo valore al contribuito di ogni persona e rispettiamo le
              opinioni di tutti
            </li>
            <li className="mt-4">
              riteniamo che ci sia sempre qualcosa da imparare dagli altri e che
              la crescita personale sia favorita dalla collaborazione tra le
              persone
            </li>
            <li className="mt-4">
              reputiamo il potenziale di un gruppo sempre maggiore di quello dei
              singoli individui che lo compongono
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={teamWorkImage}
            width={300}
            height={257}
            alt="Un gruppo di programmatori lavorano insieme in una community"
          />
        </div>
      </div>
    </section>
  );
}
