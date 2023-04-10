/**DEVELOPER PORTFOLIO HEADER COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";

/*
Developer Portfolio - Header Component:
This component renders the routing and navigation links allowing the viewer to navigate the Developer Portfolio website.

The NextJS Link API is used in this component to support client-side routing/navigation to the relevant pages in this Developer Portfolio. The API allows the
viewer to route to the following pages in the Portfolio:
* The Home-Hero Page.
* The About-Bio Page.
* The Portfolio-Projects Page.
* The Contact-Details Page.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Header() {
  return (
    <div className="header flex justify-start items-center w-full h-16 bg-charcoal-black text-white sticky top-0 px-2">
      <div className="nav-link-container flex justify-evenly w-2/5">
        <Link className="no-underline text-white" href="/">
          Home
        </Link>
        <Link className="no-underline text-white" href="/about">
          About
        </Link>
        <Link className="no-underline text-white" href="/projects">
          Projects
        </Link>
        <Link className="no-underline text-white" href="/blog">
          Blog
        </Link>
        <Link className="no-underline text-white" href="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
NextJS Link API:
Researched and utilized the NextJS Link API in this Header component, allowing the viewer to route to the relevant pages in the Portfolio.
Referenced the NextJS documentation website for implementation and usage information.
https://nextjs.org/docs/api-reference/next/link

Tailwind CSS:
Tailwind CSS is a utility-first CSS framework, enabling me to style this portfolio faster and easier.
Referenced the Tailwind CSS documentation website for all utility classes used to style this portfolio website.
https://tailwindcss.com/
*/
