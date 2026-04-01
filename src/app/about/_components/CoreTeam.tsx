import riccardo from "./images/riccardo.jpeg";
import dario from "./images/dario.jpeg";
import michele from "./images/michele.jpeg";
import mino from "./images/mino.jpeg";
import matteo from "./images/matteo.jpg";
import { H2 } from "@/components/ui/Heading";
import Member from "./Member";

const coreTeam = [
  {
    anchor: "dario",
    name: "Dario Pinzanuti",
    email: "dario@firenze.dev",
    linkedin: "https://www.linkedin.com/in/dario-pinzauti-developer/",
    github: "https://github.com/Dario-Pinzauti",
    intro:
      "Sviluppatore backend (ex full stack, ma ognuno ha un passato di cui non va fiero). Da circa 8 anni passo le giornate a smanettare, rompere cose e fingere di sapere come sistemarle. Quando non scrivo codice, probabilmente sto giocando a qualcosa o cercando un nuovo film o una serie da vedere.",
    image: dario,
  },
  {
    anchor: "riccardo",
    name: "Riccardo Figliozzi",
    email: "riccardo@firenze.dev",
    linkedin: "https://www.linkedin.com/in/riccardo-figliozzi/",
    image: riccardo,
    intro:
      "Ho fatto il liceo scientifico con indirizzo informatico dove, in cinque anni, ho totalizzato la bellezza di un’ora di programmazione in Visual Basic. Dopo un primo approccio al marketing e la comunicazione, ho deciso di tuffarmi in Data Science e Machine Learning, principalmente per espiare i peccati di ignoranza del liceo. Ho sempre avuto la passione per i dati e l'automazione per due motivi onesti: mi permette di esercitare il mio talento naturale nel rompere le palle e asseconda la mia pigrizia cronica, visto che automatizzo qualunque cosa mi annoi. Oltre ad occuparmi di formazione in ambito AI e ML, nel tempo libero suono, leggo e coltivo il nobile hobby di sviluppare idee geniali che, ovviamente, non vedranno mai la luce in produzione.",
  },
  {
    anchor: "michele",
    name: "Michele Palamidessi",
    email: "michele@firenze.dev",
    linkedin: "https://www.linkedin.com/in/palamidessimichele/",
    image: michele,
  },
  {
    anchor: "matteo",
    name: "Matteo Domenici",
    email: "matteo@firenze.dev",
    linkedin: "https://www.linkedin.com/in/matteo-domenici/",
    image: matteo,
    intro:
      "Sviluppatore fullstack, lavoro in questo ambito da più di 10 anni (sigh). Ho iniziato a esplorare il mondo informatico ai tempi del 386 e, per connettermi a internet la prima volta, ho usato un floppy disk regalato da Topolino! Mi occupo sia di front-end che di back-end, sempre con l’obiettivo di scrivere codice pulito e ben strutturato. Oltre al coding, ho una grande passione per la musica e per i Lego!",
  },
  {
    anchor: "mino",
    name: "Pierdomenico Reitano (Mino)",
    email: "mino@firenze.dev",
    linkedin: "https://www.linkedin.com/in/pierdomenico-reitano/",
    github: "https://github.com/mino89",
    intro:
      "Mi guadagno da vivere facendo lo sviluppatore frontend, se c'è bisogno non mi faccio problemi a mettere le mani anche sul backend. Ho mosso i miei primi passi sul web customizzando la pagina myspace per la mia band, ricordo con nostalgia quel delirio di <table> e <font>. Quando non sono davanti al computer ad imprecare contro il codice legacy, mi piace immergermi in campage di D&D, giocare a videogame e fare dei lunghi trekking in montagna.",
    image: mino,
  },
];

export default function CoreTeam() {
  return (
    <section className="my-16 md:px-0 px-4">
      <H2 className="text-center md:text-start mb-2">Il Core Team</H2>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {coreTeam.map((member) => (
          <Member key={`core-${member.name}`} member={member} column />
        ))}
      </div>
    </section>
  );
}
