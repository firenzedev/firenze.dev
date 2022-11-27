export interface SiteLink {
  name: string;
  href: string;
}
export const navigation: SiteLink[] = [
  { name: "Homepage", href: "/" },
  { name: "Eventi", href: "/eventi" },
  { name: "Community", href: "/community" },
  { name: "About", href: "/about" },
];
