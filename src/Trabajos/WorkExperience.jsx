
import { useState, forwardRef } from "react";
import "./WorkExperience.css"; 

const experiences = [
  { id: 1, company: "Carnicería Matamoros- (WordPress) ", url: "https://cristian-pruebas-wordpress-1.617iip.easypanel.host/", description: "Website Development for Carnicería Matamoros As part of my web development experience, I had the opportunity to design and create a website for Carnicería Matamoros, using WordPress and the Elementor visual builder. The goal of the project was to provide a professional and functional online presence to improve the business's visibility and facilitate customer interaction." },

  { id: 2, company: "Taquería del Abuelo- (WordPress)",url: "https://cristian-pruebas-wordpress-2.617iip.easypanel.host/", description: "Website Development for Taquería del Abuelo I developed a website for Taquería del Abuelo using WordPress and Elementor, with a responsive design that adapts to mobile devices, tablets, and computers. The site includes a product menu with the Taquería's menu options, an image gallery to showcase the dishes, and a contact form to facilitate customer interaction. I also integrated an interactive map to easily locate the taquería. I added animations to enhance the visual experience and make navigation more dynamic." },

  { id: 3, company: "Hero Finder - Aplicación de Héroes - (React.js)",url: "https://monumental-madeleine-05800e.netlify.app/marvel", description: "Hero Finder is a web application developed in React.js that allows you to explore heroes from DC Comics and Marvel. It implements the React Router DOM to handle navigation between sections, a dynamic search engine that filters heroes in real time, and a login authentication system. Animate.css is also incorporated for elegant transitions, improving the user experience."},

  { id: 4, company: "My first Portafolio- (react.js)",url: "https://react-web-site-martinez.netlify.app/", description: "This is a dynamic and modern web portfolio developed with React.js, designed to showcase my skills, projects, and experience as a Front-End Developer. It uses React Router DOM for fluid navigation, Bootstrap for a stylish and responsive structure, and Animate.css for elegant animations.    " },
  
];


const WorkExperience = forwardRef((props, ref) => {
  const [selectedId, setSelectedId] = useState(1);
  const itemHeight = 58;

  return (
    <>
      <div>
        <h1 data-aos="fade-up" className="works-02" ref={ref}> <span>02. </span>  Where I’ve Worked ────</h1>
      </div>
      <div data-aos="fade-up" className="experience-container" >
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
          <a className="title-link" href={experiences.find((exp) => exp.id === selectedId).url} 
            target="_blank" 
            rel="noopener noreferrer">
            <h2 className="work-title">{experiences.find((exp) => exp.id === selectedId).company}</h2>
          </a>
          
          <p>
            <span>  ▻ </span>{experiences.find((exp) => exp.id === selectedId).description}</p>
        </div>
      </div>
    </>
  );
});

WorkExperience.displayName = "WorkExperience";

export default WorkExperience;
