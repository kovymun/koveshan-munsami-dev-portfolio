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

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-260379327-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-260379327-1');
// </script>

/*
G-G1C4FVXEZP
G-G1C4FVXEZP

*/

/*
GA NEXTJS SCRIPT
<Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=UA-260379327-1"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-260379327-1', {
              page_path: window.location.pathname,});
            `,
        }}
      />

*/
