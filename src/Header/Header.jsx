import React, { useEffect } from "react"
import "./header.css"
import AOS from "aos"
import "aos/dist/aos.css"; 

const Header = React.forwardRef((props, ref) => {
 
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh(); // ✅ Ensures animations work even after dynamic content updates
  }, []);
  

return (
  
    <>
    <div ref={ref} className="gretting-container" >
      <p className="greting" data-aos="fade-up">
          Hi, My name is
      </p>
      <h1 className="name" data-aos="fade-up">Christian Martínez.</h1>
      <h2 className="name-tex-section" data-aos="fade-up">I build things for the web.</h2>
      <p className="description" data-aos="fade-up">I am a web developer with 4 years of experience in creating websites using <span> Elementor, WordPress, GitHub, MUI, and Bootstrap.</span> I have solid knowledge of 
      <span> HTML, CSS, JavaScript, and React.js.</span> I am continuously improving my skills and learning new <span>technologies.</span></p>
      <a  
          data-aos="fade-up"
          href="https://github.com/Xhan88" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-github"
        >
          Check out my GitHub!
        </a>
     </div>
       
    </>
   
  );
});

Header.displayName = "Header";
export default Header
