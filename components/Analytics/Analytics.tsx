import Script from "next/script";
import { runningInProduction } from "../../config/Config";

export default function Analytics() {
  const addAnalytics = runningInProduction();
  if (!addAnalytics) {
    return null;
  }
  return (
    <>
      <Script
        async
        id="google-analytics-import"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-206629030-1"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {` window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}
gtag('set', 'linker', {"domains":["firenze.dev"]} );
gtag("js", new Date());
gtag("set", "developer_id.dZTNiMT", true);
gtag("config", "UA-206629030-1", {"anonymize_ip":true});
gtag("config", "G-VN97D6JYJZ");`}
      </Script>

      <>
        <Script id="fb-analytics" strategy="afterInteractive">
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
            loading="lazy"
            alt="facebook pixel"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=411993527211522&ev=PageView&noscript=1"
          />
          <img
            loading="lazy"
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
    </>
  );
}
