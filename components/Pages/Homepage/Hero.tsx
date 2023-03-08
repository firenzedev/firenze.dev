import Image from "next/image";
import logo from "../../../assets/images/firenzedev_darkbkg_shadow.svg";
import Hero from "../../Hero/Hero";
export default function HeroHome() {
  return (
    <Hero
      title={
        <>firenze<strong>.dev</strong> developer community</>
      }
      subtitle={
        <em>La community degli sviluppatori a Firenze</em>
      }
      actions={
        <a href="#subscribe">
          <button className="border border-white px-16 py-4 rounded text-white">
            Iscriviti
          </button>
        </a>
      }
      image={
        <Image
          src={logo}
          alt="firenze.dev logo"
          width={256}
          height={256}
          priority
        />
      }
    />
  );
}
