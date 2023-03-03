/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO HEADER COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";

/*Stylings for the Header Navigation Links*/
const linkStyle = {
  color: "white",
  textDecoration: "none",
};

/*
Developer Portfolio - Header Component:
This component renders the routing and navigation links allowing the viewer to navigate the Developer Portfolio website.

The NextJS Link API is used in this component to support client-side routing/navigation to the relevant pages in this Developer Portfolio. The API allows the
viewer to route to the following pages in the Portfolio:
* The Home-Hero Page.
* The About-Bio Page.
* The Portfolio-Projects Page.
* The Contact-Details Page.

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/

export default function Header() {
  return (
    <div className="header">
      <div className="nav-link-container">
        <Link style={linkStyle} href="/">
          Home
        </Link>
        <Link style={linkStyle} href="/about">
          About
        </Link>
        <Link style={linkStyle} href="/projects">
          Projects
        </Link>
        <Link style={linkStyle} href="/contact">
          Contact
        </Link>
      </div>

      <style jsx>
        {`
          .header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            height: 10vh;
            background-color: #282a3a;
            color: white;
            padding: 0 0.5em;
            position: fixed;
          }
          .nav-link-container {
            display: flex;
            justify-content: space-evenly;
            width: 40%;
          }
        `}
      </style>
    </div>
  );
}

/*REFERENCES*/
/*
NextJS Link API:
Researched and utilized the NextJS Link API in this Header component, allowing the viewer to route to the relevant pages in the Portfolio.
Referenced the Hyperion Dev: Next.js I pdf file and NextJS documentation website for implementation and usage information.
HyperionDev(2021). Next.js I Pages (6-7)
https://nextjs.org/docs/api-reference/next/link

CSS in JS framework called styled-jsx:
Styling for this Developer Portfolio implemented using JavaScript framework called "styled-jsx".
Referenced the Hyperion Dev: Next.js I pdf file and Styled-JSX Github repo for implementation and usage information.
HyperionDev(2021). Next.js I Pages (7-8)
https://github.com/vercel/styled-jsx
*/
