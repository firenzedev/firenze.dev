import Image from "next/image";
import brain from "./icons/brain.svg";
import graduate from "./icons/graduate.svg";
import group from "./icons/group-1.svg";
import help from "./icons/help.svg";
import idea from "./icons/idea.svg";
import knowledge_transfer from "./icons/knowledge_transfer.svg";
import { H3 } from "@/components/ui/Heading";

const goals = [
  {
    icon: idea,
    text: "Promuovere lo scambio di idee e le discussioni costruttive, in un ambiente amichevole e stimolante",
  },
  {
    icon: brain,
    text: "Diffondere la conoscenza per migliorare se stessi e gli altri",
  },
  {
    icon: graduate,
    text: "Consolidare l'importanza della professionalità nel mondo dello sviluppo",
  },
  {
    icon: group,
    text: "Creare un punto di aggregazione per gli sviluppatori legati a Firenze e al suo territorio",
  },
  {
    icon: knowledge_transfer,
    text: "Essere un solido riferimento per i programmatori più giovani (mentoring)",
  },
  {
    icon: help,
    text: "Fornire il supporto di un intero gruppo di professionisti per risolvere problemi legati allo sviluppo",
  },
];

export default function Goals() {
  return (
    <section className="my-8 p-2 lg:p-8 shadow-md bg-slate-100">
      <H3>I nostri obiettivi</H3>
      <ul>
        {goals.map((goal, index) => (
          <li
            key={`community-goal-${index}-${goal}`}
            className="flex items-center"
          >
            <Image
              src={goal.icon}
              alt={"community goal"}
              aria-hidden
              width={100}
              height={100}
            />
            <span>{goal.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
