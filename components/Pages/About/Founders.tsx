import Image from "next/image";
import H2 from "../../Heading/H2";
import H3 from "../../Heading/H3";
import quoteImage from "./images/quote_open.svg";
import tiziano from "./images/tiziano-300x300.jpg";
import lorenzo from "./images/lorenzo-300x300.png";

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
      "Fullstack, scrivo codice ormai da circa un migliaio di anni. Cerco di farlo il più “clean” possibile (ma ho ancora tanta strada da fare). Mi piace fare domande e scoprire come funzionano davvero le cose. Ma soprattto condividere le cose che imparo con gli altri. Sono convinto che il mondo (dello sviluppo) possa diventare un posto migliore. Fuori dal lavoro potete incontrarmi a rincorrere i miei figli o su qualche tavola da surf, snowboard o skateboard.",
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
}: {
  founder: FounderProps;
  reverse: boolean;
}) {
  return (
    <div
      id={founder.anchor}
      className={
        "lg:flex border-b-2 py-8 " + (reverse ? "flex-row-reverse" : "")
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
