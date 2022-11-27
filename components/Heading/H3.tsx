import { HeadingProps } from "./HeadingTypes";

export default function H3({ children }: HeadingProps) {
  return (
    <h3 className="font-serif font-semibold text-2xl lg:text-3xl my-6 tracking-wide">
      {children}
    </h3>
  );
}
