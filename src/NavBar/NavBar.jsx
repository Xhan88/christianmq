import "./navbar.css"

const NavBar = () => {
  return (
    <>
    <div className="nav-container">
      <img className="img-nav" src="./backgroundmq.jpg" alt="" />
      <ol>
          <li><span>01.</span>About</li>
          <li><span>02.</span>Experience</li>
          <li><span>03.</span>Work</li>
          <li><span>04.</span>Contact</li>
          <button>
              Resume
          </button>
      </ol>
    </div>

  </>
  )
}

export default NavBar

