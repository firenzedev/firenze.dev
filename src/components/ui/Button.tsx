type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function PrimaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-blue-900 font-semibold text-white hover:bg-blue-600 px-16 py-4 rounded tracking-wider focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="bg-white border border-blue-900 font-semibold hover:text-white hover:bg-blue-900 px-16 py-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
}

export function MiniButton({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border-blue-900 bg-blue-200 text-blue-900 no-underline hover:bg-blue-900 hover:text-white transition-all px-6 p-2 border-2 rounded ml-auto mt-4 inline-flex duration-150 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
}
