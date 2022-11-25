import { ButtonProps } from "./ButtonTypes";

export default function SecondaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-white border border-blue-900 font-semibold hover:text-white hover:bg-blue-900 px-16 py-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
