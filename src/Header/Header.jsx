import React from "react"
import "./header.css"

const Header = React.forwardRef((props, ref) => {
  return (
    <>
    <div ref={ref} className="gretting-container" >
      <p className="greting">
          Hi, My name is
      </p>
      <h1 className="name">Christian Martínez.</h1>
      <h2 className="name-tex-section">I build things for the web.</h2>
      <p className="description">I am a web developer with 4 years of experience in creating websites using <span> Elementor, WordPress, GitHub, MUI, and Bootstrap.</span> I have solid knowledge of 
      <span> HTML, CSS, JavaScript, and React.js.</span> I am continuously improving my skills and learning new <span>technologies.</span></p>
      <a 
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
