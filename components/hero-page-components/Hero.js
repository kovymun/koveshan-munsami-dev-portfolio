/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO HERO COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

/*
Developer Portfolio Hero Component:
This component renders an introduction to the Developer Portfolio website.

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-details">
        <div className="hero-title-container">
          <h1 className="hero-title">Koveshan Munsami</h1>
          <p className="hero-role">
            WEB DEVEL
            <FontAwesomeIcon className="code-icon" icon={faCode} />
            PER
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .hero-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            color: white;
            background-color: #282a3a;
          }

          .hero-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            outline: 2px solid white;
            text-align: center;
            margin-left: 0.5em;
            padding: 1em;
          }

          .hero-title {
            font-weight: 400;
            font-size: 4rem;
          }

          .hero-role {
            font-weight: 500;
            font-size: 4rem;
          }

          .code-icon {
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
}

/**REFERENCES**/
/*
Font Awesome Icons for React/NextJS:
Researched and utilized a code bracket font awesome icon, for aesthetics, in this Hero component. 
Referenced the Font Awesome website for this icon.

CSS in JS framework called styled-jsx:
Styling for this Developer Portfolio implemented using JavaScript framework called "styled-jsx".
Referenced the Hyperion Dev: Next.js I pdf file and Styled-JSX Github repo for implementation and usage information.
HyperionDev(2021). Next.js I Pages (7-8)
https://github.com/vercel/styled-jsx
*/
