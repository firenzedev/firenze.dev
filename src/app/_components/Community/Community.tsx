import { H3 } from "@/components/ui/Heading";
import Feature from "./Feature";
import { FEATURES } from "./features";

export default function Community() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-800 p-5 pb-10">
      <H3>La nostra community è</H3>
      <div className="grid lg:grid-cols-4 gap-4">
        {FEATURES.map((feature) => (
          <Feature key={`feature-${feature.title}`} feature={feature} />
        ))}
      </div>
    </section>
  );
}
