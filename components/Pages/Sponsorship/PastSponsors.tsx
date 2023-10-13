import H3 from "../../Heading/H3";
import register from "./registerit_logo.png";
import extendi from "./extendi_logo.svg";
import gucci from "./gucci-logo.png";
import frameSchool from "./frame-school-logo.png";
import Image from "next/image";
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
];

export default function PastSponsors() {
  return (
    <section className="mb-8 text-center">
      <H3>Sponsor passati</H3>
      <div className="flex justify-center">
        {sponsors.map((sponsor) => (
          <a
            href={sponsor.link}
            target="_blank"
            key={`sponsor-${sponsor.name}`}
            className="m-4"
            rel="noreferrer"
          >
            <Image
              src={sponsor.logo}
              alt={`${sponsor.name} logo`}
              width={128}
              height={20}
              priority
            />
          </a>
        ))}
      </div>
    </section>
  );
}
