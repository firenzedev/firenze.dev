import { eventService } from "../../../events/EventService";
import H3 from "../../Heading/H3";
import Event from "./Event";

export default function NextEvent() {
  const nextEvent = eventService.getNextEvent();
  if (!nextEvent) {
    return null;
  }
  return (
    <section className="my-6 shadow-md p-2 bg-slate-50">
      <H3>Il prossimo evento</H3>
      <Event event={nextEvent} />
    </section>
  );
}
