/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO SKILLS DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - Skills Component:
This component renders all my skills and competencies, to be included as a child component in the "about" page of the Developer Portfolio website.

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/

export default function Skills() {
  return (
    <div className="skills-section" id="top">
      <div className="skills-container">
        <h2>Skills and Competencies</h2>
        <div className="skills-v-line"></div>
        <div className="skills-details">
          <div className="soft-skills">
            <h3 className="skills-heading">Soft Skills:</h3>
            <div className="skill-items">
              <p>Patience</p>
              <p>Interpersonal skills</p>
              <p>Time Management</p>
              <p>Empathy and humility</p>
            </div>
          </div>
          <div className="hard-skills">
            <h3 className="skills-heading">Hard Skills:</h3>
            <div className="skill-items">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Bootstrap V5</p>
              <p>ReactJS</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .skills-section {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            background-color: #282a3a;
            color: white;
          }

          .skills-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 80%;
          }

          .skills-container > h2 {
            font-size: 2rem;
            width: 30%;
            text-align: center;
          }

          .skills-v-line {
            border-left: 2px solid white;
            height: 40vh;
          }

          .skill-items {
            display: flex;
            margin-bottom: 0.4em;
            font-weight: 600;
          }

          .skill-items > p {
            background-color: white;
            color: #282a3a;
            border-radius: 0.5em;
            padding: 0.5em;
            margin: 0.8em 0.8em 0 0;
          }

          .soft-skills {
            margin-bottom: 2em;
          }
        `}
      </style>
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
*/
