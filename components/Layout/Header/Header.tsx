import Link from "next/link";
import React from "react";
import { Bars3BottomLeftIcon as MenuIcon } from "@heroicons/react/24/outline";
import Menu from "./Menu";
import useScrollPosition from "@react-hook/window-scroll";
import { navigation } from "./Navigation";
import Logo from "./Logo";

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
      <div className="fixed z-30 top-0 right-2 flex items-center sm:hidden px-2 rounded bg-white shadow-md print:hidden">
        <MenuIcon
          className="h-10 w-10 cursor-pointer mt-2 text-black "
          onClick={toggleMenu}
        />{" "}
        Menu
        <Menu isOpen={isOpen} toggleMenu={toggleMenu} navigation={navigation} />
      </div>
      <div className={scrollY > treshold ? "lg:min-h-[80px]" : ""}></div>
      <div
        className={
          "transition-all z-20 bg-white flex " +
          (scrollY > treshold
            ? "h-20 invisible lg:visible fixed inset-0 z-50 bg-white shadow-lg my-1 mx-40 border border-gray-200 rounded-md"
            : "relative w-full shadow lg:min-h-[80px] p-2")
        }
      >
        <Logo />
        <div className="hidden sm:flex justify-evenly items-center flex-grow">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="text-xl no-underline uppercase text-black inline-block px-3 py-2 border rounded border-white hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
