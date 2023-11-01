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
        className="fixed z-30 top-0 right-2 flex items-center sm:hidden px-2 m-3 rounded bg-white shadow print:hidden"
        onClick={toggleOpen}
      >
        <MenuIcon className="h-10 w-10 cursor-pointer mt-2 text-black " /> Menu
      </div>

      <div
        className={
          " fixed overflow-hidden z-50 bg-gray-100 bg-opacity-60 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-200 translate-x-0"
            : " transition-all delay-300 opacity-0 translate-x-full")
        }
      >
        <nav
          style={{ backdropFilter: "blur(4px)" }}
          className={
            "w-screen max-w-lg left-0 absolute bg-white bg-opacity-25 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
            <div
              className="z-10 flex justify-end m-2"
              onClick={toggleOpen}
              onKeyDown={handleKeyDown}
            >
              <CloseIcon className="h-10 w-10 cursor-pointer mt-1 lg:m-10" />
            </div>
            <Logo />
            <div className="p-2 h-full">
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
      className="text-2xl text-black uppercase block p-3 my-5 underline"
      onClick={onClick}
    >
      {item.name}
    </Link>
  );
}
