import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MyProyects.css'

const MyProyects = () => {
  return (
    <div>
      <h1 className="section-three"><span>03. </span>Some Things I’ve Built ────────────</h1> 
        <section className='style-works'>
        <div className='img-container2'>
            <a href="https://butcher-martinez-christian.netlify.app/" target='_blank'>
            <img className='img-proyects' src="./483.png" alt="works" />
            </a>
            
        </div>       
            <div className='information-works'>
                        <p className='studie-proyects'>Christian Martinez </p>
                        <h3>Profecional Butcher</h3>
                        <p className='content-description'>My professional butcher presentation website, developed with React,<span> HTML, and CSS</span> , offers an engaging visual experience with<span> Animate.css</span>  animations and <span> AOS</span>  hover effects. It showcases my expertise in boning, fine cuts, and customer service, highlighting my background in the meat industry with a modern and dynamic design.</p>
                    <ul className='list-tecnology'>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React.js</li>
                            <li>Responsive</li>                           
                    </ul>

                    <div>
                    <FontAwesomeIcon icon="fa-brands fa-github" />
                        <a href="">page</a>
                    </div>
            </div>
            
            
           
        </section>

        <section className='style-works-reverce'>
                
            <div className='information-works-reverce'>
                        <p className='studie-proyects'>Pedicure Clinico </p>
                        <h3>Susy Sanchez</h3>
                        <p className='content-description-reverce'>I developed a website for a clinical pedicure salon using React, HTML, CSS, React Router DOM, and MUI. This project, created after graduating from the Coderhouse bootcamp, helped improve the business`s digital presence, increasing its client base by 20% and providing a modern and intuitive experience.</p>
                    <ul className='list-tecnology'>
                            <li>React.js</li>
                            <li>ReactRouterDom</li>
                            <li>MUI</li>
                            <li>CSS</li>                           
                    </ul>

                    <div>
                        <a href="">github</a>
                        <a href="">page</a>
                    </div>
                    <div>
                    <a href="https://pedicure-clinico-susy-sanchez.netlify.app/" target='_blank'>
                     <img className='img-proyects-reverce' src="./484.png" alt="works" />
                    </a>

                    
                   
                    </div> 
            </div>
            
            
           
        </section>

        <section className='style-works'>
        <div>
            <img className='img-proyects' src="./485.png" alt="works" />
            </div>       
            <div className='information-works'>
                        <p className='studie-proyects'>Lorem ipsum dolor </p>
                        <h3>hello world</h3>
                        <p className='content-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi beatae autem nemo asperiores veritatis quia dignissimos inventore nihil aliquid nostrum. ignissimos inventore nihil aliquid nostrumignissimos inventore nihil aliquid nostrum</p>
                    <ul className='list-tecnology'>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>
                            <li>lorem</li>                           
                    </ul>

                    <div>
                        <a href="">github</a>
                        <a href="">page</a>
                    </div>
            </div>
            
            
           
        </section>
      </div>
    
  )
}

export default MyProyects
