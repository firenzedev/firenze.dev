import { H1 } from "@/components/ui/Heading";
import NextEvents from "./_components/NextEvents";
import EventIntro from "./_components/EventIntro";
import PastEvents from "./_components/PastEvents";
import { Metadata } from "next";
import image from "./_components/images/eventi.webp";
import { EventHero } from "./_components/EventHero";

const description =
  "Eventi per programmatori a Firenze, organizzati dalla community di svilupaptori firenze.dev. Scopri i nostri eventi per svilupaptori";
const title = "Eventi - firenze.dev";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    description,
    title,
    images: [image.src],
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: title,
  description: description,
};

export default function EventiPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EventHero />
      <EventIntro />
      <div className="container mx-auto p-2 lg:px-36">
        <NextEvents />
        <PastEvents />
      </div>
    </main>
  );
}
