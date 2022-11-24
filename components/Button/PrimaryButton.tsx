type PrimaryButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function PrimaryButton({
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <button className="bg-blue-900 font-semibold text-white hover:bg-blue-600 px-16 py-4 rounded">
      {children}
    </button>
  );
}
