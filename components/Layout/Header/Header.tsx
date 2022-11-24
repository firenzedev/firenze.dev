import Link from "next/link";
import React from "react";
import { Bars3BottomLeftIcon as MenuIcon } from "@heroicons/react/24/outline";
import Menu from "./Menu";
import useScrollPosition from "@react-hook/window-scroll";
import logo from "../../../assets/images/logo.svg";
import Image from "next/image";

export const navigation = [
  { name: "Homepage", href: "/" },
  { name: "Eventi", href: "/eventi" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
];

export const LINKS = [];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollY = useScrollPosition(24 /*fps*/);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const treshold = 100;

  return (
    <>
      <div className="fixed z-30 top-0 right-2 flex items-center sm:hidden bg-white bg-opacity-25 p-3 rounded">
        <MenuIcon
          className="h-10 w-10 cursor-pointer mt-2 text-black"
          onClick={toggleMenu}
        />
        <Menu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          links={LINKS}
          navigation={navigation}
        />
      </div>
      <div className={scrollY > treshold ? "min-h-[80px]" : ""}></div>
      <div
        className={
          "transition-all z-20 bg-white flex " +
          (scrollY > treshold
            ? "h-20 invisible lg:visible fixed inset-0 z-50 bg-white shadow-lg my-1 mx-40 border border-gray-200 rounded-md"
            : "relative w-full shadow min-h-[80px]")
        }
      >
        <div className="sm:flex justify-evenly items-center px-8">
          <Link href="/" className="block">
            <div className="flex">
              <Image src={logo} alt="firenze.dev logo" width={47} height={47} />
              <div className="ml-2">
                <span className="text-xl">
                  firenze<strong>.dev</strong>
                </span>
                <br></br>
                <small className="text-xs">
                  La community degli sviluppatori a Firenze
                </small>
              </div>
            </div>
          </Link>
        </div>
        <div className="hidden sm:flex justify-evenly items-center flex-grow">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="text-xl font-bebas uppercase text-black inline-block px-3 py-2 border rounded border-white hover:shadow"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden px-8 sm:flex items-center justify-center">
          <Link
            className="rounded px-6 py-3 bg-zinc-800 text-white hover:shadow"
            href="/contatti"
          >
            Contatti
          </Link>
        </div>
      </div>
    </>
  );
}
