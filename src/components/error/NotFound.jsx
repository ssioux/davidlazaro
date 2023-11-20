import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="error-page">
        <FontAwesomeIcon icon={faQuestionCircle} />
        <h1>Page not found, are you lost? </h1>
        <Link to="/" className="flat-button">
          Go Back
        </Link>
      </div>
    </>
  );
}

export default NotFound;
