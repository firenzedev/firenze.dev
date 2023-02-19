export function runningInProduction(): boolean {
  return process.env.NEXT_PUBLIC_PRODUCTION === "true";
}
