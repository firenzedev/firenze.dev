/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { XMarkIcon as CloseIcon } from "@heroicons/react/24/outline";
import { SiteLink } from "./Navigation";
import Logo from "./Logo";

interface MenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navigation: SiteLink[];
}

export default function Menu({ isOpen, toggleMenu, navigation }: MenuProps) {
  return (
    <main
      className={
        " fixed overflow-hidden z-50 bg-gray-100 bg-opacity-60 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-200 translate-x-0"
          : " transition-all delay-300 opacity-0 translate-x-full")
      }
    >
      <section
        style={{ backdropFilter: "blur(4px)" }}
        className={
          "w-screen max-w-lg left-0 absolute bg-white bg-opacity-25 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="z-10 flex justify-end m-2">
            <CloseIcon
              className="h-10 w-10 cursor-pointer mt-1 lg:m-10"
              onClick={toggleMenu}
            />
          </div>
          <Logo />
          <div className="p-2 h-full">
            <nav className="text-3xl font-bold">
              <div>
                {navigation.map((item) => (
                  <MenuLink
                    onClick={toggleMenu}
                    key={`nva-${item.name}`}
                    item={item}
                  />
                ))}
              </div>
            </nav>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={toggleMenu}
      ></section>
    </main>
  );
}

function MenuLink({ item, onClick }: { item: SiteLink; onClick: () => void }) {
  return (
    <Link
      onClick={onClick}
      href={item.href}
      className="text-2xl text-black uppercase block p-3 my-5 underline"
    >
      {item.name}
    </Link>
  );
}
