import Image from "next/image";
import eventImage from "./images/eventi.webp";
import { H1 } from "@/components/ui/Heading";
import NextEvents from "./NextEvents";

export function EventHero() {
  return (
    <section className="lg:grid grid-cols-2 items-cente bg-slate-100">
      <div className="flex">
        <Image
          src={eventImage}
          alt="firenze.dev eventi"
          width={1024}
          height={627}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-8">
        <H1>Eventi di firenze.dev</H1>
        <NextEvents disableBox />
      </div>
    </section>
  );
}
