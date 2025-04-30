import Image from "next/image";
import Link from "next/link";
import {  toSlug } from "../lib/EventService";
import { FDevEvent } from "../lib/types";
import { H4 } from "@/components/ui/Heading";
import { Calendar } from "@/components/ui/Calendar";
import { MiniButton } from "@/components/ui/Button";

interface EventProps {
  event: FDevEvent;
}

export default function Event({ event }: Readonly<EventProps>) {
  return (
    <div className="flex align-items-start py-8 border-b">
      <div className="flex items-start justify-center">
        <Calendar date={event.date} />
      </div>
      {/* <Image src={event.icon} alt={event.title} width={150} height={150} /> */}
      <div className="ml-6 flex-1">
        <Link
          className="text-blue-600 no-underline hover:underline"
          href={`/event/${toSlug(event.title)}`}
        >
          <H4 className="mb-1 text-2xl">{event.title}</H4>
          <p className="mb-4">{}</p>
        </Link>
        <p>{event.subtitle}</p>
        <div className="text-right">
          <Link href={`/event/${toSlug(event.title)}`}>
            <MiniButton>Scopri di più</MiniButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
