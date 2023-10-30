import Head from "next/head";
import Events from "../components/Pages/Events/Events";

const description =
  "Eventi per programmatori a Firenze, organizzati dalla community di svilupaptori firenze.dev. Scopri i nostri eventi per svilupaptori";


export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Eventi - firenze.dev</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
      </Head>
      <Events />
    </>
  );
}
