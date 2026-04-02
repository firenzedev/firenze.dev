export function trapFocus(e: React.KeyboardEvent) {
  if (e.key !== "Tab") return;

  const container = e.currentTarget.closest("ul, [role='menu']");
  const focusable = Array.from(
    container?.querySelectorAll<HTMLElement>(
      "a, button, [tabindex]:not([tabindex='-1'])",
    ) ?? [],
  );

  const currentIndex = focusable.indexOf(e.currentTarget as HTMLElement);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === focusable.length - 1;

  if (isFirst && e.shiftKey) {
    e.preventDefault();
    focusable.at(-1)?.focus();
  }
  if (isLast && !e.shiftKey) {
    e.preventDefault();
    focusable[0]?.focus();
  }
}

export function escKeyClose(e: KeyboardEvent, onClose: () => void) {
  if (e.key === "Escape") {
    e.preventDefault();
    onClose();
  }
}
