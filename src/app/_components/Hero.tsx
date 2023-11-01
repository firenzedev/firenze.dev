import { Logo } from "@/components/ui/Logo";
import { Hero } from "@/components/ui/Hero";
export default function HeroHome() {
  return (
    <Hero
      title={
        <>
          firenze<strong>.dev</strong> developer community
        </>
      }
      subtitle={<em>La community degli sviluppatori a Firenze</em>}
      actions={
        <a href="#subscribe">
          <button className="border border-white px-16 py-4 rounded text-white">
            Iscriviti
          </button>
        </a>
      }
      image={<Logo />}
    />
  );
}
