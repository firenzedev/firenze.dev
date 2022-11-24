import Community from "./Community/Community";
import Hero from "./Hero";
import Partecipate from "./Partecipate/Partecipate";
import WhoWeAre from "./WhoWeAre";

export default function Homepage() {
    return <main>
        <Hero />
        <WhoWeAre />
        <Community />
        <Partecipate />
    </main>
}