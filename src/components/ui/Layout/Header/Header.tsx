import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import { navigation } from "./Navigation";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <Menu navigation={navigation} />
      <header className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-900 flex w-full shadow lg:min-h-[80px] p-2">
        <Logo />
        <div className="hidden sm:flex justify-evenly items-center flex-grow">
          {navigation.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="text-xl no-underline uppercase text-black dark:text-white inline-block px-3 py-2 border rounded border-white hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
