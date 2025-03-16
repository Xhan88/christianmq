import { useContext } from "react";
import { CardContext } from "../../CardContext";


const Card = () => {
  const { cardsData } = useContext(CardContext);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      {cardsData.map((card) => (
        <div key={card.id} style={{ 
            width: "300px",  // Cambia este valor para ajustar el ancho
            height: "300px", // Cambia este valor para ajustar la altura
            border: "1px solid #ddd", 
            padding: "20px", 
            borderRadius: "8px" 
        }}>  
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <img src={card.image} alt={card.title} style={{ width: "100px", height: "100px" }} />
        </div>
      ))}
    </div>
  );
};

export default Card;
