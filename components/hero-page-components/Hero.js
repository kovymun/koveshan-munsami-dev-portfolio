/**DEVELOPER PORTFOLIO HERO COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

/*
Developer Portfolio Hero Component:
This component renders an introduction to the Developer Portfolio website.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/
export default function Hero() {
  return (
    <div className="hero-container flex justify-center items-center w-full h-screen bg-charcoal-black text-white">
      <div className="hero-details flex flex-col justify-center items-center w-1/2 outline outline-2 outline-white text-center ml-2 p-4">
        <div className="hero-title-container">
          <h1 className="hero-title font-normal ">Koveshan Munsami</h1>
          <p className="hero-role font-medium">
            WEB DEVEL
            <FontAwesomeIcon className="code-icon" icon={faCode} />
            PER
          </p>
        </div>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
Font Awesome Icons for React/NextJS:
Researched and utilized a code bracket font awesome icon, for aesthetics, in this Hero component. 
Referenced the Font Awesome website for this icon.
https://fontawesome.com/

Tailwind CSS:
Tailwind CSS is a utility-first CSS framework, enabling me to style this portfolio faster and easier.
Referenced the Tailwind CSS documentation website for all utility classes used to style this portfolio website.
https://tailwindcss.com/
*/
