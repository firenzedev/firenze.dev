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
    image: dario,
  },
  {
    anchor: "riccardo",
    name: "Riccardo Figliozzi",
    email: "riccardo@firenze.dev",
    linkedin: "https://www.linkedin.com/in/riccardo-figliozzi/",
    image: riccardo,
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
