import Logo from "../Header/Logo";

export default function Copyright() {
  return (
    <div className="bg-slate-200 py-8">
      <div className="lg:flex justify-between lg:p-4">
        <div className="mb-4 lg:mb-0">
          Il sito web di firenze.dev è open source. Se vuoi contribuire, trovi
          il codice su{" "}
          <a
            href="https://github.com/firenzedev/firenze.dev"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <div>
          <p>Copyright &copy; {new Date().getFullYear()} firenze.dev</p>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 flex justify-center text-left">
      <Logo />
      </div>
    </div>
  );
}
