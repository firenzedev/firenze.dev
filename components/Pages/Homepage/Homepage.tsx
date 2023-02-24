import Community from "./Community/Community";
import HeroHome from "./Hero";

import Partecipate from "./Partecipate/Partecipate";
import WhoWeAre from "./WhoWeAre";

export default function Homepage() {
  return (
    <main>
      <HeroHome />
      <WhoWeAre />
      <Community />
      <Partecipate />
    </main>
  );
}
