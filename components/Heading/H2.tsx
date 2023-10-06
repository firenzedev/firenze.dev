import { HeadingProps } from "./HeadingTypes";
import { Gelasio } from "@next/font/google";

const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  weight: ["400", "700"],
});

export default function H2({ children, className }: HeadingProps) {
  return (
    <h2
      className={`${gelasio.variable} text-2xl lg:text-3xl font-serif font-bold tracking-wider ${className}`}
    >
      {children}
    </h2>
  );
}
