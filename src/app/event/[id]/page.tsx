import {  EventService } from "@/app/eventi/lib/EventService";
import { FDevEvent } from "@/app/eventi/lib/types";
import Link from "next/link";
import Event from "./_components/Event";
import type { Metadata } from "next";
import dayjs from "dayjs";
import "dayjs/locale/it";
dayjs.locale("it");
import { getPublicImageUrl } from "@/lib/storage";

type Props = {
  params: { id: string };
};

export default async function EventPage({ params }: Readonly<Props>) {
  const eventService = await EventService.init();
  const event = eventService.getEvent(params.id);;
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
  const eventService = await EventService.init();
  const event = eventService.getEvent(params.id);;
  if (!event) {
    return {
      title: "Non siamo riusciti a trovare questo evento",
    };
  }
  const { title, image } = event;
  const description = eventDescription(event);
  const imageUrl = typeof image === "string" && !image.startsWith("http")
    ? getPublicImageUrl(image)
    : image as string;

  return {
    title,
    description,
    openGraph: {
      images: imageUrl,
      title,
      description,
      type: "article",
    },
  };
}

function eventDescription(event: FDevEvent) {
  const place = event.place ? ` presso ${event.place}` : "";
  const intro = event.type === "meetup" ? "firenze.dev presenta l'evento: " : "";
  return `${intro}${event.title} - ${
    event.subtitle
  }. Il ${dayjs(event.date).format("DD MMMM, ore HH:mm")}${place}`;
}
