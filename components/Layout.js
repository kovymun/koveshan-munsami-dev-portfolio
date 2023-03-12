/**DEVELOPER PORTFOLIO LAYOUT COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Head from "next/head";
import Header from "./Header";

/*
Developer Portfolio NextJS Layout component:
This component renders the "global" Layout component to be used in this Developer Portfolio. 

It renders the "global" styles end elements to be used in the portfolio, and the Header component allowing viewer navigation of the Portfolio website.
It also includes a NextJS "Head" component to render meta data, in this instance the "title", of the website.

All stylings for this Developer Portfolio are implemented using standard CSS, and CSS framework "Tailwind CSS".
*/
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Koveshan Munsami - Developer Portfolio</title>
      </Head>
      <Header />
      {children}
    </div>
  );
}

/**REFERENCES**/
/*
NextJS Layout component:
Referenced the examples provided by Hyperion Dev, and the NextJS documentation website for implementation and usage information for the "Layout component".
https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app

NextJS Head component:
Implemented a NextJS Head component to add meta data to this portfolio website.
Referenced the WebDev tutor website for implementation and usage information.
https://www.webdevtutor.net/blog/add-meta-tags-in-nextjs

Tailwind CSS:
Tailwind CSS is a utility-first CSS framework, enabling me to style this portfolio faster and easier.
Referenced the Tailwind CSS documentation website for all utility classes used to style this portfolio website.
https://tailwindcss.com/
*/
