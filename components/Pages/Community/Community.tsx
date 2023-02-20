import H1 from "../../Heading/H1";
import Goals from "./Goals";
import HowToPartecipate from "./HowToPartecipate";
import Intro from "./Intro";
import ToWhoAreWeAddressed from "./ToWhoAreWeAddressed";
import WhatWeBelieve from "./WhatWeBelieve";

export default function Community() {
  return (
    <main>
      <div className="container mx-auto p-2 pt-6 lg:px-36">
      <H1>La community degli sviluppatori a Firenze</H1>
      <Intro />
      <WhatWeBelieve />
      <ToWhoAreWeAddressed />
      <Goals />
      
      </div>
      <HowToPartecipate />
    </main>
  );
}
