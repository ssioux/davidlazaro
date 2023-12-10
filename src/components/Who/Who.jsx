import "./who.scss";

import davidPicture from "../../assets/images/David_Foto.jpg";
import LogoTitle from "../../assets/images/David-rem.png";

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
    <>
    <section className="who-page">
  
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Hola, ".split("")}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Soy".split("")}
              idx={18}
            />
            <img src={LogoTitle} alt="developer" />

            {/* Animation for 'sioux' */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"avid Lázaro".split("")}
              idx={19}
            />
            <br />
            {/* Animation for 'web developer.' */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Desarrollador ".split("")}
              idx={22}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"Web.".split("")}
              idx={30}
            />
          </h1>
          <h2>Full Stack </h2>
          <div className="group-anc">
          <HashLink smooth to="#contact" className="flat-button">
            CONTACTA ME <FontAwesomeIcon icon={faEnvelope} />
          </HashLink>
          <a
            href="https://www.linkedin.com/in/david-l%C3%A1zaro/"
            target="_blank"
            rel="noreferrer"
            className="flat-button"
          >
            LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/ssioux"
            target="_blank"
            rel="noreferrer "
            className="flat-button"
          >
            GitHub <FontAwesomeIcon icon={faGithub} />
          </a>
          </div>
        </div>
        <div className="picture-zone">
          <img src={davidPicture} alt="David-picture" />
        </div>

 
    </section>
    
    </>
  );
}

export default Who;
