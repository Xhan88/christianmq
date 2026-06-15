

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
  Hello! I’m a Front-End Developer with four years of experience building responsive, user-focused websites and web applications. Throughout my journey, I’ve worked on real-world projects, continuously strengthening my skills in <span>JavaScript, React.js, HTML, CSS, Tailwind CSS and WordPress.</span>
</p>

<p data-aos="fade-up">
  I have experience working with <span>Elementor, Bootstrap, Material UI, GitHub and REST APIs,</span> developing and optimizing digital solutions that prioritize performance, scalability and user experience. I enjoy transforming ideas and designs into intuitive, engaging interfaces that work seamlessly across all devices.
</p>

<p data-aos="fade-up">
  In addition to collaborating on web applications, I’ve developed websites for local businesses and founded my own digital agency, where I help brands strengthen their online presence through modern web solutions. I’m always eager to take on new challenges, improve my technical skills and stay up to date with the latest industry trends.
</p>

<p data-aos="fade-up">
  Technologies I’ve been working with recently:
</p>
        <ul className="order-list" data-aos="fade-up">
          <li><span>▻</span> JavaScript (ES6+)</li>
          <li><span>▻</span> React</li>
          <li><span>▻</span> HTML</li>
          <li><span>▻</span> CSS</li>
          <li><span>▻</span> Node.js</li>
          <li><span>▻</span> WordPress</li>
          <li><span>▻</span> Tailwind</li>
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
