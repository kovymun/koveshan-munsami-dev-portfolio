/**DEVELOPER PORTFOLIO BLOG COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";

/*
Developer Portfolio - Blog Component:
This component renders links to all technical blog articles for the viewer to peruse. It is included as a child component of the "blog" page
of the Developer Portfolio.

The NextJS Link API is used in this component to allow the viewer to be re-directed to all technical blog articles.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Blog() {
  return (
    <div className="projects-section flex justify-center items-center bg-charcoal-black text-white w-full h-screen">
      <div className="projects-container flex justify-evenly items-center w-full">
        <h2 className="projects-title text-4xl">Blog Articles</h2>
        <div className="projects-v-line border-l-2 border-white"></div>
        <div className="projects-details flex flex-col justify-center items-center">
          <Link
            className="project-link rounded-lg text-black bg-white no-underline w-full text-lg text-center py-2 px-3.5 mb-8"
            href="/hashing"
            target="_blank"
          >
            How JavaScript uses Hashing
          </Link>
        </div>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
NextJS Link API:
Researched and utilized the NextJS Link API in this Project display component, allowing the viewer to review completed web development projects as shared in 
the Portfolio.
Referenced the Hyperion Dev: Next.js I pdf file and NextJS documentation website for implementation and usage information.
HyperionDev(2021). Next.js I Pages (6-7)
https://nextjs.org/docs/api-reference/next/link

Tailwind CSS:
Tailwind CSS is a utility-first CSS framework, enabling me to style this portfolio faster and easier.
Referenced the Tailwind CSS documentation website for all utility classes used to style this portfolio website.
https://tailwindcss.com/
*/
