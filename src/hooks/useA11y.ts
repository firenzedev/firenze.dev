import { escKeyClose, trapFocus } from "@/utils/a11y";
import { useRef, useEffect } from "react";

export function useA11y({ onClose }: { onClose: () => void }) {
  const menuRef = useRef<HTMLElement | null>(null);

  function handleEscKeyClose(e: KeyboardEvent) {
    escKeyClose(e, () => {
      onClose();
    });
  }

  useEffect(() => {
    menuRef.current?.addEventListener("keydown", handleEscKeyClose);
    return () => {
      menuRef.current?.removeEventListener("keydown", handleEscKeyClose);
    };
  }, []);

  return {
    menuRef,
    trapFocus,
  };
}
