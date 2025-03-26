import { useState, useEffect } from "react";
import "./navbar.css";

const NavBar = ({ HeaderRef, aboutRef, workRef, projectsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setShowNav(true);
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false);
      } else {
        setShowNav(true);
        setIsScrolled(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Función para hacer scroll y cerrar menú
  const handleNavigation = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Cierra el menú de hamburguesa
    }
  };

  return (
    <div className={`nav-container ${showNav ? "visible" : "hidden"} ${isScrolled ? "scrolled" : ""}`}>
      <div className="img-container" onClick={() => handleNavigation(HeaderRef)}>
        <img className="img-nav" src="./481.png" alt="Logo" />
      </div>

      <div
        className={`hamburguesa ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ol className={`list ${menuOpen ? "open" : ""}`}>
        <li onClick={() => handleNavigation(aboutRef)}>
          <span>01.</span> About
        </li>
        <li onClick={() => handleNavigation(workRef)}>
          <span>02.</span> Work Experience
        </li>
        <li onClick={() => handleNavigation(projectsRef)}>
          <span>03.</span> Projects
        </li>
        <li onClick={() => handleNavigation(contactRef)}>
          <span>04.</span> Contact
        </li>
        <a href="./MartinezCv.pdf" target="_blank" rel="noopener noreferrer">
          <button className="btn-navbar">Resume</button>
        </a>
      </ol>
    </div>
  );
};

export default NavBar;
