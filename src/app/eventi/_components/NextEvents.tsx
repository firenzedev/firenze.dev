import { H3 } from "@/components/ui/Heading";
import Event from "./Event";
import { eventService } from "../lib/EventService";

export default function NextEvents(props: { disableBox?: boolean }) {
  const nextEvents = eventService.getNextEvents();
  if (nextEvents.length === 0) {
    return null;
  }
  return (
    <section
      className={
        props.disableBox ? `pt-1` : `shadow-md my-5 px-5 pt-1 bg-slate-50 dark:bg-slate-800`
      }
    >
      <H3>
        {nextEvents.length === 1 ? "Prossimo evento" : "I Prossimi eventi"}
      </H3>
      {nextEvents.map((event) => (
        <Event key={`event-${event.title}`} event={event} />
      ))}
    </section>
  );
}
