// scss
import './logo.scss'
// D
import LogoSioux from '../../../assets/images/David-logo.png'

const Logo = () => {
  return (
    <div className="logo-container">
  
      <img
        className="solid-logo"
        src={LogoSioux}
        alt="D"
      />
    </div>
  )
}

export default Logo
