import { HeadingProps } from "./HeadingTypes";

export default function H2({ children }: HeadingProps) {
  return (
    <h2 className="text-3xl font-serif font-semibold tracking-wider">
      {children}
    </h2>
  );
}
