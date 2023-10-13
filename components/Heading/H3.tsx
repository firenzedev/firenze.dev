import { HeadingProps } from "./HeadingTypes";
import { Gelasio } from "@next/font/google";

const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  weight: ["400", "700"],
});

export default function H3({ children }: HeadingProps) {
  return (
    <h3
      className={`${gelasio.variable} font-serif font-semibold text-2xl mt-6 mb-2 tracking-wide`}
    >
      {children}
    </h3>
  );
}
