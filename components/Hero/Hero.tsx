import { ReactNode } from "react";
import H1 from "../Heading/H1";

interface HeroProps {
  title: ReactNode | string;
  subtitle: ReactNode | string;
  actions?: ReactNode;
  image?: ReactNode;
}

export default function Hero({ title, subtitle, actions, image }: HeroProps) {
  return (
    <div className="grid lg:grid-cols-2 gap-2 bg-gradient-to-r from-blue-700 to-indigo-900">
      <div className="text-white p-2 pt-6 lg:p-24 text-center lg:text-left">
        <H1 className="text-white">{title}</H1>
        <h2 className="text-2xl font-sans font-extralight tracking-wider my-4 text-white">
          {subtitle}
        </h2>
        {actions && <div className="my-10">{actions}</div>}
      </div>
      {image && (
        <div className="p-12 flex justify-center lg:justify-end lg:mr-24">
          {image}
        </div>
      )}
    </div>
  );
}
