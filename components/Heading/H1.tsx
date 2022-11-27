import { HeadingProps } from "./HeadingTypes";

export default function H1({ children, className }: HeadingProps) {
  const classes = "text-3xl lg:text-4xl font-bold " + (className ? className : "");
  return <h1 className={classes}>{children}</h1>;
}
