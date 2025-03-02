import { useState } from "react";
import "./WorkExperience.css"; // Importamos los estilos

const experiences = [
  { id: 1, company: "Empresa A", description: "Descripción del trabajo en Empresa A" },
  { id: 2, company: "Empresa B", description: "Descripción del trabajo en Empresa B" },
  { id: 3, company: "Empresa C", description: "Descripción del trabajo en Empresa C" },
  { id: 4, company: "Empresa D", description: "Descripción del trabajo en Empresa D" },
  { id: 5, company: "Empresa E", description: "Descripción del trabajo en Empresa E" }
];

export default function WorkExperience() {
  const [selectedId, setSelectedId] = useState(1);
  const itemHeight = 40;

  return (
    <>
    <div>
      <h1 className="works-02"><span>02.</span> Where I’ve Worked ──────────</h1>
    </div>
    <div className="experience-container">
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
      <div className="description">
        <h2>{experiences.find((exp) => exp.id === selectedId).company}</h2>
        <p>{experiences.find((exp) => exp.id === selectedId).description}</p>
      </div>
    </div>
    </>
  );
}
