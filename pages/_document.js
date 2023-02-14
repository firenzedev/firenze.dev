import Document, { Html, Head, Main, NextScript } from "next/document";
import Analytics from "../components/Analytics/Analytics";
import {GTM_ID} from '../lib/gtm'
import GTM from "../components/Analytics/GTM";

const domain = "staging.firenze.dev";

const title = "firenze.dev, la community di sviluppatori a firenze";
const description =
    "firenze.dev è la community degli sviluppatori a Firenze: organizziamo incontri ed eventi gratuiti per favorire l&#039;apprendimento e il miglioramento continuo";
const image = "https://staging.firenze.dev/social_preview.png";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="it" dir="ltr">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta property="og:locale" content="it_IT"/>
                    <link rel="canonical" href="https://staging.firenze.dev"/>
                    <meta name="apple-mobile-web-app-title" content={title}/>
                    <meta name="description" content={description}/>
                    <meta name="apple-mobile-web-app-title" content={title}/>

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
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>

                    <meta property="og:url" content={`https://${domain}`}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:title" content={title}/>
                    <meta property="og:site_name" content="firenze.dev"/>
                    <meta property="og:description" content={description}/>
                    <meta property="og:image" content={image}/>
                    <meta property="og:image:width" content="1200"/>
                    <meta property="og:image:height" content="628"/>
                    <meta property="og:image:type" content="image/png"/>

                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:site" content="@firenzeDev"/>
                    <meta name="twitter:creator" content="@firenzeDev"/>
                    <meta name="twitter:image" content={image}/>
                    <meta name="twitter:title" content={title}></meta>
                    <meta name="twitter:description" content={description}/>
                    <meta name="twitter:label1" content="Tempo di lettura stimato"/>
                    <meta name="twitter:data1" content="3 minuti"/>

                    <Analytics/>
                    <GTM/>
                </Head>
                <body>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{display: 'none', visibility: 'hidden'}}
                    />
                </noscript>
                <Main/>
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
