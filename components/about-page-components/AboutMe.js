/**FS WD LEVEL 3 TASK 10 - DEVELOPER PORTFOLIO ABOUT-BIO COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - AboutMe Component:
This components renders a description of my biography, to be included as a child component in the "about" page of the Developer Portfolio website..

All stylings for this component are implemented using CSS in JS framework called "styled-jsx". Refer to the references section for more details.
*/

export default function AboutMe() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-photo">
          <img src="/static/profile_pic.png" alt="image of Koveshan Munsami" />
        </div>
        <div className="about-v-line"></div>
        <div className="about-details-container">
          <h2 className="about-title">About Me</h2>
          <div class="about-details">
            <div class="about-info">
              <p className="about-para">
                Hi, I'm Koveshan Munsami - Welcome to my site! I am a Web
                Developer and qualified Electronic Engineer. I am based in South
                Africa and have more than a decade of experience in the Mobile
                Telecommunications industry.
              </p>
              <p className="about-para">
                Away from the laptop, you'll find me swimming on the beach,
                watching and supporting football, or taking long road trips.
              </p>
              <p className="about-para">
                I have an insatiable thirst for knowledge, and as such I'm
                passionate about learning and acquiring new skills to create
                effective and beneficial web applications. I am motivated by
                acquiring new skills, collaborating and helping others.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
          background-color: white;
        }

        .about-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          color: black;
          width: 80%;
        }

        .about-details-container {
          width: 50%;
        }

        .about-v-line {
          border-left: 2px solid #282a3a;
          height: 50vh;
        }

        .about-photo > img {
          object-fit: cover;
          border: 2px solid #282a3a;
          border-radius: 50%;
          width: 320px;
          height: 320px;
        }

        .about-title {
          text-align: center;
          margin-bottom: 0.3em;
        }

        .about-para {
          margin-bottom: 0.5em;
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
*/
