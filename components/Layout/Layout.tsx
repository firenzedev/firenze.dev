import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import CookieConsent from "../Banners/CookieConsent";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieConsent/>
    </>
  );
}
