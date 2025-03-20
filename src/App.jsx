
// import { useState, useEffect } from "react";
// import CustomCursor from "./cursor-custom/CustomCursor";
// import "./App.css";
// import Preloader from "./preloading/Preloader";
// import NavBar from "./NavBar/NavBar";
// import Header from "./Header/Header";
// import AboutMe from "./AboutMe/AboutMe";
// import WorkExperience from "./Trabajos/WorkExperience";
// import MyProyects from "./Proyects/MyProyects";
// import Card from "./OtherProyects/Card";
// import { CardProvider } from "../CardContext";
// import Contact from "./Contact/Contact";


// function App() {
  
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simula la carga de la página
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//   }, []);

//   return (
//     <CardProvider>
//     <div className={`App ${loading ? "" : "loaded"}`}>
//     <CustomCursor />
    
//     {loading ? (
//       <Preloader />
//     ) : (
//       <>
//         <NavBar />
//         <Header />
//         <AboutMe />  
//         <WorkExperience />
//         <MyProyects />
//         <Card />
//         <Contact />
//       </>
//     )}
//   </div>
//   </CardProvider>
// );
// }

// export default App;


import { useState, useEffect, useRef } from "react";
import CustomCursor from "./cursor-custom/CustomCursor";
import "./App.css";
import Preloader from "./preloading/Preloader";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import WorkExperience from "./Trabajos/WorkExperience";
import MyProyects from "./Proyects/MyProyects";
import Card from "./OtherProyects/Card";
import { CardProvider } from "../CardContext";
import Contact from "./Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  // Crear las referencias para cada sección
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Simula la carga de la página
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <CardProvider>
      <div className={`App ${loading ? "" : "loaded"}`}>
        <CustomCursor />

        {loading ? (
          <Preloader />
        ) : (
          <>
            {/* Pasamos las referencias a NavBar */}
            <NavBar 
              aboutRef={aboutRef} 
              workRef={workRef} 
              projectsRef={projectsRef} 
              contactRef={contactRef} 
            />
            <Header />
            {/* Asignamos las referencias a las secciones */}
            <AboutMe ref={aboutRef} />
            <WorkExperience ref={workRef} />
            <MyProyects ref={projectsRef} />
            <Card />
            <Contact ref={contactRef} />
          </>
        )}
      </div>
    </CardProvider>
  );
}

export default App;


