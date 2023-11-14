import { H3 } from "@/components/ui/Heading";
import Event from "./Event";
import { eventService } from "../lib/EventService";

export default function NextEvents() {
  const nextEvents = eventService.getNextEvents();
  if (!nextEvents) {
    return null;
  }
  return (
    <section className="my-6 shadow-md p-2 bg-slate-50">
      <H3>I prossimi eventi</H3>
      {nextEvents.map((event) => (
        <Event key={`event-${event.title}`} event={event} />
      ))}
    </section>
  );
}
