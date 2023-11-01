import Image from "next/image";
import logo from "./firenzedev_darkbkg_shadow.svg";

export function Logo() {
  return (
    <Image
      src={logo}
      alt="firenze.dev logo"
      width={256}
      height={256}
      priority
      fetchPriority="high"
    />
  );
}
