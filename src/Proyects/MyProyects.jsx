import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faLink } from "@fortawesome/free-solid-svg-icons";


import './MyProyects.css'
import React from 'react';

const MyProyects = React.forwardRef((props, ref) => {
  return (
    <div className='container-three' ref={ref}>
      <h1 className="section-three" data-aos="fade-up"><span>03. </span>Some Things I’ve Built ────────────</h1> 
        <section className='style-works'>
        <div className='img-container2'>
            <a href="https://butcher-martinez-christian.netlify.app/" target='_blank'>
            <img data-aos="fade-up" className='img-proyects' src="./483.png" alt="works" />
            </a>
            
        </div>       
            <div className='information-works'>
                        <p data-aos="fade-up" className='studie-proyects'>Christian Martinez </p>
                        <h3 data-aos="fade-up">Profecional Butcher</h3>
                        <p data-aos="fade-up" className='content-description'>My professional butcher presentation website, developed with React,<span> HTML, and CSS</span> , offers an engaging visual experience with<span> Animate.css</span>  animations and <span> AOS</span>  hover effects. It showcases my expertise in boning, fine cuts, and customer service, highlighting my background in the meat industry with a modern and dynamic design.</p>
                    <ul data-aos="fade-up" className='list-tecnology'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Responsive</li>                           
                    </ul>

                    <div data-aos="fade-up" className='iconsWorks'> 
                        
                        <a href="https://github.com/Xhan88/Christian-Butcher" target='_blanck'>
                         <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </a>

                        <a href="https://butcher-martinez-christian.netlify.app/"  target='_blanck'>
                        <FontAwesomeIcon icon={faLink} className='icon'/>
                        </a>
            
                    </div>
            </div>
            
            
           
        </section>

        <section className='style-works-reverce'>
                
            <div className='information-works-reverce'>
                        <p data-aos="fade-up" className='studie-proyects'>Pedicure Clinico </p>
                        <h3 data-aos="fade-up" >Susy Sanchez</h3>
                        <p data-aos="fade-up" className='content-description-reverce'>I developed a website for a clinical pedicure salon using React, HTML, CSS, React Router DOM, and MUI. This project, created after graduating from the Coderhouse bootcamp, helped improve the business`s digital presence, increasing its client base by 20% and providing a modern and intuitive experience.</p>
                    <ul data-aos="fade-up" className='list-tecnology'>
                            <li>React.js</li>
                            <li>ReactRouterDom</li>
                            <li>MUI</li>
                            <li>CSS</li>                           
                    </ul>

                    <div>

                    <div data-aos="fade-up" className='iconWorks'> 
                    <a href="https://github.com/Xhan88/pedicure-susy" target='_blanck'>
                         <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </a>

                        <a href="https://pedicure-clinico-susy-sanchez.netlify.app/" target='_blanck'>
                        <FontAwesomeIcon icon={faLink} className='icon' />
                        </a>
                    </div>

                    </div>
                    <div>
                    <a href="https://pedicure-clinico-susy-sanchez.netlify.app/" target='_blank'>
                     <img data-aos="fade-up" className='img-proyects-reverce' src="./484.png" alt="works" />
                    </a>

                    
                   
                    </div> 
            </div>
            
            
           
        </section>

        <section className='style-works'>
        <div>
            <img data-aos="fade-up" className='img-proyects' src="./485.png" alt="works" />
            </div>       
            <div className='information-works'>
                        <p data-aos="fade-up" className='studie-proyects'>Tienda de Juguetes</p>
                        <h3 data-aos="fade-up">Proyecto Final CoderHouse</h3>
                        <p data-aos="fade-up" className='content-description'>ToyStore Online is a digital toy store developed with React.js, HTML, CSS, JavaScript, and Bootstrap, using FireStore as the database. This Coderhouse capstone project, with a passing grade, offers a modern and dynamic experience that makes exploring toys easy. It features a shopping cart, authentication, and responsive design for intuitive and engaging navigation.</p>
                    <ul data-aos="fade-up" className='list-tecnology'>
                            
                            <li>Bootstrap</li>
                            <li>Firestore</li>
                            <li>ReactRD</li>                           
                    </ul>

                    <div>
                    <div data-aos="fade-up" className='iconsWorks'> 
                    <a href="https://github.com/Xhan88/proyecto-final-e-commerce" target='_blanck'>
                         <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </a>

                        <a href="https://proyectofinalcoderhouseecommerce.netlify.app/" target='_blanck'>
                        <FontAwesomeIcon icon={faLink} className='icon' />
                        </a>
                    </div>
                    </div>
            </div>
            
            
           
        </section>
      </div>
    
  );
});

MyProyects.displayName = "MyProyects";
export default MyProyects
