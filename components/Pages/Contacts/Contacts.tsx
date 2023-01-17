import H1 from "../../Heading/H1";

export default function Contacts() {
  return (
    <main className="container mx-auto p-2 pt-6 lg:px-56">
      <H1>Contatta firenze.dev</H1>
      <p className="py-8">
        Puoi scriverci qualsiasi qualcosa, saremo molto felici di leggere e ti
        risponderemo appena possiamo
      </p>
      <p className="py-2">
        Puoi contattare la community di firenze.dev all&apos;indirizzo{" "}
        <a href="mailto:hello@firenze.dev">hello@firenze.dev</a>.
      </p>
      <p className="py-2">
        Puoi scriverci anche sul{" "}
        <a href="https://discord.com/invite/DJ5gpQtqMH">
          discord della community
        </a>
        .
      </p>
    </main>
  );
}
