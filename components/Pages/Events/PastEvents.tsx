import {eventService} from "../../../events/EventService";
import H3 from "../../Heading/H3";
import Event from "./Event";




export default function PastEvents() {
  return (
    <section className="my-10">
      <H3>Eventi passati</H3>
      {eventService.getPastEvents().map((event) => (
        <Event key={`event-${event.title}`} event={event} />
      ))}
    </section>
  );
}
