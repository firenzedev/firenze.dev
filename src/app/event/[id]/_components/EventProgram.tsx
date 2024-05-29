import { FDevEvent } from "@/app/eventi/lib/EventService";
import {
  MegaphoneIcon,
  MicrophoneIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  UsersIcon
} from "@heroicons/react/24/solid";
import dayjs from "dayjs";

interface Props {
  event: FDevEvent;
}

export default function EventProgram({ event }: Readonly<Props>) {
  return (
    <div>
      {event.type !== "beer" && (
        <EventProgramStep
          time="18:30 - 18:45"
          text="Accoglienza e sistemazione"
          Icon={RocketLaunchIcon}
        />
      )}
      {event.type === "beer" && ( <EventProgramStep
          time={dayjs(event.date).format("HH:mm") + " - ?"}
          text={`${event.title}`}
          Icon={UsersIcon}
          last
        />)}
      {event.type === "meetup" && (
        <>
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
        </>
      )}
      {event.type === "workshop" && (
        <EventProgramStep
          time="18:45 - 20:45"
          text={event.title}
          Icon={WrenchScrewdriverIcon}
          last
        />
      )}
    </div>
  );
}

function EventProgramStep({
  time,
  text,
  Icon,
  last,
}: Readonly<{
  time: string;
  text: string;
  Icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref">
  >;
  last?: boolean;
}>) {
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
