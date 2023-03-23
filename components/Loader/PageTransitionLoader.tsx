import { useRouter } from "next/router";
import { useEffect } from "react";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { pageview } from "../../lib/gtm";

export default function PageTransitionLoader() {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url: string, ...p: any[]) => {
      NProgress.start();
    };
    const handleComplete = (url: string) => {
      NProgress.done();
      pageview();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return null;
}
