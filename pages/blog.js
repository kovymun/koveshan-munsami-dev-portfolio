/**DEVELOPER PORTFOLIO BLOG PAGE**/

import Layout from "../components/Layout";
// import Projects from "../components/projects-components/Projects";
import Blog from "../components/blog-page-components/Blog";

/*
Wrapped in the "global" layout component, the "blogs" page renders links to all technical blog articles on the Developer Portfolio website. 
Refer to the "blog-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <Blog />
  </Layout>
);
