import H1 from "../../Heading/H1";
import EventIntro from "./EventIntro";
import NextEvent from "./NextEvent";
import PastEvents from "./PastEvents";

export default function Events() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-36">
      <H1>Eventi di firenze.dev</H1>
      <NextEvent />
      <EventIntro />
      <hr className="my-8"></hr>
      <NextEvent />
      <hr className="my-8"></hr>
      <PastEvents />
    </main>
  );
}
