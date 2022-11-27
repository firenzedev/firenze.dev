import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const domain = "staging.firenze.dev";

const title = "firenze.dev, la community di svilupaptori a firenze";
const description =
  "firenze.dev è la community degli sviluppatori a Firenze: organizziamo incontri ed eventi gratuiti per favorire l&#039;apprendimento e il miglioramento continuo";
const image = "https://staging.firenze.dev/social_preview.png";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:locale" content="it_IT" />
          <link rel="canonical" href="https://staging.firenze.dev" />
          <meta name="apple-mobile-web-app-title" content={title} />
          <meta name="description" content={description} />
          <meta name="apple-mobile-web-app-title" content={title} />

          <link
            rel="icon"
            href={`https://${domain}/favicon-1-150x150.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            href={`https://${domain}/favicon-1-300x300.png"`}
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href={`https://${domain}/favicon-1-300x300.png"`}
          />
          <meta
            name="msapplication-TileImage"
            content={`https://${domain}/favicon-1-300x300.png"`}
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta property="og:url" content={`https://${domain}`} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content="firenze.dev" />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="628" />
          <meta property="og:image:type" content="image/png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@firenzeDev" />
          <meta name="twitter:creator" content="@firenzeDev" />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:title" content={title}></meta>
          <meta name="twitter:description" content={description} />
          <meta name="twitter:label1" content="Tempo di lettura stimato" />
          <meta name="twitter:data1" content="3 minuti" />

          {process.env.NODE_ENV === "production" && (
            <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          )}
          <link rel="dns-prefetch" href="//fonts.googleapis.com" />

          {process.env.NODE_ENV === "production" && (
            <Script
              async
              id="google-analytics-import"
              strategy="lazyOnload"
              src="https://www.googletagmanager.com/gtag/js?id=UA-206629030-1"
            ></Script>
          )}
          {process.env.NODE_ENV === "production" && (
            <Script id="google-analytics" strategy="lazyOnload">
              {` window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag('set', 'linker', {"domains":["firenze.dev"]} );
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "UA-206629030-1", {"anonymize_ip":true});
gtag("config", "G-VN97D6JYJZ");`}
            </Script>
          )}

          {process.env.NODE_ENV === "production" && (
            <>
              <Script id="fb-analytics" strategy="lazyOnload">
                {`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '411993527211522');
	fbq('init', '895145221386091');
      fbq('track', 'PageView');
`}
              </Script>

              <noscript>
                <img
                  alt="facebook pixel"
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.facebook.com/tr?id=411993527211522&ev=PageView&noscript=1"
                />
                <img
                  alt="facebook pixel"
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.facebook.com/tr?id=895145221386091&ev=PageView&noscript=1"
                />
              </noscript>
              <meta
                name="facebook-domain-verification"
                content="2bv7jbk21uj751fi2ofguvdqg3c5p3"
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
