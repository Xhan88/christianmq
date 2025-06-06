

import React, { useEffect } from "react"; // Asegúrate de importar React
import "../../src/AboutMe.css";
import Aos from "aos";

// Uso correcto de React.forwardRef con displayName
const AboutMe = React.forwardRef((props, ref) => {


  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div ref={ref} className="about-me-container">
      <div className="text-container">
        <h1 data-aos="fade-up" className="title-about"><span>01.</span> About Me  ──────────────</h1>
        <p data-aos="fade-up">
          Hello! I’m a front-end developer passionate about crafting responsive and dynamic web experiences. My journey into web development started four years ago, and since then, I’ve been honing my skills in <span> JavaScript, React.js, HTML, CSS, and WordPress.</span>
        </p>
        <p data-aos="fade-up">
          I have experience working with <span> Elementor, Bootstrap, MUI, and GitHub,</span>  building and optimizing websites for performance and user experience. I enjoy bringing designs to life and ensuring seamless interactions for users across different devices.
        </p>
        <p data-aos="fade-up">
          Currently, I’m focused on improving my problem-solving skills in JavaScript, deepening my understanding of React.js, and staying updated with modern web development trends. I’m always eager to take on new challenges and grow as a developer.
        </p>
        <p data-aos="fade-up">Technologies I’ve been working with recently:</p>
        <ul className="order-list" data-aos="fade-up">
          <li><span>▻</span> JavaScript (ES6+)</li>
          <li><span>▻</span> React</li>
          <li><span>▻</span> HTML</li>
          <li><span>▻</span> CSS</li>
          <li><span>▻</span> Node.js</li>
          <li><span>▻</span> WordPress</li>
        </ul>
      </div>
      <div className="img-container-chan" data-aos="fade-up">
        <img className="img-chan" src="./482.jpg" alt="" />
      </div>
    </div>
  );
});

// Asignando un displayName
AboutMe.displayName = "AboutMe";

export default AboutMe;
