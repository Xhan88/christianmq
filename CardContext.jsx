import { createContext } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const cardsData = [
    {
      id: 1,
      title: "Develop a website for a Matamoros butcher shop using WordPress and Elements",
      description: "The Carnicería Matamoros website, developed with WordPress and Elementor Pro, offers an attractive design, intuitive navigation, and SEO optimization. With dynamic menus and featured promotions, they managed to increase their clientele by 20% this year, strengthening their digital presence.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Taqueria del Abuelo, hired to create the taqueria's website",
      description: "La web de Taquería del Abuelo, creada con WordPress y Elementor, combina elegancia y funcionalidad. Presenta un menú interactivo, la historia de su familia fundadora y un diseño atractivo que refleja tradición y calidad, brindando una experiencia digital envolvente para sus clientes.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "My first Portfolio",
      description: "My first portfolio, created with React.js and CSS, showcases my early development experience. I explore CSS animations to add dynamism and style, reflecting my learning and creativity in web development.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <CardContext.Provider value={{ cardsData }}>
      {children}
    </CardContext.Provider>
  );
};
