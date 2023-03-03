/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO LAYOUT COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Head from "next/head";
import Header from "./Header";

/*
Developer Portfolio NextJS Layout component:
This component renders the "global" Layout component to be used in this Developer Portfolio. 

It renders the "global" styles end elements to be used in the portfolio, and the Header component allowing viewer navigation of the Portfolio website.
It also includes a NextJS "Head" component to render meta data, in this instance the "title", on the website.

It incorporates styling using "styled-jsx" framework to reset all CSS default settings, and add a new font family to the Portfolio website.

Font-Family Open Sans, used in this Portfolio, referenced from "Google Fonts".
*/
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Koveshan Munsami - Developer Portfolio</title>
      </Head>
      <Header />
      {children}
      <style global jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Open Sans", sans-serif;
          }
        `}
      </style>
    </div>
  );
}

/*REFERENCES*/
/*
NextJS Layout component:
Referenced the examples provided by Hyperion Dev, and the NextJS documentation website for implementation and usage information for the "Layout component".
https://nextjs.org/docs/basic-features/layouts#single-shared-layout-with-custom-app

CSS in JS framework called styled-jsx:
Styling for this Developer Portfolio implemented using JavaScript framework called "styled-jsx".
Referenced the Hyperion Dev: Next.js I pdf file and Styled-JSX Github repo for this information.
HyperionDev(2021). Next.js I Pages (7-8)
https://github.com/vercel/styled-jsx

NextJS Head component:
Implemented a NextJS Head component to add meta data to this portfolio website.
Referenced the WebDev tutor website for implementation and usage information.
https://www.webdevtutor.net/blog/add-meta-tags-in-nextjs
*/
