import H2 from "../../Heading/H2";
import EventIntro from "./EventIntro";
import NextEvent from "./NextEvent";
import PastEvents from "./PastEvents";

export default function Events() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-36">
      <H2>Eventi di firenze.dev</H2>
      <NextEvent />
      <EventIntro />
      <hr className="my-8"></hr>
      <NextEvent />
      <hr className="my-8"></hr>
      <PastEvents />
    </main>
  );
}

