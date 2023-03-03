/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO PORTFOLIO DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";

/*Stylings for the Portfolio Web Development Project Links*/
const projectLinkStyle = {
  color: "black",
  backgroundColor: "white",
  textDecoration: "none",
  borderRadius: "0.5em",
  width: "100%",
  textAlign: "center",
  padding: "0.5em 0.8em",
  marginBottom: "2em",
  fontSize: "1.2em",
};

/*
Developer Portfolio - Web Development Projects Component:
This component renders links to completed web development projects for the viewer to review. It is included as a child component of the "projects" page
of the Developer Portfolio.

The NextJS Link API is used in this component to allow the viewer to review my completed web development projects, either deployed or on a Github repository.
The API allows the viewer to review the following projects:
* Github repository link to a front-end online e-commerce website, built using HTML, CSS and JavaScript.
* Deployed Memory Card Game App, built using ReactJS. (Deployed on Render Web hosting service)

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-v-line"></div>
        <div className="projects-details">
          <Link
            style={projectLinkStyle}
            href="https://github.com/kovymun/my-online-store.git"
            target="_blank"
          >
            Front-end Online E-commerce website/store
          </Link>
          <Link
            style={projectLinkStyle}
            href="https://reactjs-card-game.onrender.com/mystery-mania-rules"
            target="_blank"
          >
            ReactJS Memory Card Game
          </Link>
        </div>
      </div>
      <style jsx>{`
        .projects-section {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #282a3a;
          color: white;
          height: 100vh;
        }

        .projects-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 70%;
        }

        .projects-container > h2 {
          font-size: 2em;
        }

        .projects-details {
          display: flex;
          flex-direction: column;
        }

        .projects-v-line {
          border-left: 2px solid white;
          height: 40vh;
        }
      `}</style>
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

CSS in JS framework called styled-jsx:
Styling for this Developer Portfolio implemented using JavaScript framework called "styled-jsx".
Referenced the Hyperion Dev: Next.js I pdf file and Styled-JSX Github repo for implementation and usage information.
HyperionDev(2021). Next.js I Pages (7-8)
https://github.com/vercel/styled-jsx
*/
