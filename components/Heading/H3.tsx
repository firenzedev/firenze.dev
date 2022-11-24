import { HeadingProps } from "./HeadingTypes";

export default function H3({children} : HeadingProps) {
    return <h3 className="font-serif font-bold text-3xl my-6 tracking-wide">{children}</h3>
}