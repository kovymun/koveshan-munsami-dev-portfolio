/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO PROJECTS PAGE**/

import Layout from "../components/Layout";
import Projects from "../components/projects-components/Projects";

/*
Wrapped in the "global" layout component, the "projects" page renders links to completed web development projects on the Developer Portfolio website. 
Refer to the "projects-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <Projects />
  </Layout>
);
