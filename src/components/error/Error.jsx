import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './error.scss'
import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div className="error-page">
        <FontAwesomeIcon icon={faWarning} />
       
        <h1> Sorry. Our developers are working on it.</h1>
        <Link to="/" className="flat-button">
            Go Back 
          </Link>
      </div>
    </>
  )
}

export default Error
