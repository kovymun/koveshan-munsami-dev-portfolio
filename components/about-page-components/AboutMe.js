/**DEVELOPER PORTFOLIO ABOUT-BIO COMPONENT**/
/**KINDLY REFER TO THE END OF THIS DOCUMENT FOR ALL REFERENCES**/

/*
Developer Portfolio - AboutMe Component:
This components renders a description of my biography, to be included as a child component in the "about" page of the Developer Portfolio website..

All stylings for this component are implemented using standard CSS, and CSS framework "Tailwind CSS". Refer to the references section for more details.
*/

export default function AboutMe() {
  return (
    <div className="about-section bg-white flex justify-center items-center w-full h-screen">
      <div className="about-container flex justify-around items-center text-black w-4/5">
        <div className="about-photo">
          <img
            className="border-2 border-charcoal-black object-cover rounded-full w-80 h-80"
            src="/static/profile_pic.png"
            alt="image of Koveshan Munsami"
          />
        </div>
        <div className="about-v-line border-l-2 border-charcoal-black"></div>
        <div className="about-details-container w-1/2">
          <h2 className="about-title text-3xl font-medium text-center mb-4">
            About Me
          </h2>
          <div className="about-details">
            <div className="about-info">
              <p className="about-para mb-2">
                Hi, I'm Koveshan Munsami - Welcome to my site! I am a Web
                Developer and qualified Electronic Engineer. I am based in South
                Africa and have more than a decade of experience in the Mobile
                Telecommunications industry.
              </p>
              <p className="about-para mb-2">
                Away from the laptop, you'll find me swimming on the beach,
                watching and supporting football, or taking long road trips.
              </p>
              <p className="about-para mb-2">
                I have an insatiable thirst for knowledge, and as such I'm
                passionate about learning and acquiring new skills to create
                effective and beneficial web applications. I am motivated by
                acquiring new skills, collaborating and helping others.
              </p>
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
