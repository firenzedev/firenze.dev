import Script from "next/script";

export default function CookieConsent() {
  return (
    <>
      {process.env.NODE_ENV === "production" && (
        <>
          <Script
            async
            id="iubenda-cookie-consent-stub"
            strategy="afterInteractive"
            src="//cdn.iubenda.com/cs/gpp/stub.js"
          ></Script>
          <Script
            async
            id="iubenda-cookie-consent-cs"
            strategy="afterInteractive"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
          ></Script>
          <Script
            id="iubenda-cookie-consent-script"
            strategy="afterInteractive"
          >
            {`
var _iub = _iub || [];
_iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"countryDetection":true,"enableLgpd":true,"enableUspr":true,"floatingPreferencesButtonDisplay":"bottom-right","lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":2994679,"whitelabel":false,"cookiePolicyId":94448466,"lang":"it", "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#334757","acceptButtonDisplay":true,"backgroundColor":"#F4FBFF","closeButtonDisplay":false,"customizeButtonCaptionColor":"#14213D","customizeButtonColor":"#DCE2E6","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#334757","rejectButtonDisplay":true,"showPurposesToggles":true,"theme":"winter-neutral","textColor":"#45423F" }};
`}
          </Script>
        </>
      )}
    </>
  );
}
