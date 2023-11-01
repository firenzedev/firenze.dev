import Link from "next/link";
import { H3 } from "@/components/ui/Heading";
import { PrimaryButton } from "@/components/ui/Button";

export default function WhoWeAre() {
  return (
    <section className="lg:my-12 container lg:px-48 mx-auto p-2">
      <H3>Chi siamo</H3>
      <p>
        <strong>firenze.dev è una community</strong> aperta a tutti gli
        appassionati di sviluppo software, legati a Firenze e al suo territorio.
      </p>
      <p className="mt-8">
        Crediamo nell’aggregazione, nello scambio di idee e nella condivisione,
        perché siamo convinti che, attraverso il confronto e la collaborazione,
        potremo divertirci e crescere insieme.
      </p>
      <p className="mt-8">
        <strong>Organizziamo eventi gratuiti per programmatori</strong>,
        fornendo strumenti e supporto per imparare e migliorarsi costantemente.
      </p>
      <div className="text-center my-10">
        <Link href="/community">
          <PrimaryButton>Scopri di più</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}
