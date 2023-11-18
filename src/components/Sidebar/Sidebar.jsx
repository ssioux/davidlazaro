import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoDalaes from "../../assets/images/David-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChessKnight,
  faClose,
  faEnvelope,
  // faHandshake,
  faHome,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Sidebar = () => {
  // shows or not hamburguer menu
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <div>
        {" "}
        <Link className="logo" to="/">
          <img src={LogoDalaes} alt="David-logo" />
        </Link>
      </div>

      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" /> Home
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="about-link"
          to="about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" /> About
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" /> Projects
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" /> Contact
        </NavLink>

        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          className="chess-link"
          to="/chess"
        >
          <FontAwesomeIcon icon={faChessKnight} color="#4d4d4e" /> Chess
        </NavLink>

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
    </div>
  );
};

export default Sidebar;
