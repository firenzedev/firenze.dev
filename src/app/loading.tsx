import { Logo } from "@/components/ui/Logo";

export default function Loadeing() {
  return (
    <main className="container mx-auto lg:pt-6 lg:px-44">
      <div className="lg:p-6 p-12 text-center flex justify-center items-center flex-col">
        Caricamento in corso...<br></br>
        <div className="animate-pulse bg-black bg-opacity-80 rounded-lg p-5">
          <Logo />
        </div>
      </div>
    </main>
  );
}
