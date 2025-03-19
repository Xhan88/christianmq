import { createContext } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const cardsData = [
    {
      id: 1,
      title: "Develop a website for a Matamoros butcher shop using WordPress and Elements",
      description: "The Carnicería Matamoros website, developed with WordPress and Elementor Pro, offers an attractive design, intuitive navigation, and SEO optimization. With dynamic menus and featured promotions, they managed to increase their clientele by 20% this year, strengthening their digital presence.",
      link: "https://cristian-pruebas-wordpress-1.617iip.easypanel.host/"
    },
    {
      id: 2,
      title: "Taqueria del Abuelo, hired to create the taqueria's website",
      description: "Taquería del Abuelo's website, created with WordPress and Elementor, combines elegance and functionality. It features an interactive menu, the story of its founding family, and an attractive design that reflects tradition and quality, providing an immersive digital experience for its customers.",
      link: "https://cristian-pruebas-wordpress-2.617iip.easypanel.host/"
    },
    {
      id: 3,
      title: "My first Portfolio",
      description: "My first portfolio, created with React.js and CSS, showcases my early development experience. I explore CSS animations to add dynamism and style, reflecting my learning and creativity in web development.",
      link: "https://react-web-site-martinez.netlify.app/"
    }
  ];

  return (
    <CardContext.Provider value={{ cardsData }}>
      {children}
    </CardContext.Provider>
  );
};
