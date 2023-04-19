/**DEVELOPER PORTFOLIO CONCURRENCY ARTICLE PAGE**/

import Layout from "../components/Layout";
import Concurrency from "../components/blog-page-components/Concurrency";

/*
Wrapped in the "global" layout component, the "concurrency" page renders an article on "Concurrency in Web Development" on the Developer Portfolio website. 
Refer to the "blog-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <Concurrency />
  </Layout>
);
