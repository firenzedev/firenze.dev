import Logo from "../Header/Logo";

export default function Copyright() {
  return (
    <>
      <div className="bg-slate-100 p-3 md:w-1/2 md:border-l border-slate-300">
        <div className="mt-4 lg:mt-0 flex justify-center text-left">
          <Logo />
        </div>
        <div className="mb-4 lg:mb-0">
          <small>
            Il sito web di firenze.dev è open source. Se vuoi contribuire, trovi
            il codice su{" "}
            <a
              href="https://github.com/firenzedev/firenze.dev"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>
        </div>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} firenze.dev</p>
        </div>
      </div>
    </>
  );
}
