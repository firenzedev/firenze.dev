import Head from "next/head";
import Image from "next/image";
import logo from "../../../assets/images/firenzedev_darkbkg_shadow.svg";
import H1 from "../../Heading/H1";

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-2 bg-gradient-to-r from-blue-700 to-indigo-900">
      <Head>
        <link rel="preload" href={logo} as="image" />
      </Head>
      <div className="text-white p-2 pt-6 lg:p-24 text-center lg:text-left">
        <H1 className="text-white">
          firenze<strong>.dev</strong> developer community
        </H1>
        <h2 className="text-2xl font-sans font-extralight tracking-wider my-4 text-white">
          <em>La community degli sviluppatori a Firenze</em>
        </h2>
        <div className="my-10">
          <a href="#subscribe">
            <button className="border border-white px-16 py-4 rounded text-white">
              Iscriviti
            </button>
          </a>
        </div>
      </div>
      <div className="p-12 flex justify-center lg:justify-end lg:mr-24">
        <Image
          src={logo}
          alt="firenze.dev logo"
          width={256}
          height={256}
          priority
        />
      </div>
    </div>
  );
}
