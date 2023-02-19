export function runningInProduction(): boolean {
  console.log("running in production", process.env.NEXT_PUBLIC_PRODUCTION);
  return process.env.NEXT_PUBLIC_PRODUCTION === "true";
}
