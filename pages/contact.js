/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO CONTACT DETAILS PAGE**/

import Layout from "../components/Layout";
import Contact from "../components/contact-page-components/Contact";

/*
Wrapped in the "global" layout component, the "contact" page renders all my contact details on the Developer Portfolio website. 
Refer to the "contact-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <Contact />
  </Layout>
);
