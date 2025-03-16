import { createContext } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card.",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <CardContext.Provider value={{ cardsData }}>
      {children}
    </CardContext.Provider>
  );
};
