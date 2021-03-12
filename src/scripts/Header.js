import {Link} from 'react-router-dom'
import logo from '../static/logo.svg'

function Header() {
  return (
    <header className="[ header ]">
      <div className="[ logo ] [ ]">
        <img src={logo} alt="UXPA Seattle Logo" />
        <span className="[ color:blue bold caps ]">UXPA</span>
        <span className="[ bold caps ]">Seattle</span>
      </div>
      <div className="[ nav ]">
        <Link to={`/`} className="[ link ] [ bold ]">Home</Link>
        <Link to={`/about`} className="[ link ] [ bold ]">About</Link>
      </div>
    </header>
  )
}

export default Header