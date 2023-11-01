import { H1 } from "@/components/ui/Heading";
import Intro from "./_components/Intro";
import WhatWeBelieve from "./_components/WhatWeBelieve";
import Audience from "./_components/Audience";
import Goals from "./_components/Goals";
import HowToPartecipate from "./_components/HowToPartecipate";
import { Metadata } from "next";

const description =
  "firenze.dev: La community degli sviluppatori a Firenze. Unisciti a noi per condividere la passione per la tecnologia e lo sviluppo del codice. Scopri eventi gratuiti, discussioni costruttive, mentoring per sviluppatori di tutte le esperienze. Una community senza scopo di lucro dedicata alla crescita personale e professionale. Entra a far parte di firenze.dev oggi!";
const title = "La community di firenze.dev";

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
    <main>
      <section className="container mx-auto p-2 pt-6 lg:px-36">
        <H1>La community degli sviluppatori a Firenze</H1>
        <Intro />
        <WhatWeBelieve />
        <Audience />
        <Goals />
      </section>
      <section>
        <HowToPartecipate />
      </section>
    </main>
  );
}
