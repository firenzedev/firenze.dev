import { H3 } from "@/components/ui/Heading";
import Event from "./Event";
import { eventService } from "../lib/EventService";

export default function PastEvents() {
  const events = eventService.getPastEvents();
  return (
    <section className="my-10">
      <H3>{events.length} Eventi passati</H3>
      {events.map((event) => (
        <Event key={`event-${event.title}`} event={event} />
      ))}
    </section>
  );
}
