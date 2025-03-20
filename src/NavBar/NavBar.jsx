// // import { useRef, useState } from "react"
// // import "./navbar.css"

// // const NavBar = () => {

// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const aboutRef = useRef(null);
// //   const experienceRef = useRef(null);
// //   const workRef = useRef(null);
// //   const contactRef = useRef(null);

// //   const scrollToSection  = (ref) => {
// //     if (ref.current) {
// //       ref.current.scrollToSectionView({ behavior: "smooth" });
// //       setMenuOpen(false);
// //     }
// //   };

// //   return (
// //     <>
// //     <div className="nav-container">
// //       <div className="img-container">
// //          <img className="img-nav" src="./481.png" alt="" />
// //       </div>

// //       <div className={`hamburguesa ${menuOpen ? "open": ""}`} onClick={() => setMenuOpen(!menuOpen)}>
// //         <span></span>
// //         <span></span>
// //         <span></span>
// //       </div>
     
// //       <ol className={`list ${menuOpen ? "open" : ""}`}>
// //           <li><span>01.</span>About</li>
// //           <li><span>02.</span>Experience</li>
// //           <li><span>03.</span>Work</li>
// //           <li><span>04.</span>Contact</li>
// //           <button className="btn-navbar">
// //               Resume
// //           </button>
// //       </ol>
// //     </div>

// //   </>
// //   )
// // }

// // export default NavBar


// import { useState, useRef } from "react";
// import "./navbar.css";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Crear referencias para las secciones
//   const aboutRef = useRef(null);
//   const experienceRef = useRef(null);
//   const workRef = useRef(null);
//   const contactRef = useRef(null);

//   // Función para hacer scroll a la sección seleccionada
//   const scrollToSection = (ref) => {
//     if (ref.current) {
//       ref.current.scrollIntoView({ behavior: "smooth" });
//       setMenuOpen(false); // Cierra el menú en móviles
//     }
//   };

//   return (
//     <>
//       <div className="nav-container">
//         <div className="img-container">
//           <img className="img-nav" src="./481.png" alt="Logo" />
//         </div>

//         <div
//           className={`hamburguesa ${menuOpen ? "open" : ""}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>

//         <ol className={`list ${menuOpen ? "open" : ""}`}>
//           <li onClick={() => scrollToSection(aboutRef)}>
//             <span>01.</span> About
//           </li>
//           <li onClick={() => scrollToSection(experienceRef)}>
//             <span>02.</span> Experience
//           </li>
//           <li onClick={() => scrollToSection(workRef)}>
//             <span>03.</span> Work
//           </li>
//           <li onClick={() => scrollToSection(contactRef)}>
//             <span>04.</span> Contact
//           </li>
//           <button className="btn-navbar">Resume</button>
//         </ol>
//       </div>

//       {/* Secciones con sus referencias */}
//       <div ref={aboutRef} id="about" className="section">About Section</div>
//       <div ref={experienceRef} id="experience" className="section">Experience Section</div>
//       <div ref={workRef} id="work" className="section">Work Section</div>
//       <div ref={contactRef} id="contact" className="section">Contact Section</div>
//     </>
//   );
// };

// export default NavBar;

import { useState } from "react";
import "./navbar.css";


const NavBar = ({ aboutRef, workRef, projectsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para hacer scroll a la sección seleccionada
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Cierra el menú en móviles
    }
  };

  return (
    <div className="nav-container">
      <div className="img-container">
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
        <li onClick={() => scrollToSection(aboutRef)}>
          <span>01.</span> About
        </li>
        <li onClick={() => scrollToSection(workRef)}>
          <span>02.</span> Work Experience
        </li>
        <li onClick={() => scrollToSection(projectsRef)}>
          <span>03.</span> Projects
        </li>
        <li onClick={() => scrollToSection(contactRef)}>
          <span>04.</span> Contact
        </li>
        <button className="btn-navbar">Resume</button>
      </ol>
    </div>
  );
};

export default NavBar;
