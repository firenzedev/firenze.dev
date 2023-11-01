import { H1, H2 } from "@/components/ui/Heading";
import AboutMainContent from "./_components/AboutMainContent";
import Founders from "./_components/Founders";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/Button";
import { Metadata } from "next";

const description =
  "firenze.dev: Una community per appassionati di sviluppo e programmazione a Firenze. Unisciti a noi per scoprire eventi, formazione gratuita e un supporto professionale per programmatori di tutte le esperienze. Creato da due amici appassionati di tecnologia, Lorenzo Spinelli e Tiziano Pessa. Entra nella nostra comunità e cresci con noi!";
const title = "About firenze.dev";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    description,
    title,
  },
};
export default function AboutPage() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-56">
      <H1>About firenze.dev</H1>
      <AboutMainContent />
      <Founders />
      <section>
        <H2>Cosa facciamo</H2>
        <p className="py-8">
          Le idee che hanno dato origine alla community si concretizzano nelle
          attività organizzate periodicamente da firenze.dev: sessioni gratuite
          di formazione, canali di comunicazione dedicati, discussioni aperte e
          occasioni di incontro per gli sviluppatori di Firenze e dintorni.
        </p>
      </section>
      <div className="text-center mb-16">
        <Link href="/community">
          <PrimaryButton>Scopri di più</PrimaryButton>
        </Link>
      </div>
    </main>
  );
}
