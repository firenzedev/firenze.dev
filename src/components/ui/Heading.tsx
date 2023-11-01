import { ReactNode } from "react";
import { Gelasio } from "next/font/google";

export type HeadingProps = {
  children: ReactNode;
  className?: string;
};

const gelasio = Gelasio({
  subsets: ["latin"],
  variable: "--font-gelasio",
  weight: ["400", "700"],
});

export function H1({ children, className }: Readonly<HeadingProps>) {
  const classes = "text-3xl lg:text-4xl font-bold " + (className || "");
  return <h1 className={classes}>{children}</h1>;
}

export function H2({ children, className }: Readonly<HeadingProps>) {
  return (
    <h2
      className={`${gelasio.variable} text-2xl lg:text-3xl font-serif font-bold tracking-wider ${className}`}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: Readonly<HeadingProps>) {
  return (
    <h3
      className={`${gelasio.variable} font-serif font-semibold text-2xl mt-6 mb-2 tracking-wide`}
    >
      {children}
    </h3>
  );
}

export function H4({ children }: Readonly<HeadingProps>) {
  return <h4 className="text-xl mb-4 tracking-wide">{children}</h4>;
}
