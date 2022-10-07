import { Card } from "../interfaces/card-interface";

const generateCards = (number: number, prefix: string): Card[] => {
  const cards = [];
  for (let index = 0; index < number; index++) {
    cards.push({
      id: `${prefix}-${index + 1}`,
      name: `${prefix}-${index + 1}`,
      link: "https://upload.wikimedia.org/wikipedia/id/9/94/Persija_Jakarta_logo.png",
    });
  }
  return cards;
};

export default generateCards;
