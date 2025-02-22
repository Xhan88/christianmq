
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <CustomCursor />
    
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import CustomCursor from "./cursor-custom/CustomCursor";
import "./App.css";
import Preloader from "./preloading/Preloader";
import NavBar from "./NavBar/NavBar";


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
      
      {loading ? <Preloader /> : <NavBar />} {/* Muestra Preloader si está cargando, sino muestra el contenido */}
     
    </div>
    
  );
}

export default App;
