import { useState } from "react"
import "./navbar.css"

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="nav-container">
      <div className="img-container">
         <img className="img-nav" src="./481.png" alt="" />
      </div>

      <div className={`hamburguesa ${menuOpen ? "open": ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
     
      <ol className={`list ${menuOpen ? "open" : ""}`}>
          <li><span>01.</span>About</li>
          <li><span>02.</span>Experience</li>
          <li><span>03.</span>Work</li>
          <li><span>04.</span>Contact</li>
          <button className="btn-navbar">
              Resume
          </button>
      </ol>
    </div>

  </>
  )
}

export default NavBar

