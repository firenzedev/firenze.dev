import { HeadingProps } from "./HeadingTypes";

export default function H4({children} : HeadingProps) {
    return <h4 className="text-xl mb-4 tracking-wide">{children}</h4>
}