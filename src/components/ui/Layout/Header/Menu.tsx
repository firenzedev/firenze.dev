"use client";
import Link from "next/link";
import {
  XMarkIcon as CloseIcon,
  Bars3BottomLeftIcon as MenuIcon,
} from "@heroicons/react/24/outline";
import { SiteLink } from "./Navigation";
import Logo from "./Logo";
import { KeyboardEvent, useState } from "react";

interface Props {
  navigation: SiteLink[];
}

export default function Menu({ navigation }: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.code === "m") {
      toggleOpen();
    }
  }

  return (
    <>
      <div
        onKeyDown={handleKeyDown}
        className={
          "fixed z-30 top-0 right-2 flex items-center sm:hidden px-2 m-3 rounded bg-white dark:bg-gray-900 shadow dark:shadow-gray-800 print:hidden transition-all transform" +
          (isOpen ? " translate-x-36" : " translate-x-0")
        }
        onClick={toggleOpen}
      >
        <MenuIcon className="h-10 w-10 cursor-pointer mt-2 text-black dark:text-white" />{" "}
        Menu
      </div>

      <div
        className={
          " fixed overflow-hidden z-50 bg-gray-100 dark:bg-gray-700 dark:bg-opacity-80 bg-opacity-60 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 translate-x-0"
            : " transition-all opacity-0 translate-x-full")
        }
      >
        <nav
          style={{ backdropFilter: "blur(4px)" }}
          className={
            "w-screen left-0 absolute bg-white dark:bg-gray-700 dark:bg-opacity-25 bg-opacity-50 h-screen shadow-xl ease-in-out transition-all transform " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <div className="relative w-screen pb-10 flex flex-col space-y-4 overflow-y-scroll h-full">
            <div
              className="z-10 flex justify-between m-2"
              onClick={toggleOpen}
              onKeyDown={handleKeyDown}
            >
              <Logo />
              <CloseIcon className="h-10 w-10 cursor-pointer mt-1 lg:m-10" />
            </div>

            <div className="p-2 flex items-end h-full">
              <nav className="text-3xl font-bold">
                <div>
                  {navigation.map((item) => (
                    <MenuLink
                      key={`nva-${item.name}`}
                      item={item}
                      onClick={toggleOpen}
                    />
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

function MenuLink({
  item,
  onClick,
}: Readonly<{ item: SiteLink; onClick: () => void }>) {
  return (
    <Link
      href={item.href}
      className="text-2xl text-black dark:text-white uppercase block p-3 my-5 underline underline-offset-8"
      onClick={onClick}
    >
      {item.name}
    </Link>
  );
}
