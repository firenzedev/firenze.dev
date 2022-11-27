import { HeadingProps } from "./HeadingTypes";

export default function H2({ children }: HeadingProps) {
  return (
    <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-wider">
      {children}
    </h2>
  );
}
