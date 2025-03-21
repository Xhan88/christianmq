
// import { useState } from "react";
// import "./navbar.css";


// const NavBar = ({ aboutRef, workRef, projectsRef, contactRef }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Función para hacer scroll a la sección seleccionada
//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Cierra el menú en móviles
//     }
//   };

//   return (
//     <div className="nav-container">
//       <div className="img-container">
//         <img className="img-nav" src="./481.png" alt="Logo" />
//       </div>

//       <div
//         className={`hamburguesa ${menuOpen ? "open" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ol className={`list ${menuOpen ? "open" : ""}`}>
//         <li onClick={() => scrollToSection(aboutRef)}>
//           <span>01.</span> About
//         </li>
//         <li onClick={() => scrollToSection(workRef)}>
//           <span>02.</span> Work Experience
//         </li>
//         <li onClick={() => scrollToSection(projectsRef)}>
//           <span>03.</span> Projects
//         </li>
//         <li onClick={() => scrollToSection(contactRef)}>
//           <span>04.</span> Contact
//         </li>
//         <button className="btn-navbar">Resume</button>
//       </ol>
//     </div>
//   );
// };

// export default NavBar;

// import { useState, useEffect } from "react";
// import "./navbar.css";

// // eslint-disable-next-line react/prop-types
// const NavBar = ({ HeaderRef, aboutRef, workRef, projectsRef, contactRef }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [showNav, setShowNav] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         setShowNav(true); // Siempre visible cuando está en la parte superior
//       } else if (window.scrollY > lastScrollY) {
//         setShowNav(false); // Oculta el navbar al hacer scroll hacia abajo
//       } else {
//         setShowNav(true); // Muestra el navbar al hacer scroll hacia arriba
//       }
//       setLastScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [lastScrollY]);

//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Cierra el menú en móviles
//     }
//   };

//   return (
//     <div className={`nav-container ${showNav ? "visible" : "hidden"}`}>
//       <div onClick={() => scrollToSection(HeaderRef)} className="img-container">
//         <img className="img-nav" src="./481.png" alt="Logo" />
//       </div>

//       <div
//         className={`hamburguesa ${menuOpen ? "open" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>

//       <ol className={`list ${menuOpen ? "open" : ""}`}>
//         <li onClick={() => scrollToSection(aboutRef)}>
//           <span>01.</span> About
//         </li>
//         <li onClick={() => scrollToSection(workRef)}>
//           <span>02.</span> Work Experience
//         </li>
//         <li onClick={() => scrollToSection(projectsRef)}>
//           <span>03.</span> Projects
//         </li>
//         <li onClick={() => scrollToSection(contactRef)}>
//           <span>04.</span> Contact
//         </li>
//         <button className="btn-navbar">Resume</button>
//       </ol>
//     </div>
//   );
// };

// export default NavBar;

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
        setIsScrolled(false); // Si está arriba, no aplicar fondo ni sombra
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false); // Oculta al bajar
      } else {
        setShowNav(true);
        setIsScrolled(true); // Aplica fondo y sombra cuando no está arriba
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`nav-container ${showNav ? "visible" : "hidden"} ${isScrolled ? "scrolled" : ""}`}>
      <div className="img-container">
        <img className="img-nav" src="./481.png" alt="Logo" onClick={() => HeaderRef.current.scrollIntoView({ behavior: "smooth" })} />
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
        <li onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}>
          <span>01.</span> About
        </li>
        <li onClick={() => workRef.current.scrollIntoView({ behavior: "smooth" })}>
          <span>02.</span> Work Experience
        </li>
        <li onClick={() => projectsRef.current.scrollIntoView({ behavior: "smooth" })}>
          <span>03.</span> Projects
        </li>
        <li onClick={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}>
          <span>04.</span> Contact
        </li>
        <button className="btn-navbar">Resume</button>
      </ol>
    </div>
  );
};

export default NavBar;
