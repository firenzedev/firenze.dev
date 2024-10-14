import dayjs from "dayjs";
import "dayjs/locale/it";
import Image from "next/image";
import React from "react";
import ReactMarkdown from "react-markdown";
import Register from "./Register";
import Script from "next/script";
import EventProgram from "./EventProgram";
import { H1, H3 } from "@/components/ui/Heading";
import { FDevEvent } from "@/app/eventi/lib/EventService";
dayjs.locale("it");

export default function Event({ event }: Readonly<{ event: FDevEvent }>) {
  return (
    <div>
      <Script
        src="https://www.eventbrite.it/static/widgets/eb_widgets.js"
        id="eventbrite-import-script"
        type="text/javascript"
        async
      ></Script>
      <Script
        src="https://cdn.tickettailor.com/js/TTWidget.js"
        id="tickettailor-import-script"
        type="text/javascript"
        async
      ></Script>
      <div className="lg:border">
        <Image
          quality={90}
          src={event.image}
          alt={event.title}
          width={1120}
          height={560}
        />
      </div>
      <div className="mt-8 p-2">
        <H1>{event.title}</H1>
        <p>{event.subtitle}</p>
      </div>
      <div className="mt-8 p-2">
        <p className="text-xl font-semibold">
          {dayjs(event.date).format("DD MMMM, ore HH:mm")}
        </p>
        {event.place && (
          <p>
            L&apos;evento inizierà alle {dayjs(event.date).format("HH:mm")} e si
            terrà presso{" "}
            <a
              className="text-blue-800"
              title="View on google maps"
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/search/${event.place} ${event.address}`}
            >
              {event.place}, in {event.address}
            </a>
          </p>
        )}
      </div>
      {!isPast(event.date) && event.type !== "cfp" && (
        <div className="my-8 text-center">
          <Register
            eventId={event.eventbriteId}
            eventLink={event.eventbriteLink}
            externalLink={event.externalLink}
            ticketTailorId={event.ticketTailorId}
            buttonNumber={1}
          />
        </div>
      )}
      <hr className="my-8"></hr>
      <section className="p-2">
        <ReactMarkdown className="my-4 prose lg:prose-lg max-w-none">
          {event.abstract}
        </ReactMarkdown>
      </section>
      {!isPast(event.date) && event.type !== "cfp" && (
        <div className="my-8 text-center">
          <Register
            eventId={event.eventbriteId}
            eventLink={event.eventbriteLink}
            externalLink={event.externalLink}
            ticketTailorId={event.ticketTailorId}
            buttonNumber={2}
          />
        </div>
      )}
      {event.type !== "cfp" && (
        <>
          <hr className="my-8"></hr>
          <section className="px-2 text-center">
            <H3>Programma dell&apos;evento</H3>

            {!isPast(event.date) && (
              <div>
                <p className="bg-yellow-300 p-2 rounded-2xl text-center lg:mx-36 text-xl">
                  Per la partecipazione è obbligatoria l&apos;iscrizione.
                </p>

                <p className="text-center my-8">
                  I posti sono limitati, affrettati a prendere il tuo biglietto
                  gratuito
                </p>
              </div>
            )}
            <EventProgram event={event} />
          </section>
        </>
      )}
      <hr className="mt-8"></hr>
      <p className="px-2 my-8">
        Se hai qualsiasi domanda, dubbio, proposta o feedback siamo lieti di
        ascoltarti, puoi inviarci una mail a{" "}
        <a className="text-blue-800 underline" href="mailto:hello@firenze.dev">
          hello@firenze.dev
        </a>
        , scriverci sul{" "}
        <a
          href="https://discord.com/invite/DJ5gpQtqMH"
          target="_blank"
          rel="noreferrer"
          className="text-blue-800 underline"
        >
          canale discord
        </a>{" "}
        oppure organizzare una call. O anche tutti e tre, ci fa molto piacere
        sentirti e risponderti.
      </p>
      {!isPast(event.date) && event.type !== "cfp" && (
        <div className="my-8 text-center">
          <Register
            eventId={event.eventbriteId}
            eventLink={event.eventbriteLink}
            externalLink={event.externalLink}
            ticketTailorId={event.ticketTailorId}
            buttonNumber={3}
          />
        </div>
      )}
    </div>
  );
}

function isPast(eventDate: Date): boolean {
  return dayjs().isAfter(eventDate);
}
