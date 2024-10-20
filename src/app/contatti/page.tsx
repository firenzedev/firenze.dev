import { H1 } from "@/components/ui/Heading";
import { Metadata } from "next";

const description =
  "Vuoi metterti in contatto con qualcuno di firenze.dev o entrare a far parte della community? Qui trovi tutti i contatti.";
const title = "Contatta firenze.dev";

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
    <main className="container mx-auto p-2 py-12 lg:px-56">
      <H1>Contatta firenze.dev</H1>
      <p className="py-8">
        Puoi scriverci qualsiasi qualcosa, saremo molto felici di leggere e ti
        risponderemo appena possiamo
      </p>
      <p className="py-2">
        Puoi contattare la community di firenze.dev all&apos;indirizzo{" "}
        <a href="mailto:hello@firenze.dev">hello@firenze.dev</a>.
      </p>
      <p className="py-2">
        Puoi scriverci anche sul{" "}
        <a href="https://discord.com/invite/DJ5gpQtqMH">
          discord della community
        </a>
        .
      </p>
    </main>
  );
}
