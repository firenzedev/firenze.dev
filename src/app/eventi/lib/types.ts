

export type eventType = "meetup" | "workshop" | "cfp" | "beer";

const validEventTypes: eventType[] = ["meetup", "workshop", "cfp", "beer"];

export function parseEventType(value: string): eventType {
  if (validEventTypes.includes(value as eventType)) {
    return value as eventType;
  }
  return "meetup"; 
}

export interface FDevEvent {
    title: string;
    subtitle: string;
    icon: string ;
    image: string ;
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