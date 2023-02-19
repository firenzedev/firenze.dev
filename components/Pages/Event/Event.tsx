import {
  MegaphoneIcon,
  MicrophoneIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { EventType } from "../../../events/EventService";
import H1 from "../../Heading/H1";
import H2 from "../../Heading/H2";
import H3 from "../../Heading/H3";
import ReactMarkdown from "react-markdown";
import Register from "./Register";

export default function Event({ event }: { event: EventType }) {
  return (
    <div>
      <script
        src="https://www.eventbrite.it/static/widgets/eb_widgets.js"
        id="eventbrite-import-script"
        type="text/javascript" async
      ></script>
      <div className="lg:border">
        <Image src={event.image} alt={event.title} width={1120} height={560} />
      </div>
      <div className="mt-8 p-2">
        <H1>{event.title}</H1>
        <p>{event.subtitle}</p>
      </div>
      <div className="mt-8 p-2">
        <p className="text-xl font-semibold">
          {dayjs(event.date).format("DD MMMM, ore HH:mm")}
        </p>
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
      </div>
      {!isPast(event.date) && (
        <div className="my-8 text-center">
          <Register
            eventId={event.eventbriteId}
            eventLink={event.eventbriteLink}
          />
        </div>
      )}
      <hr className="my-8"></hr>
      <section className="p-2">
        <H2>{event.title}</H2>
        <ReactMarkdown className="my-4 leading-7">
          {event.abstract}
        </ReactMarkdown>
      </section>
      <hr className="my-8"></hr>
      {!isPast(event.date) && (
        <div className="my-8 text-center">
          <Register
            eventId={event.eventbriteId}
            eventLink={event.eventbriteLink}
          />
        </div>
      )}
      <section className="px-2">
        <H3>Programma dell&apos;evento</H3>

        {!isPast(event.date) && (
          <div>
            <p className="bg-yellow-300 text-center lg:mx-36 text-xl">
              Per la partecipazione è obbligatoria l&apos;iscrizione.
            </p>

            <p className="text-center my-8">
              I posti sono limitati, affrettati a prendere il tuo biglietto
              gratuito
            </p>
          </div>
        )}

        <div>
          <EventProgramStep
            time="18:30 - 18:45"
            text="Accoglienza e sistemazione"
            Icon={RocketLaunchIcon}
          />
          <EventProgramStep
            time="18:45 - 19:00"
            text={`Opening by firenze.dev ${
              event.sponsor ? "& " + event.sponsor : ""
            }`}
            Icon={MicrophoneIcon}
          />
          <EventProgramStep
            time="19:00 - 20:00"
            text={`Talk: ${event.title}`}
            Icon={MegaphoneIcon}
          />
          <EventProgramStep
            time="20:00 - 20:15"
            text="Q&A e chisura"
            Icon={QuestionMarkCircleIcon}
          />
          <EventProgramStep
            time="20:15"
            text={`Networking e aperitivo ${
              event.sponsor ? "offerto da " + event.sponsor : ""
            }`}
            Icon={ChatBubbleLeftRightIcon}
            last
          />
        </div>
      </section>
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
      {!isPast(event.date) && (
        <div className="my-8 text-center">
          <Register
            eventId={event.eventbriteId}
            eventLink={event.eventbriteLink}
          />
        </div>
      )}
    </div>
  );
}

function isPast(eventDate: Date): boolean {
  return dayjs().isAfter(eventDate);
}

function EventProgramStep({
  time,
  text,
  Icon,
  last,
}: {
  time: string;
  text: string;
  Icon: React.FC<React.ComponentProps<"svg">>;
  last?: boolean;
}) {
  return (
    <div className="relative">
      {!last && (
        <div className="absolute left-7 top-14 h-14 w-[1px] bg-blue-800"></div>
      )}
      <div className="flex mb-8 relative">
        <div className="flex justify-center items-center border-2 border-blue-800 rounded-full w-14 h-14 bg-white">
          <Icon className="w-10 h-10 text-orange-900 font-extrabold " />
        </div>
        <div className="ml-4">
          <h4 className="font-bold text-xl">{time}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
