import { escKeyClose, trapFocus } from "@/utils/a11y";
import { useRef, useEffect, useCallback } from "react";

export function useA11y({ onClose }: { onClose: () => void }) {
  const menuRef = useRef<HTMLElement | null>(null);

  const handleEscKeyClose = useCallback(
    (e: KeyboardEvent) => {
      escKeyClose(e, onClose);
    },
    [onClose]
  );

  useEffect(() => {
    const node = menuRef.current;
    node?.addEventListener("keydown", handleEscKeyClose);
    return () => {
      node?.removeEventListener("keydown", handleEscKeyClose);
    };
  }, [handleEscKeyClose]);

  return {
    menuRef,
    trapFocus,
  };
}
