"use client"
import Script from "next/script";

export default function SubscribeForm() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Script id="sender-init" strategy="afterInteractive">
        {` 
  (function (s, e, n, d, er) {
    s['Sender'] = er;
    s[er] = s[er] || function () {
      (s[er].q = s[er].q || []).push(arguments)
    }, s[er].l = 1 * new Date();
    var a = e.createElement(n),
        m = e.getElementsByTagName(n)[0];
    a.async = 1;
    a.src = d;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
        sender('a21ef50bc68914')
  `}
      </Script>
      <div
        style={{ textAlign: "left" }}
        className="sender-form-field"
        data-sender-form-id="lmj7ikpkav4lnd7u1yq"
      ></div>
    </div>
  );
}
