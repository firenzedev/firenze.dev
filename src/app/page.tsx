import Community from "./_components/Community/Community";
import HeroHome from "./_components/Hero";
import Partecipate from "./_components/Partecipate";
import WhoWeAre from "./_components/WhoWeAre";

export default function Home() {
  return (
    <main>
      <HeroHome />
      <WhoWeAre />
      <Community />
      <Partecipate />
    </main>
  );
}
