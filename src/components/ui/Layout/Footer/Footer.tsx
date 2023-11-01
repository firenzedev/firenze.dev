import Link from "next/link";
import Logo from "../Header/Logo";
import Partners from "./Partners";
import Social from "./Social";

export default function Footer() {
  return (
    <>
      <Partners />
      <footer className="bg-slate-200 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Logo />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Risorse
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/nft" className="hover:underline">
                      NFT
                    </Link>
                  </li>
                  <li>
                    <Link href="/sponsorship" className="hover:underline">
                      Sponsors
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contatti
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/contatti" className="hover:underline ">
                      Scrivici
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/invite/DJ5gpQtqMH"
                      className="hover:underline"
                    >
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link href="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-slate-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline">
                firenze.dev
              </Link>
              .
            </span>
            <Social />
          </div>
        </div>
      </footer>
    </>
  );
}
