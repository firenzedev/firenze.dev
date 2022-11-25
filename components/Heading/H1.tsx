import { HeadingProps } from "./HeadingTypes";

export default function H1({ children }: HeadingProps) {
  return <h1 className="text-4xl font-bold">{children}</h1>;
}
