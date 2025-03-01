
import { useState, useEffect } from "react";
import CustomCursor from "./cursor-custom/CustomCursor";
import "./App.css";
import Preloader from "./preloading/Preloader";
import NavBar from "./NavBar/NavBar";
import Header from "./Header/Header";
import AboutMe from "./AboutMe/AboutMe";


function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de la página
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={`App ${loading ? "" : "loaded"}`}>
    <CustomCursor />
    
    {loading ? (
      <Preloader />
    ) : (
      <>
        <NavBar />
        <Header />
        {<AboutMe />}
      </>
    )}
  </div>
);
}

export default App;
//     <div className={`App ${loading ? "" : "loaded"}`}>
//       <CustomCursor />
      
//       {loading ? <Preloader /> : <NavBar />  /* Muestra Preloader si está cargando, sino muestra el contenido */}
//       <Header />
//     </div>
    
//   );
// }

// export default App;
