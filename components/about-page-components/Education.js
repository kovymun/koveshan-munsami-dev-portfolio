/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO EDUCATION DETAILS COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - Education details Component:
The component renders all my education history, to be included as a child component in the "about" page of the Developer Portfolio website.

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/

export default function Education() {
  return (
    <div className="education-section">
      <div className="education-container">
        <h2>Education</h2>
        <div className="edu-v-line"></div>
        <div className="education-details">
          <p className="education-qual">
            NDip. Electrical Engineering - Light Current (Major:
            Telecommunications) | Durban University of Technology (DUT) | 2008
          </p>
          <p className="education-qual">
            Full Stack Web Development Bootcamp | Hyperion Dev | 2023
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .education-section {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
            background-color: #282a3a;
            color: white;
          }

          .education-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 70%;
          }

          .education-container > h2 {
            font-size: 2rem;
          }

          .edu-v-line {
            border-left: 2px solid white;
            height: 40vh;
          }

          .education-details {
            width: 70%;
          }

          .education-qual {
            margin-bottom: 0.8em;
            font-size: 1.2rem;
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
