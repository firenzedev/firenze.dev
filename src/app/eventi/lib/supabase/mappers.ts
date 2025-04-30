import { FDevEvent,parseEventType } from "../types"
import { RawEvent } from './types'
import { getPublicImageUrl } from "@/lib/storage";




export function convertRawEvent(raw: RawEvent): FDevEvent {
  return {
    ...raw,
    date: new Date(raw.date), 
    image: typeof raw.image === "string" && !raw.image.startsWith("http")
    ? getPublicImageUrl(raw.image)
    : raw.image as string,
    icon: typeof raw.icon === "string" && !raw.icon.startsWith("http")
    ? getPublicImageUrl(raw.icon)
    : raw.icon as string,
    type: parseEventType(raw.type)
  }
}

export function convertRawEvents(raws: RawEvent[]): FDevEvent[] {
  return raws.map(convertRawEvent)
}