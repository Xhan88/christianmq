
import { useState, useEffect } from "react";
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
        <NavBar />
        <Header />
        <AboutMe />  
        <WorkExperience />
        <MyProyects />
        <Card />
        <Contact />
      </>
    )}
  </div>
  </CardProvider>
);
}

export default App;

