export default function Copyright() {
  return (
    <div className="bg-slate-200 py-8 lg:flex justify-between lg:p-4">
      <span>Copyright &copy; {new Date().getFullYear()} firenze.dev</span>
      <div className="mt-6 lg:mt-0">
        Il sito web di firenze.dev è open source. Se vuoi contribuire, trovi il
        codice su{" "}
        <a
          href="https://github.com/firenzedev/firenze.dev"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}
