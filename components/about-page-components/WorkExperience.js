/**DEVELOPER PORTFOLIO WORK EXPERIENCE COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - Work Experience Component:
This component renders all my accumulated work experience, to be included as a child component in the "about" page of the Developer Portfolio website.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function WorkExperience() {
  return (
    <div className="work-exp-section flex justify-center items-center w-full h-screen bg-white text-charcoal-black">
      <div className="work-exp-container flex justify-around items-center">
        <h2 className="work-exp-title text-4xl">Work Experience</h2>
        <div className="exp-v-line border-l-2 border-charcoal-black"></div>
        <div className="exp-details">
          <p className="work-exp-para mb-2 text-base">
            Worked in the Mobile Telecommunications industry for 10 years, as a
            Radio Access Network Engineer, at Ericsson South Africa.
          </p>
          <p className="work-exp-para mb-2 text-base">
            As part of the Ericsson SA Radio Network team, I've engaged on
            various projects for MTN South Africa, working with mobile
            technologies such as 2G, 3G and LTE.
          </p>
          <p className="work-exp-para mb-2 text-base">Duration: 2009 - 2019</p>
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
