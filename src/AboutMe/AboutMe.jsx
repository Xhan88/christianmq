import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-container">
     <div className="text-container">
      <h1><span>01.</span> About Me</h1>
      <p>
        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
      </p>
      <p>
        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
      </p>
      <p>
        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
      </p>
      <p>Technologies I’ve been working with recently:</p>
      <ul className='order-list'>
        <li><span>▻</span> JavaScript (ES6+)</li>
        <li><span>▻</span>React</li>
        <li><span>▻</span>HTML</li>
        <li><span>▻</span>CSS</li>
        <li><span>▻</span>Node.js</li>
        <li><span>▻</span>WordPress</li>
      </ul>
      </div>
    <div className='img-chan'>
        <img src="./481.png" alt="" />
    </div>
      
    </div>
  );
};

export default AboutMe;