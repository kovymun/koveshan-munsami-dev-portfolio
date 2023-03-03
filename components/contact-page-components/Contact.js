/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO CONTACT DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

/*Stylings for the Github and LinkedIn social media platform Links*/
const contactLinkStyle = {
  color: "white",
  textDecoration: "none",
};

/*
Developer Portfolio - Contact Details Component:
This component renders all my relevant contact details, including links to my Github and LinkedIn social media platforms, to be included as a child component 
in the "contact" page of the Developer Portfolio website.

The NextJS Link API is used in this component to route the viewer to my Github and LinkedIn social media platforms.

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/
export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-details">
        <h2>Contact Details</h2>
        <div className="contact-v-line"></div>
        <div className="contact-container">
          <div className="contact-info">
            <p className="contact-sub-info">Name: Koveshan Munsami</p>
            <p className="contact-sub-info">Contact Number: 083 946 9993</p>
            <p className="contact-sub-info">
              Email Address: kov.munsami@gmail.com
            </p>
            <div className="contact-social">
              <p className="contact-sub-info">Social Media:</p>
              <div className="social-list">
                <div className="social-anchor">
                  <Link
                    style={contactLinkStyle}
                    href="https://www.linkedin.com/in/koveshan-munsami/"
                    target="_blank"
                  >
                    <div className="linkedin-github">
                      <p>LinkedIn</p>
                      <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                  </Link>
                </div>
                <div className="social-anchor">
                  <Link
                    style={contactLinkStyle}
                    href="https://github.com/kovymun"
                    target="_blank"
                  >
                    <div className="linkedin-github">
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
      <style jsx>{`
        .contact-page {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #282a3a;
          color: white;
          height: 100vh;
        }

        .contact-details {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 70%;
        }

        .contact-details > h2 {
          font-size: 2rem;
        }

        .contact-v-line {
          border-left: 2px solid white;
          height: 50vh;
        }

        .contact-info {
          font-size: 1.2em;
        }

        .contact-sub-info {
          margin-bottom: 0.5em;
        }

        .social-list {
          width: 35%;
        }

        .linkedin-github {
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: transform 0.2s;
        }

        .linkedin-github:hover {
          transform: scale(1.2);
        }

        .social-anchor {
          margin-bottom: 0.5em;
        }

        .social-anchor > a {
          all: unset;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

/**REFERENCES**/
/*
CSS in JS framework called styled-jsx:
Styling for this Developer Portfolio implemented using JavaScript framework called "styled-jsx".
Referenced the Hyperion Dev: Next.js I pdf file and Styled-JSX Github repo for implementation and usage information.
HyperionDev(2021). Next.js I Pages (7-8)
https://github.com/vercel/styled-jsx

Font Awesome Icons for React/NextJS:
Researched and utilized LinkedIn and Github font awesome icons in this Contact Details component. 
Referenced the Font Awesome website for these icons.
*/
