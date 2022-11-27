import Head from "next/head";
import Contacts from "../components/Pages/Contacts/Contacts";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contatta firenze.dev</title>
      </Head>
      <Contacts />
    </>
  );
}
