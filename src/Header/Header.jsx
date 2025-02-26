import "./header.css"

const Header = () => {
  return (
    <>
    <div className="gretting-container">
      <p className="greting">
          Hi, My name is
      </p>
      <h1 className="name">Christian Martínez.</h1>
      <h2 className="name-tex-section">I build things for the web.</h2>
      <p className="description">I am a web developer with 4 years of experience in creating websites using Elementor, WordPress, GitHub, MUI, and Bootstrap. I have solid knowledge of HTML, CSS, JavaScript, and React.js. I am continuously improving my skills and learning new technologies.</p>
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
   
  )
}

export default Header
