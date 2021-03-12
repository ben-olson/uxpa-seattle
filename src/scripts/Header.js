import logo from '../static/logo.svg'

function Header() {
  return (
    <header className="[ header ]">
      <div className="[ logo ] [ link ]">
        <img src={logo} alt="UXPA Seattle Logo" />
        <span className="[ color:blue bold caps ]">UXPA</span>
        <span className="[ bold caps ]">Seattle</span>
      </div>
      <div className="[ nav ]">
        <div className="[ link ][ bold ]">About</div>
        <div className="[ link ][ bold ]">Contact</div>
      </div>
    </header>
  )
}

export default Header