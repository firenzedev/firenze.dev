import register from "./registerit_logo.png";
import extendi from "./extendi_logo.svg";
import gucci from "./gucci-logo.png";
import _42firenze from "./42firenze.png";
import seacom from "./seacom.png";
import frameSchool from "./frame-school-logo.png";
import Image from "next/image";
import { H3 } from "@/components/ui/Heading";
const sponsors = [
  {
    name: "Register.it",
    link: "https://register.it",
    logo: register,
  },
  {
    name: "Extendi",
    link: "https://extendi.it",
    logo: extendi,
  },
  {
    name: "Gucci",
    link: "https://www.gucci.com",
    logo: gucci,
  },
  {
    name: "Frame school",
    link: "https://www.frameschool.net/",
    logo: frameSchool,
  },
  {
    name: "42 Firenze",
    link: "https://42firenze.it/",
    logo: _42firenze,
  },
  {
    name: "Seacom",
    link: "https://seacom.it/",
    logo: seacom,
  },
];

export default function PastSponsors() {
  return (
    <section className="mb-8 text-center">
      <H3>I Nostri Sponsor Passati: Partner nella Crescita e Innovazione</H3>
      <p className="text-left my-6">
        Unisciti a chi ha già scommesso sul futuro. I nostri sponsor passati non
        solo hanno supportato i nostri eventi, ma hanno anche abbracciato
        un&apos;opportunità unica per posizionarsi come leader nel settore
        tecnologico. Sponsorizzare firenze.dev significa entrare a far parte di
        una rete esclusiva di innovatori e professionisti, contribuendo
        attivamente alla crescita di un ecosistema tech in continua evoluzione.
        La tua azienda merita di essere parte di questa storia di successo.
      </p>
      <div className="flex flex-col xl:flex-row justify-center items-center">
        {sponsors.map((sponsor) => (
          <a
            href={sponsor.link}
            target="_blank"
            key={`sponsor-${sponsor.name}`}
            className="m-4 dark:shadow p-2 rounded"
            rel="noreferrer"
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={128}
              priority
            />
          </a>
        ))}
      </div>
    </section>
  );
}
