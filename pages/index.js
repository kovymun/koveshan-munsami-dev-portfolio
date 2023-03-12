/**DEVELOPER PORTFOLIO HERO PAGE**/

import Layout from "../components/Layout";
import Hero from "../components/hero-page-components/Hero";

/*
Wrapped in the "global" layout component, the "index.js" page renders the "Hero" landing page on the Developer Portfolio website. 

Refer to the "hero-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};
