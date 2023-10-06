import Head from "next/head";
import Nft from "../components/Pages/Nft/Nft";

export default function NftPage() {
  return (
    <>
      <Head>
        <title>Gli NFT di firenze.dev</title>
        <meta
          name="description"
          content="Scopri gli NFT di firenze.dev, token unici basati su blockchain, che fungono da badge di partecipazione agli eventi. Ottieni il tuo NFT inviando una mail con il tuo indirizzo wallet a nft@firenze.dev. Colleziona NFT speciali e partecipa ai premi esclusivi."
        />
      </Head>
      <Nft />
    </>
  );
}
