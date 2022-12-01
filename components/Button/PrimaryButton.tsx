import { ButtonProps } from "./ButtonTypes";

export default function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-900 font-semibold text-white hover:bg-blue-600 px-16 py-4 rounded tracking-wider focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
}
