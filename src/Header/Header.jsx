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
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor in sunt aspernatur suscipit consectetur, dignissimos commodi. Labore dolore est quibusdam repellat repellendus! Praesentium minus odio debitis aut distinctio expedita repellendus.</p>
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
