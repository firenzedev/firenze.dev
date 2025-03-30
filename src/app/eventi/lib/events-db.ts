import moduleFederationImage from "./images/thumb/moduleFederationImage.png";
import rabbitImage from "./images/thumb/rabbit.png";
import graphqlImage from "./images/thumb/graphql.png";
import anotherifImage from "./images/thumb/anotherif.png";
import anotherifImageBig from "./images/solo-un-altro-if.png";
import nextEventImage from "./images/thumb/3-150x150.png";
import rabbitImageFull from "./images/Applicazioni-piu-semplici-robuste-e-performanti-con-RabbitMQ-min.png";
import searchEngine from "./images/building-a-full-text-search-engine-from-scratch-in-typescript.png";
import fontendApps from "./images/rendere-applicazioni-front-end-scalabitli.png";
import graphqlImageBig from "./images/graphql-2014-min.png";
import christmasBeer from "./images/christmas-beer-firenze-dev.png";
import christmasBeerIcon from "./images/thumb/christmas-beer-firenze-dev.webp";
import devExpIcon from "./images/thumb/evento_devex-150x150.png";
import devExp from "./images/evento_devex.png";
import monolite from "./images/dal-monolite-ai-microservizi.png";
import monoliteIcon from "./images/thumb/dal-monolite-ai-microservizi.png";
import meetUpCodemotion from "./images/meet-up-codemotion-05-2023.png";
import meetUpCodemotionIcon from "./images/thumb/meet-up-codemotion-05-2023-thumb.png";
import summerBeer from "./images/EventBrite_summer.png";
import summerBeerIcon from "./images/thumb/summer-beer-thumb-150x150.png";
import blockchain101Icon from "./images/thumb/blockchain101-thumb.webp";
import blockchain101 from "./images/blockchain101.webp";
import workshopBlockchain101 from "./images/workshop-blockchain.png";
import workshopBlockchain101Icon from "./images/thumb/workshop-blockchain-thumb.png";
import openMicNightIcon from "./images/thumb/open-mic-night-icon.png";
import openMicNight from "./images/open-mic-night.png";
import dataAnalisisConIA from "./images/14Marzo_EventBrite_colors.png";
import dataAnalisisConIAIcon from "./images/thumb/14Marzo_EventBrite_colors_thumb.png";
import shapingYourFuture from "./images/9_Maggio_EventBrite_colors.png";
import shapingYourFutureIcon from "./images/thumb/9_Maggio_thumb_colors.png";
import summerBeer2024Icon from "./images/thumb/beerGiugno.png";
import summerBeer2024 from "./images/EventBrite_summerbeer.png";
import { FDevEvent } from "./EventService";
import dayjs from "dayjs";

import supply_cahain from "./images/supply_cahain.png";
import supply_cahainIcon from "./images/thumb/supply_chain.png";
import data_revolution from "./images/data_Revolution_14_11_06.png";
import data_revolutionIcon from "./images/thumb/data_Revolution_14_11_06.png";
import typescript_gennastic from "./images/typescript_gennastic20022025.png";
import supercharging_with_rag from "./images/supercharging_your_app_with_rag.png";
import supercharging_with_ragIcon from "./images/thumb/supercharging_your_app_with_rag.png";

