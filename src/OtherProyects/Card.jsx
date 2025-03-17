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
        <h1>Other Noteworthy Projects</h1>
        <p>Lorem ipsum dolor sit.</p>
    </div>
    <div className="position-cards">
      {cardsData.map((card) => (
        <div className="style-cards" key={card.id}>  

    <div className="card-icons">
                    <a href="https://proyectofinalcoderhouseecommerce.netlify.app/" target='_blanck'>
                        <FontAwesomeIcon icon={faLink} className='icon' />
                    </a>

                    <a href="">
                        <FontAwesomeIcon icon={faFolder} style={{color:"var(--green-color)", fontSize: "30px"}}/>
                    </a>

    </div>
               

          <h3>{card.title}</h3>
          <p>{card.description}</p>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default Card;
