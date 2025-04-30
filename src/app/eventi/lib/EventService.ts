import dayjs from "dayjs";
import {fetchAllEvents} from "./supabase/events"
import { FDevEvent } from "./types";



class EventService {
  private events: FDevEvent[] = [];

  constructor(events: FDevEvent[]) {
    this.events = events;
  }

  static async init(): Promise<EventService> {
    const events = await fetchAllEvents();
    return new EventService(events);
  }

  getEvents(): FDevEvent[] {
    return this.events;
  }

  getPastEvents(): FDevEvent[] {
    return this.events.filter((event) => dayjs(event.date).isBefore(new Date()));
  }

  getNextEvents(): FDevEvent[] {
    return this.events
      .filter((event) => dayjs(event.date).isAfter(new Date()))
      .sort(byDate);
  }

  getEvent(slug: string): FDevEvent | undefined {
    return this.events.find((event) => toSlug(event.title) === slug);
  }
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[\W_]+/g, " ")
    .trim()
    .replaceAll(" ", "-");
}

function byDate(a: FDevEvent, b: FDevEvent): number {
  return dayjs(a.date).valueOf() - dayjs(b.date).valueOf();
}

export { EventService, toSlug };
