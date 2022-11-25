import H4 from "../../Heading/H4";
import Image from "next/image";
import gruspIcon from "./icons/grusp-logo.svg";
import codemotionIcon from "./icons/codemotion.svg";

const partners = [
  {
    name: "Grusp",
    url: "https://grusp.org/",
    icon: gruspIcon,
  },
  {
    name: "Codemotion",
    url: "https://community.codemotion.com/firenze.dev",
    icon: codemotionIcon,
  },
];

export default function Partners() {
  return (
    <div className="bg-slate-100 p-4">
      <H4>Partners</H4>
      {partners.map((partner) => (
        <span key={`partner-${partner.name}`}>
          <a
            href={partner.url}
            title={`${partner.name}`}
            className="inline-block m-4"
            target="_blank"
            rel="noreferrer"
          >
            <Image src={partner.icon} height={50} alt={`${partner.name}`} />
          </a>
        </span>
      ))}
    </div>
  );
}
