// import { useState } from "react";
// import "./WorkExperience.css"; // Importamos los estilos

// const experiences = [
//   { id: 1, company: "Empresa A", description: "Descripción del trabajo en Empresa A Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
//   { id: 2, company: "Empresa B", description: "Descripción del trabajo en Empresa B Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
//   { id: 3, company: "Empresa C", description: "Descripción del trabajo en Empresa C Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
//   { id: 4, company: "Empresa D", description: "Descripción del trabajo en Empresa DDescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
//   { id: 5, company: "Empresa E", description: "Descripción del trabajo en Empresa E" }
// ];

// export default function WorkExperience() {
//   const [selectedId, setSelectedId] = useState(1);
//   const itemHeight = 43;

//   return (
//     <>
//     <div>
//       <h1 className="works-02"><span>02.</span> Where I’ve Worked ──────────</h1>
//     </div>
//     <div className="experience-container">
//       <div className="sidebar">
//         <div className="vertical-line"></div>
//         <div
//           className="green-indicator"
//           style={{ transform: `translateY(${(selectedId - 1) * itemHeight}px)` }}
//         ></div>
//         {experiences.map((exp) => (
//           <button
//             key={exp.id}
//             className={`company-button ${selectedId === exp.id ? "active" : ""}`}
//             onClick={() => setSelectedId(exp.id)}
//           >
//             {exp.company}
//           </button>
//         ))}
//       </div>
//       <div className="description2">
//         <h2>{experiences.find((exp) => exp.id === selectedId).company}</h2>
//         <p>{experiences.find((exp) => exp.id === selectedId).description}</p>
//       </div>
//     </div>
//     </>
//   );
// }

import { useState, forwardRef } from "react";
import "./WorkExperience.css"; // Importamos los estilos

const experiences = [
  { id: 1, company: "Empresa A", description: "Descripción del trabajo en Empresa A Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
  { id: 2, company: "Empresa B", description: "Descripción del trabajo en Empresa B Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
  { id: 3, company: "Empresa C", description: "Descripción del trabajo en Empresa C Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
  { id: 4, company: "Empresa D", description: "Descripción del trabajo en Empresa DDescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
  { id: 5, company: "Empresa E", description: "Descripción del trabajo en Empresa E" }
];

// Usamos forwardRef para permitir pasar una referencia desde el componente padre
const WorkExperience = forwardRef((props, ref) => {
  const [selectedId, setSelectedId] = useState(1);
  const itemHeight = 43;

  return (
    <>
      <div>
        <h1 className="works-02" ref={ref}><span>02.</span> Where I’ve Worked ──────────</h1>
      </div>
      <div className="experience-container" >
        <div className="sidebar">
          <div className="vertical-line"></div>
          <div
            className="green-indicator"
            style={{ transform: `translateY(${(selectedId - 1) * itemHeight}px)` }}
          ></div>
          {experiences.map((exp) => (
            <button
              key={exp.id}
              className={`company-button ${selectedId === exp.id ? "active" : ""}`}
              onClick={() => setSelectedId(exp.id)}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="description2">
          <h2>{experiences.find((exp) => exp.id === selectedId).company}</h2>
          <p>{experiences.find((exp) => exp.id === selectedId).description}</p>
        </div>
      </div>
    </>
  );
});

// Asignando un displayName para mejorar la depuración
WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
