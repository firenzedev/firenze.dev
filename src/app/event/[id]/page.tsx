import { FDevEvent, eventService } from "@/app/eventi/lib/EventService";
import Link from "next/link";
import Event from "./_components/Event";
import type { Metadata } from "next";
import dayjs from "dayjs";
import "dayjs/locale/it";
dayjs.locale("it");
import { StaticImageData } from "next/image";

type Props = {
  params: { id: string };
};

export default function EventPage({ params }: Readonly<Props>) {
  const event = eventService.getEvent(params.id);
  return (
    <main className="container mx-auto lg:pt-6 lg:px-44">
      {!event && (
        <div className="lg:p-6 p-2">
          Non siamo riusciti a trovare questo evento:{" "}
          <Link href="/eventi">Vai a tutti eventi</Link>
        </div>
      )}
      {event && <Event event={event} />}
    </main>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = eventService.getEvent(params.id);
  if (!event) {
    return {
      title: "Non siamo riusciti a trovare questo evento",
    };
  }
  const title = event?.title;
  const description = eventDescription(event);
  return {
    title,
    description,
    openGraph: {
      images: [(event?.image as StaticImageData).src],
      title,
      description,
      type: "article",
    },
  };
}

function eventDescription(event: FDevEvent) {
  return `firenze.dev presenta l'evento: ${event.title} - ${
    event.subtitle
  }. Il ${dayjs(event.date).format("DD MMMM, ore HH:mm")} presso ${
    event.place
  }, in ${event.address} `;
}
