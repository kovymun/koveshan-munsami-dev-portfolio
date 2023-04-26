/**DEVELOPER PORTFOLIO SKILLS DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - Skills Component:
This component renders all my skills and competencies, to be included as a child component in the "about" page of the Developer Portfolio website.

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function Skills() {
  return (
    <div className="skills-section flex justify-center items-center w-full h-screen bg-charcoal-black text-white">
      <div className="skills-container flex justify-around items-center w-4/5">
        <h2 className="skills-title text-4xl text-center">
          Skills and Competencies
        </h2>
        <div className="skills-v-line border-l-2 border-white"></div>
        <div className="skills-details">
          <div className="soft-skills mb-8">
            <h3 className="skills-heading text-lg">Soft Skills:</h3>
            <div className="skill-items flex font-semibold">
              <p className="bg-white text-charcoal-black p-2">Patience</p>
              <p className="bg-white text-charcoal-black p-2">
                Interpersonal skills
              </p>
              <p className="bg-white text-charcoal-black p-2">
                Time Management
              </p>
              <p className="bg-white text-charcoal-black p-2">
                Empathy and humility
              </p>
            </div>
          </div>
          <div className="hard-skills">
            <h3 className="skills-heading text-lg">Hard Skills:</h3>
            <div className="skill-items flex font-semibold">
              <p className="bg-white text-charcoal-black p-2">HTML</p>
              <p className="bg-white text-charcoal-black p-2">CSS</p>
              <p className="bg-white text-charcoal-black p-2">JavaScript</p>
              <p className="bg-white text-charcoal-black p-2">Bootstrap V5</p>
              <p className="bg-white text-charcoal-black p-2">
                React-Bootstrap
              </p>
              <p className="bg-white text-charcoal-black p-2">ReactJS</p>
              <p className="bg-white text-charcoal-black p-2">NextJS</p>
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
*/
