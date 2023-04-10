/**DEVELOPER PORTFOLIO HASHING ARTICLE PAGE**/

import Layout from "../components/Layout";
import Hashing from "../components/blog-page-components/Hashing";

/*
Wrapped in the "global" layout component, the "hashing" article page renders an article on "Hashing in JavaScript" on the Developer Portfolio website. 
Refer to the "blog-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <Hashing />
  </Layout>
);
