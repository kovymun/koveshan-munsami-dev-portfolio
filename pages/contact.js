/**DEVELOPER PORTFOLIO CONTACT DETAILS PAGE**/

import Layout from "../components/Layout";
import Contact from "../components/contact-page-components/Contact";
// import MyApp from "./_app";
import Script from "next/script";

/*
Wrapped in the "global" layout component, the "contact" page renders all my contact details on the Developer Portfolio website. 
Refer to the "contact-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => {
  return (
    <div>
      <Layout>
        <Contact />
      </Layout>
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
    </div>
  );
};
