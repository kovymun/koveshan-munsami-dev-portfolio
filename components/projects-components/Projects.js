/**DEVELOPER PORTFOLIO WEB PROJECT DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";

/*
Developer Portfolio - Web Development Projects Component:
This component renders links to completed web development projects for the viewer to review. It is included as a child component of the "projects" page
of the Developer Portfolio.

The NextJS Link API is used in this component to allow the viewer to review my completed web development projects, either deployed or on a Github repository.
The API allows the viewer to review the following projects:
* Github repository link to a front-end online e-commerce website, built using HTML, CSS and JavaScript.
* Deployed Memory Card Game App, built using ReactJS. (Deployed on Render Web hosting service)
* Github repository link to a full stack iTunes Search app, built using ReactJS, ExpressJS, Bootstrap V5 and CSS.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Projects() {
  return (
    <div className="projects-section flex justify-center items-center bg-charcoal-black text-white w-full h-screen">
      <div className="projects-container flex justify-around items-center">
        <h2 className="projects-title text-4xl">Projects</h2>
        <div className="projects-v-line border-l-2 border-white"></div>
        <div className="projects-details flex flex-col justify-center items-center">
          <Link
            className="project-link rounded-lg text-black bg-white no-underline w-full text-xl text-center py-2 px-3.5 mb-8"
            href="https://github.com/kovymun/my-online-store.git"
            target="_blank"
          >
            Front-end Online E-commerce website/store
          </Link>
          <Link
            className="project-link rounded-lg text-black bg-white no-underline w-full text-xl text-center py-2 px-3.5 mb-8"
            href="https://reactjs-card-game.onrender.com/mystery-mania-rules"
            target="_blank"
          >
            ReactJS Memory Card Game
          </Link>
          <Link
            className="project-link rounded-lg text-black bg-white no-underline w-full text-xl text-center py-2 px-3.5 mb-8"
            href="https://github.com/kovymun/itunes-search-app"
            target="_blank"
          >
            iTunes Search App
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
