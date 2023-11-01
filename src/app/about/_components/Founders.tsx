import Image from "next/image";
import quoteImage from "./images/quote_open.svg";
import tiziano from "./images/tiziano-300x300.jpg";
import lorenzo from "./images/lorenzo-300x300.png";
import github from "./images/github.svg";
import medium from "./images/medium.svg";
import linkedin from "./images/linkedin.svg";
import email from "./images/email.svg";
import { H2, H3 } from "@/components/ui/Heading";

const founders = [
  {
    anchor: "tiziano",
    name: "Tiziano Pessa",
    intro:
      "Full stack developer, lavoro in questo settore da diversi anni, ma sono ancora appassionato e curioso come il primo giorno. Sono un corridore amatoriale, amo viaggiare e leggere. Mi piace scoprire come funzionano gli ingranaggi nascosti dietro ogni meccanismo e non mi stanco mai di imparare cose nuove. Ah, e naturalmente non rifiuto mai una birra con gli amici!",
    github: "https://github.com/pixel13",
    linkedin: "https://www.linkedin.com/in/tizianopessa/",
    medium: "https://medium.com/@tizianopessa",
    email: "tiziano@firenze.dev",
    image: tiziano,
  },
  {
    anchor: "lorenzo",
    name: "Lorenzo Spinelli",
    intro:
      "Fullstack, scrivo codice ormai da circa un migliaio di anni. Cerco di farlo il più “clean” possibile (ma ho ancora tanta strada da fare). Mi piace fare domande e scoprire come funzionano davvero le cose. Ma sopratutto condividere le cose che imparo con gli altri. Sono convinto che il mondo (dello sviluppo) possa diventare un posto migliore. Fuori dal lavoro potete incontrarmi a rincorrere i miei figli o su qualche tavola da surf, snowboard o skateboard.",
    github: "https://github.com/spyna",
    linkedin: "https://www.linkedin.com/in/lorenzospinelli/",
    medium: "https://medium.com/@spyna",
    email: "lorenzo@firenze.dev",
    image: lorenzo,
  },
];

export default function Founders() {
  return (
    <section className="my-16">
      <H2>I fondatori di firenze.dev</H2>
      <hr></hr>
      {founders.map((founder, i) => (
        <Founder
          key={`founder-${founder.name}`}
          founder={founder}
          reverse={i === 1}
        />
      ))}
    </section>
  );
}

interface FounderProps {
  name: string;
  intro: string;
  github: string;
  linkedin: string;
  medium: string;
  email: string;
  image: any;
  anchor: string;
}

function Founder({
  founder,
  reverse,
}: Readonly<{
  founder: FounderProps;
  reverse: boolean;
}>) {
  const imageSize = 48;
  return (
    <div
      id={founder.anchor}
      className={
        "lg:flex flex-wrap border-b-2 py-6 " +
        (reverse ? "flex-row-reverse" : "")
      }
    >
      <div className="lg:w-3/4">
        <H3>{founder.name}</H3>
        <div>
          <div className="inline-flex">
            <Image
              src={quoteImage}
              alt="Quote open"
              width={60}
              height={48}
              className="inline"
            />
          </div>
          <p className="italic inline-flex text-black">{founder.intro}</p>
          <div className="flex space-x-3 mt-4">
            <a href={founder.github} target="_blank" rel="noreferrer">
              <Image
                decoding="async"
                src={github}
                alt="github"
                width={imageSize}
                height={imageSize}
              />
            </a>

            <a href={founder.linkedin} target="_blank" rel="noreferrer">
              <Image
                decoding="async"
                src={linkedin}
                alt="linkedin"
                width={imageSize}
                height={imageSize}
              />
            </a>

            <a href={founder.medium} target="_blank" rel="noreferrer">
              <Image
                decoding="async"
                src={medium}
                alt="medium"
                width={imageSize}
                height={imageSize}
              />
            </a>

            <a href={"mailto:" + founder.email}>
              <Image
                decoding="async"
                src={email}
                alt="medium"
                width={imageSize}
                height={imageSize}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 p-2">
        <Image
          src={founder.image}
          alt={founder.name}
          width={300}
          height={300}
          className="inline"
        />
      </div>
    </div>
  );
}
