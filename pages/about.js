/**DEVELOPER PORTFOLIO ABOUT PAGE**/

import Layout from "../components/Layout";
import AboutMe from "../components/about-page-components/AboutMe";
import Education from "../components/about-page-components/Education";
import Skills from "../components/about-page-components/Skills";
import WorkExperience from "../components/about-page-components/WorkExperience";

/*
Wrapped in the "global" layout component, the "about" page renders the following information on the Developer Portfolio website:
* About section - brief personal biography.
* Education History.
* Work Experiences.
* List of Skills and Competencies.

Refer to the "about-page-components" folder in the components directory for further details on layout, design and styling of child components of this page.
*/
export default () => (
  <Layout>
    <AboutMe />
    <Education />
    <WorkExperience />
    <Skills />
  </Layout>
);
