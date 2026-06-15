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
            <a href="https://belanaproyect.netlify.app/" target='_blank'>
            <img data-aos="fade-up" className='img-proyects' src="./483.png" alt="works" />
            </a>
            
        </div>       
            <div className='information-works'>
                        <p data-aos="fade-up" className='studie-proyects'>Bel Ana</p>
                        <h3 data-aos="fade-up">Pizzeria</h3>
                        <p data-aos="fade-up" className='content-description'>I designed and developed a professional website for a local pizzeria using <span>React, TypeScript,</span>  and <span>Tailwind CSS.</span>  I implemented a responsive design, intuitive navigation, and a modern visual identity focused on improving the business&apos;s digital presence and customer experience.</p>
                    <ul data-aos="fade-up" className='list-tecnology'>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>TypeScript</li>
                            <li>Responsive</li>                           
                    </ul>

                    <div data-aos="fade-up" className='iconsWorks'> 
                        
                        <a href="https://github.com/Xhan88/pizzeria-bel-ana" target='_blanck'>
                         <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </a>

                        <a href="https://belanaproyect.netlify.app/"  target='_blanck'>
                        <FontAwesomeIcon icon={faLink} className='icon'/>
                        </a>
            
                    </div>
            </div>
            
            
           
        </section>

        <section className='style-works-reverce'>
                
            <div className='information-works-reverce'>
                        <p data-aos="fade-up" className='studie-proyects'>Patas pirque</p>
                        <h3 data-aos="fade-up" >Pet adoption platform</h3>
                        <p data-aos="fade-up" className='content-description-reverce'>I developed frontend functionalities for a pet adoption platform using <span>React.js, Tailwind CSS,</span>  and <span>JavaScript</span>. I implemented advanced forms, REST API integration, user authentication, pet management, and adoption requests, contributing to an intuitive and scalable user experience.</p>
                    <ul data-aos="fade-up" className='list-tecnology'>
                            <li>React.js</li>
                            <li>React Router DOM</li>
                            <li>Tailwind</li>
                                                    
                    </ul>

                    <div>

                    <div data-aos="fade-up" className='iconWorks'> 
                    <a href="https://github.com/Carolina2024/match_project" target='_blanck'>
                         <FontAwesomeIcon icon={faGithub} className="icon"/>
                        </a>

                        <a href="https://match-adopcion-mascotas.vercel.app/" target='_blanck'>
                        <FontAwesomeIcon icon={faLink} className='icon' />
                        </a>
                    </div>

                    </div>
                    <div>
                    <a href="https://match-adopcion-mascotas.vercel.app/" target='_blank'>
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
                        <p data-aos="fade-up" className='studie-proyects'>Código Fuente</p>
                        <h3 data-aos="fade-up">digital marketing agency</h3>
                        <p data-aos="fade-up" className='content-description'>Founder and developer of <span>Código Fuente</span>, an agency focused on helping local businesses and entrepreneurs strengthen their digital presence through modern website development, brand optimization, and digital marketing strategies. Responsible for creating <span>responsive websites</span> , designing user experiences, implementing technological solutions, and providing direct client support to drive their online growth.</p>
                    <ul data-aos="fade-up" className='list-tecnology'>
                            
                            <li>React.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind</li>                           
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
