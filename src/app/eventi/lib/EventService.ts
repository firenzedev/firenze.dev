import { StaticImageData } from "next/image";
import dayjs from "dayjs";
import { events } from "./events-db";

type eventType = "meetup" | "workshop" | "cfp" | "beer";

export interface FDevEvent {
  title: string;
  subtitle: string;
  icon: string | StaticImageData;
  image: string | StaticImageData;
  current?: boolean;
  abstract: string;
  date: Date;
  place: string | null;
  sponsor?: string;
  address: string;
  eventbriteId?: string;
  eventbriteLink?: string;
  externalLink?: string;
  ticketTailorId?: number;
  type: eventType;
  hideSponsorInNetworking?: boolean;
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
      dayjs(event.date).isBefore(new Date()),
    );
  }

  getNextEvents(): FDevEvent[] {
    return this.events.filter(
      (event) => dayjs(event.date).isAfter(new Date()),
    ).sort(byDate);
  }

  getEvent(slug: string): FDevEvent | undefined {
    return this.events.find((event) => toSlug(event.title) === slug);
  }
}

export function toSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[\W_]+/g," ")
    .trim()
    .replaceAll(" ", "-")
}

export const eventService = new EventService(events);

function byDate(a: FDevEvent, b: FDevEvent) {
  return dayjs(a.date).valueOf() - dayjs(b.date).valueOf();
}