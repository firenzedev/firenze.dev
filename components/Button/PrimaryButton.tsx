import { ButtonProps } from "./ButtonTypes";

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-900 font-semibold text-white hover:bg-blue-600 px-16 py-4 rounded tracking-wider"
      {...props}
    >
      {children}
    </button>
  );
}
