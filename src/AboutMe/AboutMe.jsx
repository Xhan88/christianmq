import "../../src/AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about-me-container">
     <div className="text-container">
      <h1><span>01.</span> About Me  ──────────────</h1>
      <p>
      Hello! I'm a front-end developer passionate about crafting responsive and dynamic web experiences. My journey into web development started four years ago, and since then, I've been honing my skills in JavaScript, React.js, HTML, CSS, and WordPress.
      </p>
      <p>
      I have experience working with Elementor, Bootstrap, MUI, and GitHub, building and optimizing websites for performance and user experience. I enjoy bringing designs to life and ensuring seamless interactions for users across different devices.
      </p>
      <p>
      Currently, I'm focused on improving my problem-solving skills in JavaScript, deepening my understanding of React.js, and staying updated with modern web development trends. I'm always eager to take on new challenges and grow as a developer.
      </p>
      <p>Technologies I’ve been working with recently:</p>
      <ul className='order-list'>
        <li><span>▻</span>   JavaScript (ES6+)</li>
        <li><span>▻</span>   React</li>
        <li><span>▻</span>   HTML</li>
        <li><span>▻</span>   CSS</li>
        <li><span>▻</span>   Node.js</li>
        <li><span>▻</span>   WordPress</li>
      </ul>
      </div>
    <div >
        <img className='img-chan'src="./482.jpg" alt="" />
    </div>
      
    </div>
  );
};

export default AboutMe;


