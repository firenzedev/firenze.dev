import Image from "next/image";
import Link from "next/link";
import { FDevEvent, toSlug } from "../lib/EventService";
import { H4 } from "@/components/ui/Heading";

interface EventProps {
  event: FDevEvent;
}

export default function Event({ event }: Readonly<EventProps>) {
  return (
    <div className="flex flex-col lg:flex-row py-8 border-b">
      <div className="lg:border">
        <Image src={event.icon} alt={event.title} width={150} height={150} />
      </div>
      <div className="lg:ml-6">
        <Link
          className="text-blue-600 underline"
          href={`/event/${toSlug(event.title)}`}
        >
          <H4>{event.title}</H4>
        </Link>
        <p>{event.subtitle}</p>
      </div>
    </div>
  );
}
