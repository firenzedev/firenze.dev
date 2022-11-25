import Head from "next/head";
import Homepage from "../components/Pages/Homepage/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>firenze.dev - La community degli sviluppatori a Firenze</title>
      </Head>
      <Homepage />
    </>
  );
}
