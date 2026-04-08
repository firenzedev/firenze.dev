"use client";
import { useA11y } from "@/hooks/useA11y";
import {
  XMarkIcon as CloseIcon,
  Bars3BottomLeftIcon as MenuIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";
import Logo from "./Logo";
import { SiteLink } from "./Navigation";

interface Props {
  navigation: SiteLink[];
}

export default function Menu({ navigation }: Readonly<Props>) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((open) => !open);
  }

  const { menuRef, trapFocus } = useA11y({ onClose: () => setIsOpen(false) });

  return (
    <nav ref={menuRef} tabIndex={-1}>
      <button
        className={
          "fixed z-30 top-0 right-2 flex items-center sm:hidden px-2 m-3 rounded bg-white dark:bg-gray-900 shadow dark:shadow-gray-800 print:hidden transition-all transform" +
          (isOpen
            ? " motion-safe:translate-x-36"
            : " motion-safe:translate-x-0")
        }
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={toggleOpen}
      >
        <MenuIcon className="h-10 w-10 cursor-pointer mt-2 text-black dark:text-white" />{" "}
        Menu
      </button>

      <div
        id="mobile-menu"
        className={
          "md:hidden fixed overflow-hidden z-50 bg-gray-100 dark:bg-gray-700 dark:bg-opacity-80 bg-opacity-60 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity motion-safe:opacity-100 motion-safe:translate-x-0"
            : " transition-all motion-safe:opacity-0 motion-safe:translate-x-full")
        }
      >
        <div
          style={{ backdropFilter: "blur(4px)" }}
          className={
            "w-screen left-0 absolute bg-white dark:bg-gray-700 dark:bg-opacity-25 bg-opacity-50 h-screen shadow-xl ease-in-out transition-all transform " +
            (isOpen
              ? " motion-safe:translate-x-0 "
              : " motion-safe:translate-x-full ")
          }
        >
          <div className="relative w-screen pb-10 flex flex-col space-y-4 overflow-y-scroll h-full">
            <div className="z-10 flex justify-between m-2" tabIndex={-1}>
              <Logo tabIndex={-1} onClick={toggleOpen} />
            </div>
            <div className="p-2 flex items-end h-full">
              <ul className="text-3xl font-bold">
                {navigation.map((item) => (
                  <li key={`nav-${item.name}`}>
                    <MenuLink
                      item={item}
                      onClick={toggleOpen}
                      tabIndex={isOpen ? 0 : -1}
                      onKeyDown={trapFocus}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="h-10 w-10 absolute right-4 z-10  mt-1 lg:m-10"
              onClick={toggleOpen}
              aria-label="Chiudi Menu"
              tabIndex={isOpen ? 0 : -1}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuLink({
  item,
  onClick,
  ...props
}: Readonly<
  { item: SiteLink; onClick: () => void } & ComponentPropsWithoutRef<"a">
>) {
  return (
    <Link
      href={item.href}
      className="text-2xl text-black dark:text-white uppercase block p-3 my-5 underline underline-offset-8"
      onClick={onClick}
      {...props}
    >
      {item.name}
    </Link>
  );
}
