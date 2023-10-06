import Image from "next/image";
import H1 from "../../Heading/H1";
import H2 from "../../Heading/H2";
import nftBadge from "./nft-badge.webp"

export default function Nft() {
  return (
    <main className="mx-auto p-2 py-6 max-w-[800px]">
      <header className="md:flex md:items-center">
        <Image src={nftBadge} alt="nft badge" width={256} height={256} />
        <H1>
          NFT di firenze.dev
        </H1>
      </header>

      <section className="my-6 py-8 shadow-lg p-4">
        <H2 className="mb-6">
          Cos&apos;è un NFT di firenze.dev?
        </H2>
        <p>
          firenze.dev offre agli partecipanti agli eventi la possibilità di
          ricevere un NFT unico come badge di partecipazione. Gli NFT, o{" "}
          <em>Non-Fungible Tokens</em>, sono asset digitali basati su blockchain
          che rappresentano la tua partecipazione a un evento specifico
          organizzato da noi.
        </p>
      </section>

      <section className="my-6 py-8 shadow-lg p-4">
      <H2 className="mb-6">
          Come ottenere il tuo NFT
        </H2>
        <p>Per ricevere il tuo NFT di partecipazione, segui questi passaggi:</p>
        <ol className="list-inside list-decimal">
          <li>
            Invia una mail a{" "}
            <a href="mailto:nft@firenze.dev">nft@firenze.dev</a>.
          </li>
          <li>
            Includi nell&apos;email il tuo indirizzo del wallet, ad
            esempio, creato con Metamask.
          </li>
          <li>
            Riceverai il tuo NFT una volta verificata la tua partecipazione
            all&apos;evento.
          </li>
        </ol>
      </section>

      <section className="my-6 py-8 shadow-lg p-4">
      <H2 className="mb-6">
          Altri NFT e Collezionismo
        </H2>
        <p>
          Oltre ai badge di partecipazione, firenze.dev rilascerà
          occasionalmente altri NFT che potrai collezionare. Questi NFT saranno
          oggetto di premi speciali.
        </p>
      </section>
    </main>
  );
}
