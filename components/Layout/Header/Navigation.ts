export interface SiteLink {
  name: string;
  href: string;
}
export const navigation: SiteLink[] = [
  { name: "Home", href: "/" },
  { name: "Eventi", href: "/eventi" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
  { name: "Contatti", href: "/contatti" },
];
