/**DEVELOPER PORTFOLIO _APP.JS PAGE INITIALIZATION FILE**/

import "../styles/styles.css";
import "../styles/globals.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-G1C4FVXEZP"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G1C4FVXEZP', {
              page_path: window.location.pathname,});
            `,
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
