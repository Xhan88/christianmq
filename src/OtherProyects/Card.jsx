import { useContext } from "react";
import "./Card.css"
import { CardContext } from "../../CardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faLink } from "@fortawesome/free-solid-svg-icons";


const Card = () => {
  const { cardsData } = useContext(CardContext);

  return (
    <>
    <div className="title-other-works">
        <h1 data-aos="fade-up">Other Noteworthy Projects</h1>
        <p data-aos="fade-up">Lorem ipsum dolor sit.</p>
    </div>
    <div data-aos="fade-up" className="position-cards">
      {cardsData.map((card) => (
        <div className="style-cards" key={card.id}>  

    <div className="card-icons">
                    <a href={card.link} target="_blanck">
                        <FontAwesomeIcon icon={faLink} className='icon' href="https://cristian-pruebas-wordpress-1.617iip.easypanel.host/"/>
                    </a>

                    <a href="">
                        <FontAwesomeIcon icon={faFolder} style={{color:"var(--green-color)", fontSize: "30px"}}/>
                    </a>

    </div>
               
        <div className="text-cards">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
        </div>
          
          
        </div>
      ))}
    </div>
    </>
  );
};

export default Card;
