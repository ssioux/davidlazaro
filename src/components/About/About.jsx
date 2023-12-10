import "./about.scss";
import { DiCss3, DiReact, DiHtml5, DiNodejsSmall } from "react-icons/di";
import {
  SiMongodb,
  SiExpress,
  SiAxios,
  SiJsonwebtokens,
  SiVite,
  SiHandlebarsdotjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoSass,
  BiLogoFirebase,
  BiLogoJquery,
} from "react-icons/bi";

const About = () => {
  return (
    <>
      <div id="about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#D13636"
            d="M0,64L40,90.7C80,117,160,171,240,176C320,181,400,139,480,138.7C560,139,640,181,720,165.3C800,149,880,75,960,48C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>

      <section className="about-page">
        <div className="about-text-zone">
          <h1>Experience & Skills</h1>
          <p>
            I am a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I am quite confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, father of two beautiful kids, a sports fanatic, and
            tech-obsessed!!!
          </p>
        </div>
        <div className="stage-cube-cont">
          <BiLogoJavascript />
          <DiReact />
          <DiHtml5 />
          <DiCss3 />
          <SiMongodb />
          <DiNodejsSmall />
          <SiJsonwebtokens />
          <SiExpress />
          <SiAxios />
          <TbBrandNextjs />
          <BiLogoTypescript />
          <SiVite />
          <BiLogoSass />
          <BiLogoJquery />
          <BiLogoFirebase />
          <SiHandlebarsdotjs />
        </div>
      </section>

      <div id="projects">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#D13636"
            d="M0,64L40,90.7C80,117,160,171,240,176C320,181,400,139,480,138.7C560,139,640,181,720,165.3C800,149,880,75,960,48C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default About;
