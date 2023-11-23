import "./sidebar.scss";
import LogoDalaes from "../../assets/images/David-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  // faHandshake,
  faHome,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import { HashLink } from "react-router-hash-link";

const Sidebar = () => {
  // shows or not hamburguer menu
  const [showNav, setShowNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  // Sticky Navbar when scrolls down
  useEffect(() => {
    const onScroll = () => {
    if (window.scrollY >= 100 ) {
      setScrolled(true)
     } else {
      setScrolled(false)
     }
     

    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setShowNav(false);
  };
  
  return (
    <section className={scrolled ? "nav-bar scrolled" : "nav-bar"}>
      <div>
        <HashLink className="logo" smooth to="#">
          <img src={LogoDalaes} alt="David-logo" />
        </HashLink>
      </div>

      <nav className={showNav ? "mobile-show" : ""}>
        <HashLink
          onClick={() => onUpdateActiveLink("home")}
          className={activeLink === "home" ? "active" : ""}
          exact="true"
          smooth
          to="#"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> Home
        </HashLink>

        <HashLink
          onClick={() => onUpdateActiveLink("about")}
          className={activeLink === "about" ? "active" : ""}
          exact="true"
          smooth
          to="#about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> About
        </HashLink>

        <HashLink
          onClick={() => onUpdateActiveLink("projects")}
          className={activeLink === "projects" ? "active" : ""}
          exact="true"
          smooth
          to="#projects"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" /> Projects
        </HashLink>

        <HashLink
          onClick={() => onUpdateActiveLink("contact")}
          exact="true"
          className={activeLink === "contact" ? "active" : ""}
          smooth
          to="#contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> Contact
        </HashLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#D13636"
          size="3x"
          className="close-icon"
        />
      </nav>

      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#D13636"
        size="3x"
        className="hamburguer-icon"
      />
    </section>
  );
};

export default Sidebar;