export const events: FDevEvent[] = [
  {
    title: "Supercharging your App with a RAG: a real-world usecase",
    subtitle:
      "Come sfruttare la potenza dell'intelligenza artificiale per ottenere risultati sempre più accurati e personalizzati",
    icon: supercharging_with_ragIcon,
    image: supercharging_with_rag,
    abstract: `
👉 Ti è mai capitato di usare un LLM che generava risposte affascinanti...ma completamente sbagliate? Oppure di provare a far lavorare un Agent, solo per scoprire che si perdeva in un loop infinito di richieste?

Nel mondo dello sviluppo, un’AI generativa priva di contesto rischia di essere poco utile. È qui che entrano in gioco i Retrieval-Augmented Generation (RAG), strumenti indispensabili per costruire sistemi intelligenti in grado di elaborare i dati giusti al momento giusto.

In questo talk, Giuseppe Funicello, nomade digitale e youtuber, ci guiderà oltre i limiti dei modelli generativi tradizionali, ottimizzando i processi di ingestion e retrieval dei dati per ottenere risultati sempre più accurati. Con il supporto del motore Cheshire Cat, un framework open-source per la creazione di Agent di AI, esploreremo casi d’uso concreti e best practice che ci insegneranno come integrare al meglio questi strumenti nei nostri progetti.

💡 Se vuoi progettare AI che non solo rispondono, ma ragionano, questo evento è per te.`,
    current: true,
    hideSponsorInNetworking: true,
    date: dayjs("2025-04-02 18:30").toDate(),
    sponsor: "42 Firenze",
    place: "42 Firenze",
    address: "Via del Tiratoio, 1, 50124 Firenze",
    eventbriteId: "1273032487439",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-supercharging-your-app-with-a-rag-a-real-world-usecase-1273032487439",
    type: "meetup",
  },
  {
    title: "TypeScript Gymnastics: Why Are They So Powerful for You?",
    subtitle:
      "Scopriremo la flessibilità e la potenza di TypeScript per creare soluzioni sempre più efficaci, versatili e sicure.",
    icon: typescript_gennastic,
    image: typescript_gennastic,
    abstract: `
Il sistema di tipi di TypeScript non è solo uno strumento per intercettare errori: 
è un potente alleato per risolvere problemi complessi, scrivendo codice pulito e affidabile. 
Insieme a Luca Del Puppo, Senior Software Developer @Nearform, esploreremo tecniche
avanzate di TypeScript, come mapped types, conditional types e generics, 
che possono aiutarci ad affrontare anche le sfide più difficili legate ai tipi.
Scoprirai come queste tecniche possano aiutarti a estrarre, trasformare e validare i tipi, 
mantenendo il tuo codice semplice e facile da manutenere. 
Queste tecniche avanzate di TypeScript, infatti, non servono solo a stupire i tuoi amici: 
sono competenze pratiche che rendono i tuoi sistemi più robusti e facili da usare.
Al termine di questo talk saprai come sfruttare al massimo la flessibilità e la potenza di TypeScript,
per creare soluzioni sempre più efficaci, versatili e sicure.`,
    current: false,
    hideSponsorInNetworking: false,
    date: dayjs("2025-02-20 18:30").toDate(),
    sponsor: "Human Company",
    place: "Palazzo Borghese",
    address: "110 Via Ghibellina 50122 Firenze",
    eventbriteId: "1218091667969",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-typescript-gymnastics-why-are-they-so-powerful-for-you-1218091667969",
    type: "meetup",
  },
  {
    title: "Data Revolution: next-generation data architectures",
    subtitle: "Siamo sicuri che i tuoi dati stiano bene, lì ammucchiati in un vecchio DB?",
    icon: data_revolutionIcon,
    image: data_revolution,
    abstract: `Magari finora ha funzionato, ma il mondo della gestione dei dati si sta evolvendo rapidamente.

In questo incontro Samuele Cucchi e Lorenzo Pasco, Data Engineer @Seacom, ci guideranno nel passaggio dalle architetture tradizionali a soluzioni di nuova generazione.

Scopriremo i vantaggi di un approccio Data Mesh per snellire la gestione dei dati e come un Data Lakehouse con interazione git-like offra un controllo dinamico, con possibilità di rollback e commit dei dati.
Un'occasione per esplorare nuovi orizzonti e assicurarti che i tuoi dati siano pronti per le sfide future!
`,
    current: true,
    hideSponsorInNetworking: false,
    date: dayjs("2024-11-06 18:30").toDate(),
    sponsor: "Seacom",
    place: "Murate Idea Park | MIP",
    address: "8 Piazza della Madonna della Neve 50122 Firenze",
    eventbriteId: "1045371031897",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-data-revolution-next-generation-data-architectures-1045371031897",
    type: "meetup",
  },
  {
    title: "The unexpected attack: hacking the supply chain",
    subtitle: "Tanto prima o poi capita a tutti: impara a pensare come un hacker per anticipare gli attacchi",
    icon: supply_cahainIcon,
    image: supply_cahain,
    abstract: `Che cosa si intende quando parliamo di supply chain? E perché potrebbe rappresentare un pericoloso punto d'ingresso per attaccare il nostro software?

In questo talk, Edoardo Dusi, Senior Developer Relations Engineer @ Storyblok, ci accompagnerà in un viaggio alla scoperta delle software supply chain, spiegando in modo chiaro come questi concetti influenzino la costruzione e distribuzione delle nostre applicazioni.

Vedremo come le vulnerabilità della supply chain possano essere sfruttate per condurre alcuni degli attacchi più comuni e discuteremo insieme le strategie per difendere efficacemente il nostro software.

Parleremo inoltre della Open Source Security Foundation (OpenSSF), un'iniziativa collaborativa che mira a rafforzare la sicurezza del software open source e che può rivelarsi di fondamentale importanza per prevenire questo tipo di attacchi, perché anche se il nostro codice è privato, si basa su progetti e librerie open source.

Alla fine del talk, avremo una visione nitida e completa di come funziona una supply chain e avremo a disposizione un insieme di best practices e strategie concrete per salvaguardare le nostre applicazioni.
`,
    current: false,
    hideSponsorInNetworking: true,
    date: dayjs("2024-10-03 18:30").toDate(),
    sponsor: "42 Firenze",
    place: "42 Firenze",
    address: "Via del Tiratoio, 1, 50124 Firenze",
    eventbriteId: "1006661681187",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-the-unexpected-attack-hacking-the-supply-chain-1006661681187",
    type: "meetup",
  },
  {
    title: "Summer Beer Meetup 2024",
    subtitle: "L'estate è finalmente alle porte, cosa c'è di meglio che condividere una birra fresca in compagnia?",

    icon: summerBeer2024Icon,
    image: summerBeer2024,
    abstract: `
Ci ritroviamo alle porte dell'estate per una serata informale in cui conoscerci meglio, 
condividere idee e discutere insieme delle prossime attività della community, 

il tutto accompagnato da una rinfrescante birretta offerta da noi!

Ti aspettiamo mercoledì 5 giugno dalle 21:30 al Parc Bistrò, Piazzale delle Cascine, 50144 Firenze FI.

La partecipazione è aperta a tutti, vieni con chi vuoi 😉
`,
    current: true,
    date: dayjs("2024-06-5 21:30").toDate(),
    sponsor: "",
    place: "Parc Bistrò",
    address: "Piazzale delle Cascine 50144 Firenze",
    eventbriteId: "909339367527",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-summer-beer-meetup-909339367527?aff=ebdsoporgprofile&_gl=1*193px25*_up*MQ..*_ga*NDczMzI5MjIyLjE3MTYyMzU5MDE.*_ga_TQVES5V6SH*MTcxNjIzNTkwMS4xLjAuMTcxNjIzNTkwMS4wLjAuMA..",
    type: "beer",
  },
  {
    title: "Shaping Your Future: carriera e crescita nel mondo Dev",
    subtitle:
      "Esplora il futuro dello sviluppo con Simone Torrisi di TomorrowDevs! Tecnologie, crescita professionale e aziende di successo ti aspettano!",
    icon: shapingYourFutureIcon,
    image: shapingYourFuture,
    abstract: `
Hai mai immaginato dove potresti trovarti nel tuo percorso professionale tra 10 anni?
Ti sei mai chiesto quali siano le scelte migliori per investire sul tuo futuro e ottenere 
il lavoro dei tuoi sogni? Ti piacerebbe saper riconoscere le aziende che saranno 
in grado di supportare la tua crescita e soddisfare le tue aspettative?

A queste e ad altre domande risponderà [**Simone Torrisi**](https://www.linkedin.com/in/storrisi/), 
Tech Mentor e Fondatore di **TomorrowDevs**, che, basandosi sulla sua esperienza sul campo, 
ci offrirà una panoramica sugli ostacoli e sulle opportunità legate alla definizione
di un solido percorso di carriera per gli sviluppatori.
    
Vedremo quali sono le maggiori difficoltà che si incontrano nel 
definire una prospettiva a lungo termine, in un contesto che richiede personale tecnico sempre più specializzato, 
ma che al tempo stesso è in grado di offrire solamente percorsi di carriera tradizionali e verticali. 
Scopriremo quali sono gli aspetti da tenere in considerazione in questo processo di rinnovamento del 
sistema e quali sono i punti chiave per consentire agli sviluppatori di percorrere una strada di crescita costante, 
senza dover sacrificare i loro obiettivi professionali.
`,
    current: true,
    date: dayjs("2024-05-9 18:30").toDate(),
    sponsor: "",
    place: null,
    address: "Camplus, Via del romito 5/7, 50134 Firenze",
    eventbriteId: "880064094397",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-shaping-your-future-carriera-e-crescita-nel-mondo-dev-880064094397",
    type: "meetup",
  },
  {
    title: " Data Analysis con l'IA 🐼",
    subtitle: "Un approccio innovativo all'analisi dei dati con l'IA generativa",
    icon: dataAnalisisConIAIcon,
    image: dataAnalisisConIA,
    abstract: `
Nell'era dei big data, l'analisi dei dati è diventata un pilastro fondamentale per l'innovazione aziendale.

Tuttavia, il processo tradizionale di estrazione e elaborazione dei dati può essere laborioso e richiedere competenze specialistiche. 
È qui che entra in gioco l'intelligenza artificiale (IA).

In questo talk tecnico **Gabriele Baldi**, Head of Software Development in **Lotrèk**, 
ci introdurrà al mondo della data analysis e ci mostrerà come sia possibile integrare l'IA generativa (quella in stile GPT, per capirci) con Pandas 🐼,
uno dei tool di manipolazione e processamento dati più famosi e utilizzati.

Partendo dalle basi dell'analisi dati, esamineremo come sfruttare le più recenti tecnologie di IA per creare sistemi di analisi dati intelligenti e adattivi.

Attraverso esempi pratici scopriremo come trasformare l'analisi dati da un compito complesso a un processo fluido e potenziato dall'intelligenza artificiale.

`,
    current: true,
    date: dayjs("2024-03-14 18:30").toDate(),
    sponsor: "",
    place: null,
    address: "Impact Hub Firenze, Via Panciatichi, 1, 50141",
    eventbriteId: "851089440427",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-data-analysis-con-lia-851089440427",
    type: "meetup",
  },
  {
    title: "🚀 Call for Papers: Open Mic Night 🎤",
    subtitle: "👩‍💻👨‍💻 Non vediamo l'ora di scoprire le tue idee! Unisciti a noi e fai sentire la tua voce! 💪😎",
    icon: openMicNightIcon,
    image: openMicNight,
    abstract: `
Firenze.dev crede fortemente nell'aggregazione, nello scambio di idee e nella condivisione, da parte di chiunque sia un appassionato dello sviluppo software e di tutti gli argomenti che orbitano intorno a questo fantastico mondo! 🪐.

### 🫵 We want you! 
    
Ti piacerebbe parlare della tecnologia per cui stai in fissa in questo momento, raccontare un progetto che ti ha appassionato o semplicemente condividere un'esperienza, ma non hai ancora trovato l'occasione giusta per farlo? Bene, Open Mic Night potrebbe proprio fare al caso tuo!💪
    
    
La community sta organizzando un evento dedicato a te, che sarà composto da 4/5 speech della durata di circa 15' ciascuno, l'ambiente ideale per chi si trova a voler fare il suo primo talk.
    
    
### 🤩 Perché partecipare?
    
Potrai creare delle connessioni con altri appassionati del mondo tech.

Farai un esperienza di public speaking che ti porterà notevoli vantaggi anche nel mondo professionale

Ti divertirai! Firenze.dev  è una community accogliente e aperta a nuove idee.
    
    
### 📝 Come partecipare:

Compila quest form [https://forms.gle/qqNZGx9BCiAbVXds8](https://forms.gle/qqNZGx9BCiAbVXds8) con un breve abstract (circa 200 parole) e il tuo profilo entro il 20 novembre. I talk selezionati saranno annunciati il 30 novembre.
    
    
🚨 Attenzione: Se pensi che preparare un talk sia paragonabile a una delle sette fatiche di Ercole, non ti preoccupare, lo staff di firenze.dev, composto da vecchi lupi di mare 🏴‍☠️ che hanno affrontato le acque impervie di molteplici conferenze , sarà a tua disposizione per darti qualche dritta!
    
    
👩‍💻👨‍💻 Non vediamo l'ora di scoprire le tue idee!
    
    
Unisciti a noi e fai sentire la tua voce! 💪😎
`,
    current: true,
    date: dayjs("2023-12-14 18:30").toDate(),
    sponsor: "",
    place: null,
    address: "",
    eventbriteId: "746333071307",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-workshop-sviluppare-una-dapp-su-blockchain-746333071307",
    type: "cfp",
  },
  {
    title: "Workshop: sviluppare una dApp su blockchain",
    subtitle:
      "Scopriremo insieme come scrivere uno smart contract, effettuare il deploy sulla blockchain e sviluppare una dApp",
    icon: workshopBlockchain101Icon,
    image: workshopBlockchain101,
    abstract: `La blockchain è un argomento così vasto che, dopo il nostro ultimo evento, in molti ci avete chiesto di entrare maggiormente nel dettaglio di questa tecnologia. È proprio per passare dalla teoria alla pratica che abbiamo ideato il primo workshop di firenze.dev. In questo evento svilupperemo insieme un'applicazione decentralizzata basata sulla blockchain: partiremo dalla creazione di uno smart contract, vedremo come inviarlo sulla blockchain e infine come invocare le sue funzioni da un comune browser, sviluppando il codice di una dApp. Non è necessario avere conoscenze pregresse: vedremo insieme i concetti fondamentali che ci serviranno per scrivere il codice.

Si tratterà di un vero e proprio workshop, guidato da Tiziano Pessa e Lorenzo Spinelli, nel quale ognuno sarà attivamente coinvolto e affiancato nello sviluppo della dApp. Al termine, i partecipanti saranno in grado di scrivere uno smart contract, effettuare il deploy sulla blockchain e sviluppare una dApp utilizzabile da un comune browser.
    
Per poter garantire un supporto attivo per tutta la durata dell'evento, i posti disponibili saranno molto limitati e solo i primi a prendere il biglietto potranno partecipare. I biglietti saranno gratuiti per i membri della community, ma saranno disponibili anche dei posti per chi non è iscritto, che però per motivi organizzativi dovrà versare una quota di partecipazione.

# Info

L'evento si terrà presso Frame School, in via di Scandicci 88/A. Si può raggiungere con i mezzi pubblici (in tramvia fermata T1 Arcipressi oppure con la linea 6 dell'autobus). Per chi viene in auto, è facile trovare parcheggio nelle vie adiacenti, di fronte all'Istituto Meucci o in via del Filarete, davanti al campo di atletica.

L'evento inizierà alle 18.30 e avrà una durata di circa 2 ore; al termine, con chi vuole, andremo a cena insieme.


# FAQ

**Cosa devo portare?** 

Devi avere con te un laptop, con Node.js e git già installati, oltre al tuo IDE preferito per poter lavorare sul progetto.

**Quali conoscenze pregresse devo avere per partecipare?**

E' sufficiente che tu conosca la sintassi di base del linguaggio JavaScript e che tu sia in grado di utilizzare un progetto Node.js con un package manager (npm o yarn).

**Come faccio a sapere se sono iscritto alla community e ho diritto al biglietto gratuito?**

E' sufficiente che tu ti sia iscritto tramite il form che trovi nella home page del sito di firenze.dev e che di conseguenza ricevi regolarmente la nostra newsletter. Quando prenoti il biglietto, assicurati di utilizzare la stessa email che hai usato per l'iscrizione alla community.

**Vorrei partecipare ma non sono certo di farcela. Posso prendere lo stesso il biglietto?**

Il numero di posti disponibili per questo evento è limitatissimo: siamo contenti che tu voglia partecipare e ti consigliamo di prendere il biglietto. Ma ti preghiamo di avvertirci immediatamente se sei sicuro di non riuscire a venire, così potremo assegnare il tuo biglietto a qualcun altro.


**Come funziona la lista d'attesa?**

Le persone in lista d'attesa riceveranno il biglietto in caso qualcuno degli iscritti dovesse rinunciare. In tal caso vi arriverà una comunicazione direttamente da EventBrite, ma attenzione: quello non è il biglietto! Per avere il biglietto dovete seguire le istruzioni e riscattarlo entro 24 ore!

`,
    current: true,
    date: dayjs("2023-11-23 18:30").toDate(),
    sponsor: "",
    place: "Frame School",
    address: "via di Scandicci 88, Firenze, FI",
    eventbriteId: "746333071307",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-workshop-sviluppare-una-dapp-su-blockchain-746333071307",
    type: "workshop",
  },
  {
    title: "Blockchain 101, from zero to developer",
    subtitle: "Un percorso alla scoperta della blockchain, per comprenderne il funzionamento e le potenzialità",
    icon: blockchain101Icon,
    image: blockchain101,
    abstract: `Hai sempre considerato la blockchain un mistero insondabile? Sei ancora incerto sugli ambiti in cui può essere applicata? È ora di svelare i segreti di questa tecnologia rivoluzionaria!

Dalla crittografia all' utilizzo dei wallet, dagli smart contract agli NFT, in questo evento Lorenzo Spinelli e Tiziano Pessa ci mostreranno gli aspetti tecnici che ogni programmatore deve conoscere per capire questa tecnologia e sviluppare applicazioni decentralizzate su blockchain.
    
Non preoccuparti se è la prima volta che ti avvicini a questo argomento, saranno affrontati in modo chiaro e semplice tutti gli aspetti essenziali, per consentire anche a chi non conosce questa tecnologia, non solo di seguire il talk, ma anche di iniziare a svilupparci fin da subito.`,
    current: true,
    date: dayjs("2023-10-12 18:30").toDate(),
    sponsor: "",
    place: "Frame School",
    address: "via di Scandicci 88, Firenze, FI",
    eventbriteId: "719618035917",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-blockchain-101-from-zero-to-developer-719618035917",
    type: "meetup",
  },
  {
    title: "Summer Beer Meetup",
    subtitle: "L'estate è finalmente alle porte, cosa c'è di meglio che condividere una birra fresca in compagnia?",
    icon: summerBeerIcon,
    image: summerBeer,
    abstract: `L'estate è finalmente alle porte, cosa c'è di meglio che condividere una birra fresca in compagnia?
    Ci piacerebbe approfittare dell' occasione per scambiare qualche chiacchiera informale e darvi la possibilità di suggerire gli argomenti che vi piacerebbe trattare nei prossimi eventi che organizzeremo.
    Puoi portare con te chi vuoi, per partecipare è sufficiente prenotare un biglietto gratuito per ogni persona, così che possiamo riservare un posto per tutti! 
    Ti aspettiamo!`,
    current: true,
    date: dayjs("2023-06-08 21:30").toDate(),
    sponsor: "",
    place: "Fabbrica in Pedavena",
    address: "Via Generale C. A. dalla Chiesa, 1, 50136 Firenze FI",
    eventbriteId: "646533919357",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-summer-beer-meetup-646533919357",
    type: "beer",
  },
  {
    title: "Dev Florence Meetup",
    subtitle:
      "La community di developer fiorentina si ritrova a Firenze presso Impact Hub il 24 maggio 2023 per un meetup organizzato da Codemotion, Firenze.dev, Full Stack Florence e Schrodinger Hat",
    icon: meetUpCodemotionIcon,
    image: meetUpCodemotion,
    abstract: `
Ecco gli interventi della serata:
    
Un viaggio alla scoperta di Three.js
Sei appassionat* di videogiochi o semplicemente di animazioni grafiche? 
Allora la libreria Three.js è lo strumento che fa per te! Insieme esploreremo questo mondo virtuale, 
scopriremo le sue funzioni principali e vedremo quali applicazioni possiamo mettere in pratica per dare sfogo alla nostra creatività nel fantastico mondo della grafica 3D.

Schrodinger Hat - Angela Busato
    
WebGPU, a new dawn for web graphics
WebGPU è una tecnologia emergente che mira a fornire un'API grafica a basso livello per il web, simile a DirectX e Vulkan. 
In questo talk verrà fornita un'introduzione all'API WebGPU, i suoi vantaggi, e come iniziare a utilizzarlo. Discuteremo le prestazioni e la portabilità su diverse piattaforme, 
e mostreremo alcuni esempi di applicazioni WebGPU. Se sei un sviluppatore web interessato a costruire applicazioni grafiche avanzate, 
o un appassionato di GPU alla ricerca delle ultime tendenze in tecnologia grafica, questo talk fa al caso tuo.

Full Stack Florence - Andrea Gherardi, Chief Technical Officer @ Mirror
   
Real world GraphQL subscriptions
Le subscription sono una delle feature più interessanti di GraphQL perché permettono di ricevere dati dal server verso il client in tempo reale, 
ma ci sono alcuni aspetti importanti da considerare per poterle utilizzare: come si gestiscono le sessioni persistenti? di quali componenti aggiuntivi avremo bisogno? come funzionano l'autenticazione e l'uso della cache? 
In questo talk vedremo quali accorgimenti dobbiamo usare quando si usano le subscription in un vero ambiente di produzione, elencheremo gli errori più comuni nei quali possiamo incorrere e valuteremo in quali casi conviene utilizzarle per sfruttare al meglio le loro potenzialità.

Firenze.dev - Tiziano Pessa, Co-founder @ firenze.dev
   `,
    current: true,
    date: dayjs("2023-05-24 18:30").toDate(),
    sponsor: "Codemotion",
    place: "Impact Hub - Firenze",
    address: "Via Panciatichi, 16, 50141 Firenze FI",
    externalLink:
      "https://docs.google.com/forms/d/1xL0EKFvb4jpXfwFU47qSlqBPgZmdtwZa4BOQSqtZEnc/viewform?edit_requested=true#responses",
    type: "meetup",
  },
  {
    title: "Dal monolite ai microservizi, una storia vera",
    subtitle:
      "Approcciare il cambiamento e le sue sfide in un sistema business critical di una grande realtà internazionale",
    icon: monoliteIcon,
    image: monolite,
    abstract: `A chi non è capitato di dover mettere in produzione un&apos;applicazione critica per sistemare un piccolo bug, con il rischio di bloccare tutta la produzione? E chi di noi non ha un&apos;applicazione che consuma moltissime risorse, ma ne sfrutta solo una piccola parte?

Forse è il momento giusto per passare ai microservizi! In questo talk, Luca Lorenzon, senior software engineer di Gucci, ci racconterà il percorso per trasformare un monolite in un&apos;architettura a microservizi scalabile e flessibile. Non sarà solo una storia di successo, ma vedremo tutti i retroscena di un progetto con vari step di complessità.
    
Scopriremo come è stato gestito il cambiamento e come una grande realtà internazionale ha affrontato l&apos;adattamento a queste nuove tecnologie, in un contesto di business altamente sfidante.`,
    current: true,
    date: dayjs("2023-04-20 18:30").toDate(),
    sponsor: "Gucci",
    place: "Gucci ArtLab",
    address: "via delle nazioni unite 1, Scandicci, 50018",
    eventbriteId: "593998735207",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-dal-monolite-ai-microservizi-una-storia-vera-593998735207",
    type: "meetup",
  },
  {
    title: "La Developer Experience nelle Big Tech",
    subtitle: "Cosa dovresti sapere per lavorare in una grande azienda internazionale",
    icon: devExpIcon,
    image: devExp,
    abstract: `Ogni developer ha pensato almeno una volta nella propria carriera a come sarebbe lavorare per una Big Company, su un progetto figo e in un contesto internazionale, con tecnologie all'avanguardia e modalità di lavoro innovative.

Ma come si vive davvero all'interno di queste realtà e come ci si può orientare in una Big Company?
    
La Developer Experience è un elemento chiave in queste grandi aziende: ma cos'è in concreto?
    
Può davvero migliorare le modalità e la qualità del lavoro degli sviluppatori?
    
E possiamo applicarla anche in realtà più piccole?
    
Di tutto questo ci parlerà [Francesco Corti](https://www.linkedin.com/in/fcorti/), speaker e autore di libri su temi IT, che partendo dalle sue esperienze come Developer Advocate e Product Manager in aziende come Alfresco e Spotify, ci spiegherà come viene affrontato lo sviluppo software nelle grandi aziende internazionali e cosa è importante sapere per poter lavorare in una Big Tech.
    
Vedremo cosa sono e come vengono applicati i modelli di riferimento e andremo alla scoperta di modalità di lavoro e tecnologie differenti, allo scopo di diventare degli sviiluppatori migliori e più felici.
    
Dopo il talk ci sarà il consueto aperitivo di networking.`,
    current: true,
    date: dayjs("2023-03-02 18:30").toDate(),
    sponsor: undefined,
    place: "Camplus Firenze",
    address: "via del Romito 5-7, 50134, Firenze",
    eventbriteId: "532054077067",
    eventbriteLink: "https://www.eventbrite.com/e/biglietti-la-developer-experience-nelle-big-tech-532054077067",
    type: "meetup",
  },

  {
    title: "Christmas beer",
    subtitle: "Brindiamo al primo anno di firenze.dev e discutiamo delle prossime attività",
    icon: christmasBeerIcon,
    image: christmasBeer,
    abstract: `Un evento informale per celebrare il primo anno di firenze.dev, ma anche per conoscerci meglio, bere una birra insieme e gettare uno sguardo al futuro della community.

Niente speaker, niente talk, solo un gruppo di amici che si incontrano davanti a un bicchiere di birra per parlare di cosa ci piacerebbe fare nell'anno che sta per iniziare e raccontarci le nostre aspettative sulle attività della community per il 2023.
    
La serata è aperta a tutti i membri della community di firenze.dev e si svolgerà presso la Manifattura Tabacchi, in via delle Cascine 35 a Firenze. Ci ritroveremo a partire dalle 21.30, avremo un tavolo riservato, quindi è richiesta la prenotazione del biglietto per poterci organizzare meglio.`,
    current: true,
    date: dayjs("2022-12-15 21:30").toDate(),
    sponsor: undefined,
    place: "Manifattura Tabacchi",
    address: "Manifattura Tabacchi, Via delle Cascine 35, 50144 Firenze",
    eventbriteId: "482058017507",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-christmas-beer-482058017507",
    type: "beer",
  },
  {
    title: "Building a full-text search engine from scratch in TypeScript",
    subtitle:
      "In questo nuovo evento della community di firenze.dev, Michele Riva ci mostrerà come costruire da zero un motore di ricerca full-text.",
    icon: nextEventImage,
    image: searchEngine,
    abstract: `In questo nuovo evento della community di firenze.dev, [Michele Riva](https://twitter.com/MicheleRivaCode), Staff Engineer @ NearForm, autore e speaker di fama internazionale oltre che Google Developer Expert e Microsoft MVP, ci mostrerà come costruire da zero un motore di ricerca full-text RESTful, spiegandoci quali siano gli algoritmi e le strutture dati più adatti per questo tipo di applicazioni.
  
  
  Vedremo come mantenere prestazioni incredibilmente elevate pur lavorando con un'enorme quantità di dati e capiremo perché è così importante scegliere i giusti algoritmi e le strutture dati più adeguate per questo tipo di sistemi.
  
  Dopo il talk ci sarà il consueto aperitivo di networking.`,
    current: false,
    date: dayjs("2022-11-30 18:30").toDate(),
    sponsor: "Extendi",
    place: "Le Murate",
    address: "Piazza Madonna della Neve 50122 Firenze",
    eventbriteId: "462656256317",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-building-a-full-text-search-engine-from-scratch-in-typescript-462656256317",
    type: "meetup",
  },
  {
    title: "Rendere scalabili le moderne applicazioni di front-end",
    subtitle:
      "Scopriremo tecniche e tool per far evolvere le nostre applicazioni di front-end, da una semplice Single Page Application fino a utilizzare la Module Federation.",
    icon: moduleFederationImage,
    image: fontendApps,
    abstract: `Come superare le nuove sfide che ci pone lo sviluppo di applicazioni front-end, quali ad esempio performance, SEO e dinamicità?
      
  Partendo da una piccola app, fino ad arrivare a progetti più grandi con la Module Federation, ti forniremo dei consigli su come orientarti tra la mole di informazioni disponibili sul web.
      
  Ti aiuteremo ad identificare i giusti tools, i frameworks e le librerie per far scalare il tuo applicativo.
      
  Tutto questo riportando la nostra esperienza nello sviluppo in React di applicazioni web e native.`,
    date: dayjs("2022-10-25 18:30").toDate(),
    sponsor: "Extendi",
    place: "Le Murate",
    address: "Piazza Madonna della Neve 50122 Firenze",
    eventbriteId: "430942198717",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-rendere-scalabili-le-moderne-applicazioni-di-front-end-430942198717",
    type: "meetup",
  },
  {
    title: "Applicazioni più semplici, robuste e performanti con RabbitMQ",
    subtitle:
      "L'evento di firenze.dev per imparare come utilizzare RabbitMQ per semplificare l'architettura dei sistemi e renderli scalabili.",
    icon: rabbitImage,
    image: rabbitImageFull,
    abstract: `Il tuo nuovissimo servizio in Go non riesce a comunicare con la tua vecchia applicazione Java? Nei tuoi servizi una singola feature si trasforma in un ingestibile groviglio di chiamate? E cosa succede quando una di queste chiamate fallisce? Come è possibile gestire gli errori in un sistema distribuito?
  
A queste e ad altre domande risponderà per noi [Gabriele Santomaggio](https://twitter.com/gsantomaggio), Staff Software Engineer nel RabbitMQ team in VMware, speaker e autore di libri e articoli di tecnologia.
  
Vedremo insieme come RabbitMQ risolve questi problemi, ma anche come sia possibile sfruttarlo per semplificare l'architettura dei nostri sistemi e in che modo si possano affrontare i temi della scalabilità e della sicurezza nella gestione dei flussi di dati.
  
Dopo il talk ci sarà il consueto aperitivo di networking, offerto da Register.it.`,
    sponsor: "Register.it",
    place: "Register.it",
    address: "Viale della giovine Italia 17, 50122 Firenze",
    eventbriteId: "347290865327",
    eventbriteLink:
      "https://www.eventbrite.it/e/biglietti-applicazioni-piu-semplici-robuste-e-performanti-con-rabbitmq-347290865327",
    date: dayjs("2022-06-17 18:30").toDate(),
    type: "meetup",
  },
  {
    title: "Next level API con GraphQL",
    subtitle:
      "Cos'è GraphQL, quali sono i suoi vantaggi, come utilizzarlo al meglio e quali sono le cose da evitare assolutamente.",
    icon: graphqlImage,
    image: graphqlImageBig,
    abstract: `Si sente dire in giro che con GraphQL si possono creare API performanti, scalabili e flessibili, che se non lo usi sei un dinosauro e che adesso il REST non serve più.
  
  Noi, dopo anni che lo utilizziamo in produzione, abbiamo imparato a sfruttarne le potenzialità e ad affrontare le sfide che questa tecnologica ci pone
  
  In questo talk vedremo che cos'è GraphQL, quali sono i suoi vantaggi, come utilizzarlo al meglio e quali sono le cose da evitare assolutamente.
      
  Oltre a imparare i concetti di base, affronteremo alcuni scenari più avanzati e concluderemo l'incontro con una sessione interattiva in cui potrete porre agli speaker qualsiasi domanda sull'argomento (anche quelle più scomode!).
      
  Dopo il talk ci sarà il consueto aperitivo di networking, offerto da Register.it.`,
    sponsor: "Register.it",
    place: "Register.it",
    address: "Viale della giovine Italia 17, 50122 Firenze",
    eventbriteId: "324349707707",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-next-level-api-con-graphql-324349707707",
    date: dayjs("2022-05-11 18:30").toDate(),
    type: "meetup",
  },
  {
    title: "È solo un altro IF",
    subtitle: "Come scrivere codice migliore nella metà del tempo",
    icon: anotherifImage,
    image: anotherifImageBig,
    abstract: `Ti è mai capitato che la cosa più veloce sul momento si sia rivelata un boomerang a lungo termine, facendoti perdere talmente tanto tempo da farti maledire il giorno in cui hai deciso di fare lo sviluppatore?
  
  È successo anche a noi, ma con l'esperienza abbiamo imparato che basta applicare alcune semplici regole per scrivere un codice migliore e più manutenibile. E vogliamo condividerle con te.
      
  Dopo il talk ci sarà il consueto aperitivo di networking, offerto da Register.it.`,
    sponsor: "Register.it",
    place: "Register.it",
    address: "Viale della giovine Italia 17, 50122 Firenze",
    eventbriteId: "204947703097",
    eventbriteLink: "https://www.eventbrite.it/e/biglietti-e-solo-un-altro-if-204947703097",
    date: dayjs("2021-12-01 18:30").toDate(),
    type: "meetup",
  },
];
