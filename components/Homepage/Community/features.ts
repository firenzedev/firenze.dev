import trasversale from "./icons/trasversale.svg";
import open from "./icons/open.svg";
import free from "./icons/free.svg";
import easy from "./icons/easy.svg";
import active from "./icons/active.svg";
import useful from "./icons/useful.svg";
import collaborative from "./icons/collaborative.svg";
import present from "./icons/present.svg";

export type FeatureType = {
  icon: any;
  title: string;
  text: string;
};

export const FEATURES: FeatureType[] = [
  {
    icon: trasversale,
    title: "Trasversale",
    text: "Ci piacciono tutti i linguaggi e le tecnologie, purché si parli di codice!",
  },
  {
    icon: open,
    title: "Aperta",
    text: "Chiunque può partecipare: professionisti, appassionati di coding o semplici curiosi",
  },
  {
    icon: free,
    title: "Libera",
    text: "La partecipazione agli eventi e alle nostre attività è completamente gratuita",
  },
  {
    icon: easy,
    title: "Easy",
    text: "Un approccio amichevole e aperto al contributo di tutti",
  },
  {
    icon: active,
    title: "Attiva",
    text: "Organizziamo periodicamente eventi divulgativi, in presenza e online",
  },
  {
    icon: useful,
    title: "Utile",
    text: "Un gruppo di appassionati con cui confrontarti per affrontare i problemi più spinosi",
  },
  {
    icon: collaborative,
    title: "Collaborativa",
    text: "Vogliamo far circolare la conoscenza e imparare gli uni dagli altri",
  },
  {
    icon: present,
    title: "Presente",
    text: "Un solido riferimento per chi si sta avvicinando al mondo dello sviluppo",
  },
];
