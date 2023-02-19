export function runningInProduction(): boolean {
    console.log(process.env.NEXT_PUBLIC_PRODUCTION)
  return process.env.NEXT_PUBLIC_PRODUCTION === "true";
}
