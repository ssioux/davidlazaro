import "./who.scss";

import davidPicture from "../../assets/images/David-rem.png";
import LogoTitle from "../../assets/images/David-rem.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./who.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
function Who() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const letterMouseMovement = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => {
      clearTimeout(letterMouseMovement);
    };
  });

  return (
    <section className="who-page">
      <div className="page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Hi,".split("")}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={`I'm`.split("")}
              idx={15}
            />
            <img src={LogoTitle} alt="developer" />

            {/* Animation for 'sioux' */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"avid Lázaro".split("")}
              idx={15}
            />
            <br />
            {/* Animation for 'web developer.' */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Web developer.".split("")}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer </h2>
          <HashLink smooth to="#contact" className="flat-button">
            CONTACT ME <FontAwesomeIcon icon={faEnvelope} />
          </HashLink>
          <a href="https://www.linkedin.com/in/david-l%C3%A1zaro/" target="_blank" rel="noreferrer" className="flat-button">
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/ssioux" target="_blank" rel="noreferrer " className="flat-button">
            GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="picture-zone">
          <img src={davidPicture} alt="David-picture" />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D13636"
          d="M0,64L40,90.7C80,117,160,171,240,176C320,181,400,139,480,138.7C560,139,640,181,720,165.3C800,149,880,75,960,48C1040,21,1120,43,1200,58.7C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}

export default Who;
