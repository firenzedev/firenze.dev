import { StaticImageData } from "next/image";
import dayjs from "dayjs";
import { events } from "./events";

export interface EventType {
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
  eventbriteId: string;
  eventbriteLink: string;
}

class EventService {
  events: EventType[];

  constructor(events: EventType[]) {
    this.events = events;
  }

  getEvents(): EventType[] {
    return this.events;
  }

  getPastEvents(): EventType[] {
    return this.events.filter((event) =>
      dayjs(event.date).isBefore(new Date())
    );
  }

  getNextEvent(): EventType | undefined {
    return this.events.find(
      (event) => event.current && dayjs(event.date).isAfter(new Date())
    );
  }

  getEvent(slug: string): EventType | undefined {
    return this.events.find((event) => toSlug(event.title) === slug);
  }
}

export function toSlug(name: string) {
  return name.toLowerCase().replaceAll(" ", "-");
}

export const eventService = new EventService(events);
