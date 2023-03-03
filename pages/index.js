/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO HERO PAGE**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

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

/**REFERENCES**/
/* Examples provided by Hyperion Dev as part of the package for this task. */
