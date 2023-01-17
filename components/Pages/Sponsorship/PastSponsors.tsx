import H3 from "../../Heading/H3";

const sponsors = [
  { name: "Register.it", link: "https://register.it", events: 3 },
  { name: "Extendi", link: "https://extendi.it", events: 2 },
];

export default function PastSponsors() {
  return (
    <section>
      <H3>Sponsor passati</H3>
      <ul className="list-inside list-disc">
        {sponsors.map((sponsor) => (
          <li key={`sponsor-${sponsor.name}`}>
            <a href={sponsor.link} target="_blank" rel="noreferrer">
              {sponsor.name}
            </a>
            : {sponsor.events} eventi
          </li>
        ))}
      </ul>
    </section>
  );
}
