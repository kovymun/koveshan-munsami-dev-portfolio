/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO WORK EXPERIENCE COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - Work Experience Component:
This component renders all my accumulated work experience, to be included as a child component in the "about" page of the Developer Portfolio website.

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/

export default function WorkExperience() {
  return (
    <div className="work-exp-section">
      <div className="work-exp-container">
        <h2>Work Experience</h2>
        <div className="exp-v-line"></div>
        <div className="exp-details">
          <p className="work-exp-para">
            Worked in the Mobile Telecommunications industry for 10 years, as a
            Radio Access Network Engineer, at Ericsson South Africa.
          </p>
          <p className="work-exp-para">
            As part of the Ericsson SA Radio Network team, I've engaged on
            various projects for MTN South Africa, working with mobile
            technologies such as 2G, 3G and LTE.
          </p>
          <p className="work-exp-para">Duration: 2009 - 2019</p>
        </div>
      </div>
      <style jsx>
        {`
          .work-exp-section {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            background-color: white;
            color: #282a3a;
          }

          .work-exp-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 70%;
          }

          .work-exp-container > h2 {
            font-size: 2rem;
          }

          .exp-v-line {
            border-left: 2px solid #282a3a;
            height: 40vh;
          }

          .exp-details {
            width: 55%;
          }

          .work-exp-para {
            margin-bottom: 0.5em;
            font-size: 1.1rem;
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
