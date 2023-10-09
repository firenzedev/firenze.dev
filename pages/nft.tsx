import Head from "next/head";
import Nft from "../components/Pages/Nft/Nft";
import nftBadge from "../components/Pages/Nft/nft-badge.webp";

const title = "Gli NFT di firenze.dev";
const description =
  "Scopri gli NFT di firenze.dev, token unici basati su blockchain, che fungono da badge di partecipazione agli eventi. Ottieni il tuo NFT inviando una mail con il tuo indirizzo wallet a nft@firenze.dev. Colleziona NFT speciali e partecipa ai premi esclusivi.";

export default function NftPage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="firenze.dev" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={nftBadge.src} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@firenzeDev" />
        <meta name="twitter:creator" content="@firenzeDev" />
        <meta name="twitter:image" content={nftBadge.src} />
        <meta name="twitter:title" content={title}></meta>
        <meta name="twitter:description" content={description} />
        <meta name="twitter:label1" content="Tempo di lettura stimato" />
        <meta name="twitter:data1" content="1 minuti" />
      </Head>
      <Nft />
    </>
  );
}
