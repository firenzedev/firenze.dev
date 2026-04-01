import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="sm:flex justify-evenly items-center p-2 lg:px-8">
      <Link href="/" className="flex text-black dark:text-white no-underline">
        <div className="flex">
          <Image
            className="dark:bg-white dark:rounded-md"
            src={logo}
            alt="firenze.dev logo"
            width={47}
            height={47}
            priority
          />
          <div className="ml-2 flex flex-col justify-center">
            <span className="text-xl">
              firenze<strong>.dev</strong>
            </span>
            <small className="text-xs hidden lg:block">
              La community degli sviluppatori a Firenze
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
