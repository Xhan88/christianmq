
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

  const HeaderRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
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
           
            <NavBar 
              HeaderRef={HeaderRef}  
              aboutRef={aboutRef} 
              workRef={workRef} 
              projectsRef={projectsRef} 
              contactRef={contactRef} 
            />

            <div ref={HeaderRef}>
              <Header />
            </div>

            <div ref={aboutRef}>
              <AboutMe />
            </div>

            <div ref={workRef}>
              <WorkExperience />
            </div>

            <div ref={projectsRef}>
              <MyProyects />
            </div>

            <Card />

            <div ref={contactRef}>
              <Contact />
            </div>

            
          </>
        )}
      </div>
    </CardProvider>
  );
}

export default App;
