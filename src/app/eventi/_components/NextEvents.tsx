import { H3 } from "@/components/ui/Heading";
import Event from "./Event";
import { eventService } from "../lib/EventService";

export default function NextEvents() {
  const nextEvent = eventService.getNextEvent();
  if (!nextEvent) {
    return null;
  }
  return (
    <section className="my-6 shadow-md p-2 bg-slate-50">
      <H3>I prossimi eventi</H3>
      <Event event={nextEvent} />
    </section>
  );
}
