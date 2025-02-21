// import CustomCursor from "./cursor-custom/CustomCursor";
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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de la página
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      {loading && <Preloader />}  {/* Preloader solo se muestra cuando loading es true */}
      {!loading && <h1>Bienvenido a mi página</h1>}
    </div>
  );
}

export default App;
