import Image from "next/image";
import logo from "../../assets/images/firenzedev_darkbkg_shadow.svg";

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-2 bg-gradient-to-r from-blue-700 to-indigo-900">
      <div className="text-white p-2 lg:p-24">
        <h1 className="text-4xl font-bold">
          firenze<strong>.dev</strong> developer community
        </h1>
        <h2 className="text-2xl font-sans font-extralight tracking-wider my-4">
          <em>La community degli sviluppatori a Firenze</em>
        </h2>
        <div className="my-10">
          <button className="border border-white px-16 py-4 rounded text-white">
            Iscriviti
          </button>
        </div>
      </div>
      <div className="p-12 flex justify-end mr-24">
        <Image src={logo} alt="firenze.dev logo" width={256} height={"256"} />
      </div>
    </div>
  );
}
