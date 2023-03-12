/**DEVELOPER PORTFOLIO EDUCATION DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - Education details Component:
The component renders all my education history, to be included as a child component in the "about" page of the Developer Portfolio website.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Education() {
  return (
    <div className="education-section flex justify-center items-center w-full h-screen bg-charcoal-black text-white">
      <div className="education-container flex justify-around items-center w-3/4">
        <h2 className="education-title text-4xl font-medium">Education</h2>
        <div className="edu-v-line border-l-2 border-white"></div>
        <div className="education-details w-2/3">
          <p className="education-qual text-xl mb-4">
            NDip. Electrical Engineering - Light Current (Major:
            Telecommunications) | Durban University of Technology (DUT) | 2008
          </p>
          <p className="education-qual text-xl">
            Full Stack Web Development Bootcamp | Hyperion Dev | 2023
          </p>
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
*/
