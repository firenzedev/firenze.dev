import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Link from "next/link";
import Event from "../../components/Pages/Event/Event";
import { eventService } from "../../events/EventService";

interface EventPageProps {
  title: string;
  id: string;
}

export default function EventPage({ title, id }: EventPageProps) {
  const event = eventService.getEvent(id);

  return (
    <>
      <Head>
        <title>Evento: {title} - firenze.dev</title>
      </Head>
      <main className="container mx-auto lg:pt-6 lg:px-44">
        {!event && <div className="lg:p-6 p-2">Non siamo riusciti a trovare questo evento <Link href="/eventi">Torna agli eventi</Link></div>}
        {event && <Event event={event} />}
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const eventSlug = context.params?.id;
  const event = eventService.getEvent(eventSlug as string);
  return {
    props: { title: event?.title, id: eventSlug },
  };
}
