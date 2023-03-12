/**DEVELOPER PORTFOLIO CONTACT DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

/*
Developer Portfolio - Contact Details Component:
This component renders all my relevant contact details, including links to my Github and LinkedIn social media platforms, to be included as a child component 
in the "contact" page of the Developer Portfolio website.

The NextJS Link API is used in this component to route the viewer to my Github and LinkedIn social media platforms.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Contact() {
  return (
    <div className="contact-page bg-charcoal-black flex justify-center items-center w-full h-screen text-white">
      <div className="contact-details flex justify-around items-center w-3/4">
        <h2 className="text-4xl">Contact Details</h2>
        <div className="contact-v-line border-l-2 border-white"></div>
        <div className="contact-container">
          <div className="contact-info text-xl">
            <p className="contact-sub-info mb-2">Name: Koveshan Munsami</p>
            <p className="contact-sub-info mb-2">
              Contact Number: 083 946 9993
            </p>
            <p className="contact-sub-info mb-2">
              Email Address: kov.munsami@gmail.com
            </p>
            <div className="contact-social">
              <p className="contact-sub-info mb-2">Social Media:</p>
              <div className="social-list w-1/3">
                <div className="social-anchor mb-2">
                  <Link
                    className="contact-link no-underline text-white"
                    href="https://www.linkedin.com/in/koveshan-munsami/"
                    target="_blank"
                  >
                    <div className="linkedin-github flex justify-between items-center duration-200 hover:scale-125">
                      <p>LinkedIn</p>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </Link>
                </div>
                <div className="social-anchor mb-2">
                  <Link
                    className="contact-link no-underline text-white"
                    href="https://github.com/kovymun"
                    target="_blank"
                  >
                    <div className="linkedin-github flex justify-between items-center duration-200 hover:scale-125">
                      <p>Github</p>
                      <FontAwesomeIcon icon={faGithub} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**REFERENCES**/
/*
Tailwind CSS:
Tailwind CSS is a utility-first CSS framework, enabling me to style this portfolio faster and easier.
Referenced the Tailwind CSS documentation website for all utility classes used to style this portfolio website.
https://tailwindcss.com/

Font Awesome Icons for React/NextJS:
Researched and utilized LinkedIn and Github font awesome icons in this Contact Details component. 
Referenced the Font Awesome website for these icons.
https://fontawesome.com/
*/
