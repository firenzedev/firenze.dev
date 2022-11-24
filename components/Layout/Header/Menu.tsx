/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { XMarkIcon as CloseIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function Menu({ isOpen, toggleMenu, links, navigation }) {
  const router = useRouter();
  return (
    <main
      className={
        " fixed overflow-hidden z-50 bg-gray-600 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-200 translate-x-0"
          : " transition-all delay-300 opacity-0 translate-x-full")
      }
    >
      <section
        style={{ backdropFilter: "blur(10px)" }}
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
          <div className="p-2 h-full">
            <nav className="ml-24 text-3xl">
              <div>
                {navigation.map((item) => (
                  <MenuLink
                    key={`nva-${item.name}`}
                    item={item}
                    router={router}
                    toggleMenu={toggleMenu}
                  />
                ))}
              </div>

              <div>
                {links.map((link) => (
                  <a
                    key={link.name}
                    className="inline-flex m-2 rounded-full p-2 border border-zinc-800 justify-center items-center shadow hover:shadow-md"
                    href={link.href}
                    target="_blank"
                    title={link.name}
                    rel="noreferrer"
                  >
                    <img
                      loading="lazy"
                      src={`/images/${link.icon}`}
                      width={15}
                      height={15}
                      alt={link.name}
                    ></img>
                  </a>
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

function MenuLink({ item, router, toggleMenu, external }) {
  function goTo(e) {
    if (item.external) {
      //don't prevent defautl
    } else {
      toggleMenu();
      if (e.target.href && e.target.href.indexOf("#") > -1) {
        e.preventDefault();
      }
    }
  }

  return (
    <Link
      href={item.href}
      target={item.target}
      onClick={goTo}
      className={classNames(
        "text-2xl uppercase",
        router.asPath === item.href ? "font-bold shadow-xl" : "",
        "px-3 py-2 rounded-md text-sm font-medium"
      )}
      rel="noreferrer"
    >
      <div className="cursor-pointer flex items-center">
        {item.icon && (
          <img
            loading="lazy"
            src={`/images/icons/${item.icon}`}
            width={48}
            height={48}
            alt={item.name}
          ></img>
        )}{" "}
        {!item.icon && item.name}
      </div>
    </Link>
  );
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
