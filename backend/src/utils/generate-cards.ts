import { Card } from "../interfaces/card-interface";
import { v4 as uuidv4 } from "uuid";

const generateCards = (number: number, prefix: string): Card[] => {
  const cards = [];
  for (let index = 0; index < number; index++) {
    cards.push({
      id: uuidv4(),
      name: `${prefix}-${index + 1}`,
      link: "https://upload.wikimedia.org/wikipedia/id/9/94/Persija_Jakarta_logo.png",
    });
  }
  return cards;
};

export default generateCards;
