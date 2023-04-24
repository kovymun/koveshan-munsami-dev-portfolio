/**DEVELOPER PORTFOLIO BIG-O-NOTATION ARTICLE PAGE**/

import Layout from "../components/Layout";
import BigONotation from "../components/blog-page-components/BigONotation";

/*
Wrapped in the "global" layout component, the "big-o-notation" page renders an article on "Big O notation basics for web developers" on the Developer Portfolio website. 
Refer to the "blog-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <BigONotation />
  </Layout>
);
