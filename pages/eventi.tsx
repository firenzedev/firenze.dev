import Head from "next/head";
import Events from "../components/Pages/Events/Events";
import { eventService } from "../events/EventService";

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Eventi - firenze.dev</title>
      </Head>
      <Events />
    </>
  );
}
