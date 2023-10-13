import Image from "next/image";
import H1 from "../../Heading/H1";
import H2 from "../../Heading/H2";
import nftBadge from "./nft-badge.webp";
import H3 from "../../Heading/H3";

export default function Nft() {
  return (
    <main className="mx-auto p-2 py-6 lg:max-w-[1100px]">
      <header className="flex flex-col lg:flex-row items-center justify-center">
        <Image src={nftBadge} alt="nft badge" width={256} height={256} />
        <H1>NFT di firenze.dev</H1>
      </header>
      <div className="lg:flex">
        <div className="hidden lg:block lg:w-1/4 p-1 mr-4">
          <ul className="list-disc list-inside">
            {sections.map((section) => (
              <li key={`link-${section.id}`}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-3/4 break-words">
          {sections.map((section) => (
            <Section key={section.id} title={section.title} id={section.id}>
              {section.content}
            </Section>
          ))}
        </div>
      </div>
    </main>
  );
}

function Section({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="my-6 py-8 shadow-lg p-4">
      <H2 className="mb-6">{title}</H2>
      {children}
    </section>
  );
}

const sections = [
  {
    title: "Cos'è un NFT di firenze.dev?",
    id: "what",
    content: (
      <>
        <p>
          firenze.dev offre a chi partecipa agli eventi la possibilità di
          ricevere un NFT unico come badge di partecipazione. Gli NFT, o{" "}
          <em>Non-Fungible Tokens</em>, sono asset digitali basati su blockchain
          che rappresentano la tua partecipazione a un evento specifico
          organizzato dalla community.
        </p>
        <H3>Dove li vedo?</H3>
        <p>
          Gli NFT di firnze.dev possono essere visualizzati su qualsiasi
          marketplace di NFT o importati su Metamask, ad esempio su opensea puoi
          vedere la collezione completa:{" "}
          <a
            href="https://opensea.io/collection/firenze-dev-badges"
            target="_blank"
            rel="noreferrer"
          >
            https://opensea.io/collection/firenze-dev-badges
          </a>
          .
        </p>
        <p className="mt-2">
          Se invece ti interessa il codice sorgente o vuoi maggiori dettagli
          sulle transazioni e altre cose da Nerd, puoi visualizzare lo smart
          contract su Polygonscan:{" "}
          <a
            href="https://polygonscan.com/address/0xeafae6bf2423dfc31b3bcff72ad637a14195608f"
            target="_blank"
            rel="noreferrer"
          >
            https://polygonscan.com/address/0xeafae6bf2423dfc31b3bcff72ad637a14195608f
          </a>
          .
        </p>
      </>
    ),
  },
  {
    title: "Come ottenere il tuo NFT",
    id: "how",
    content: (
      <>
        <p>Per ricevere il tuo NFT di partecipazione, segui questi passaggi:</p>
        <ol className="list-inside list-decimal">
          <li>
            Invia una mail a{" "}
            <a href="mailto:nft@firenze.dev">nft@firenze.dev</a>.
          </li>
          <li>
            Includi nell&apos;email il tuo nome e l&apos;indirizzo del tuo
            wallet (se non ne possiedi uno, puoi crearlo in pochi secondi, ad
            esempio utilizzando MetaMask).
          </li>
          <li>
            Riceverai il tuo NFT una volta verificata la tua partecipazione
            all&apos;evento.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "Altri NFT e Collezionismo",
    id: "other",
    content: (
      <p>
        Oltre ai badge di partecipazione, firenze.dev rilascerà occasionalmente
        altri NFT che potrai collezionare. Questi NFT daranno accesso a risorse
        esclusive dedicate ai nostri membri più attivi.
      </p>
    ),
  },
  {
    title: "Posso vendere o scambiare i miei NFT?",
    id: "buy-sell",
    content: (
      <p>
        Abbiamo pensato agli NFT di firenze.dev come dei badge personali. Per
        questo abbiamo previsto nello smart contract che non possono essere
        scambiati o venduti. Se sei interessato a comprare o vendere NFT, puoi
        farlo con qualsiaso altro 😊.
      </p>
    ),
  },
];
