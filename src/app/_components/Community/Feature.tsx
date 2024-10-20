import Image from "next/image";
import { FeatureType } from "./features";
import { H4 } from "@/components/ui/Heading";

interface FeatureProps {
  feature: FeatureType;
}
export default function Feature({ feature }: Readonly<FeatureProps>) {
  return (
    <div className="shadow-md flex p-3 bg-white dark:bg-zinc-900 items-start">
      <div className="print:hidden">
        <Image src={feature.icon} alt={feature.title} width={50} height={50} />
      </div>
      <div className="ml-4 pb-10">
        <H4>{feature.title}</H4>
        <p>{feature.text}</p>
      </div>
    </div>
  );
}
