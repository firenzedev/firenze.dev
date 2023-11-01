import { ReactNode } from "react";

interface BubbleProps {
  children: ReactNode;
  direction: "left" | "right";
}

export default function Bubble({ children, direction }: Readonly<BubbleProps>) {
  return (
    <div className="flex items-center">
      {direction === "left" && (
        <div className="w-4 flex-none overflow-hidden ">
          <div className="h-6 bg-gray-100 -rotate-45 transform origin-top-right"></div>
        </div>
      )}
      <div
        className={`${
          direction === "left"
            ? "mr-auto bg-gray-100 p-4 my-3 rounded-md "
            : "ml-auto bg-slate-200 p-4 my-3 rounded-md"
        }`}
      >
        {children}
      </div>
      {direction === "right" && (
        <div className="w-4 flex-none overflow-hidden ">
          <div className="h-6 bg-slate-200 rotate-45 transform origin-top-left"></div>
        </div>
      )}
    </div>
  );
}
