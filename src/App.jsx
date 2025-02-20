import CustomCursor from "./cursor-custom/CustomCursor";
import './App.css'

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <h1>Efecto de cursor como Brittany Chiang</h1>
      <p>Mueve el ratón para ver el efecto.</p>
      <a href="#" className="hover-effect">Enlace con efecto</a>
      <button className="hover-effect">Botón con efecto</button>
    </div>
  );
}

export default App;