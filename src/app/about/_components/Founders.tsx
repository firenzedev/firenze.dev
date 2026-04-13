import lorenzo from "./images/lorenzo-300x300.png";
import tiziano from "./images/tiziano-300x300.jpg";

import { H2 } from "@/components/ui/Heading";
import Member from "./Member";

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
    <section className="my-16 md:px-0 px-4">
      <H2 className="mb-2">I fondatori di firenze.dev</H2>
      <hr></hr>
      {founders.map((founder, i) => (
        <Member
          key={`founder-${founder.name}`}
          member={founder}
          reverse={i === 1}
        />
      ))}
    </section>
  );
}
