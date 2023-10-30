import { StaticImageData } from "next/image";
import dayjs from "dayjs";
import { events } from "./events";

type eventType = "meetup" | "workshop"

export interface FDevEvent {
  title: string;
  subtitle: string;
  icon: string | StaticImageData;
  image: string | StaticImageData;
  current?: boolean;
  abstract: string;
  date: Date;
  place: string;
  sponsor?: string;
  address: string;
  eventbriteId?: string;
  eventbriteLink?: string;
  externalLink?: string;
  type: eventType
}

class EventService {
  events: FDevEvent[];

  constructor(events: FDevEvent[]) {
    this.events = events;
  }

  getEvents(): FDevEvent[] {
    return this.events;
  }

  getPastEvents(): FDevEvent[] {
    return this.events.filter((event) =>
      dayjs(event.date).isBefore(new Date())
    );
  }

  getNextEvent(): FDevEvent | undefined {
    return this.events.find(
      (event) => event.current && dayjs(event.date).isAfter(new Date())
    );
  }

  getEvent(slug: string): FDevEvent | undefined {
    return this.events.find((event) => toSlug(event.title) === slug);
  }
}

export function toSlug(name: string) {
  return name.toLowerCase().replaceAll(" ", "-").replaceAll(",", "");
}

export const eventService = new EventService(events);
