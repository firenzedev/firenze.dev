import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import PageTransitionLoader from "../components/Loader/PageTransitionLoader";
import GTM from "../components/Analytics/GTM";
import Analytics from "../components/Analytics/Analytics";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GTM />
      <Layout>
        <PageTransitionLoader />
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </>
  );
}
