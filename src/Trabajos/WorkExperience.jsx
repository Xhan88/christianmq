
import { useState, forwardRef } from "react";
import "./WorkExperience.css"; 

const experiences = [
  { id: 1, company: "Carniceria Matamoros", description: "Website Development for Carnicería Matamoros As part of my web development experience, I had the opportunity to design and create a website for Carnicería Matamoros, using WordPress and the Elementor visual builder. The goal of the project was to provide a professional and functional online presence to improve the business's visibility and facilitate customer interaction." },

  { id: 2, company: "Taqueria del Abuelo", description: "Website Development for Taquería del Abuelo I developed a website for Taquería del Abuelo using WordPress and Elementor, with a responsive design that adapts to mobile devices, tablets, and computers. The site includes a product menu with the taqueria's menu options, an image gallery to showcase the dishes, and a contact form to facilitate customer interaction. I also integrated an interactive map to easily locate the taqueria. I added animations to enhance the visual experience and make navigation more dynamic." },

  { id: 3, company: "Empresa C", description: "Descripción del trabajo en Empresa C Descripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
  { id: 4, company: "Empresa D", description: "Descripción del trabajo en Empresa DDescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa ADescripción del trabajo en Empresa A" },
  { id: 5, company: "Empresa E", description: "Descripción del trabajo en Empresa E" }
];


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
          <h2 className="work-title">{experiences.find((exp) => exp.id === selectedId).company}</h2>
          <p>
            <span>  ▻ </span>{experiences.find((exp) => exp.id === selectedId).description}</p>
        </div>
      </div>
    </>
  );
});

// Asignando un displayName para mejorar la depuración
WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
