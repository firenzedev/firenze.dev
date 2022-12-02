import Link from "next/link";
import PrimaryButton from "../../Button/PrimaryButton";
import H1 from "../../Heading/H1";
import H2 from "../../Heading/H2";
import AboutMainContent from "./AboutMainContent";

import Founders from "./Founders";

export default function About() {
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
