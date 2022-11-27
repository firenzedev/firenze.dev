import H1 from "../../Heading/H1";

export default function Contacts() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-56">
      <H1>Contatta firenze.dev</H1>
      <p className="py-8">
        Puoi contattare la community di firenze.dev all&apos;indirizzo{" "}
        <a href="mailto:hello@firenze.dev">hello@firenze.dev</a> oppure
        inviandoci un messaggio tramite questo form. O se preferisci tramite i
        nosti canali social.
      </p>
    </main>
  );
}
