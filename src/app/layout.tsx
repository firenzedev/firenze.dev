import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Layout/Header/Header";
import Footer from "@/components/ui/Layout/Footer/Footer";
import { GTM_ID } from "@/lib/gtm";
import { GoogleTagManager } from '@next/third-parties/google'
 import Analytics from "@/components/Analytics/Analytics";

const font = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });
const domain = process.env.DOMAIN ?? "firenze.dev";
const protocol = process.env.PROTOCOL ?? "https";

const title = "firenze.dev, la community di sviluppatori a firenze";
const description =
  "firenze.dev è la community degli sviluppatori a Firenze: organizziamo incontri ed eventi gratuiti per favorire l&#039;apprendimento e il miglioramento continuo";
const image = `${protocol}://${domain}/social_preview.png`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [image],
    title,
    description,
    siteName: title,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta property="og:locale" content="it_IT" />
        <link rel="canonical" href={`${protocol}://firenze.dev`} />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link
          rel="icon"
          href={`${protocol}://${domain}/favicon-1-150x150.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          href={`${protocol}://${domain}/favicon-1-300x300.png`}
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href={`${protocol}://${domain}/favicon-1-300x300.png`}
        />
        <meta
          name="msapplication-TileImage"
          content={`${protocol}://${domain}/favicon-1-300x300.png`}
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content={`${protocol}://${domain}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@firenzeDev" />
        <meta name="twitter:creator" content="@firenzeDev" />
        <meta name="twitter:label1" content="Tempo di lettura stimato" />
        <meta name="twitter:data1" content="3 minuti" />
      </head>
      <body className={font.className + " dark:bg-gray-900 dark:text-white"}>
        {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
        <Header />
        <div className="mt-20">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
