import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import PageTransitionLoader from "../components/Loader/PageTransitionLoader";
import CookieConsent from "../components/CookieConsent/CookieConsent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <PageTransitionLoader />
      <Component {...pageProps} />
      <CookieConsent />
    </Layout>
  );
}
