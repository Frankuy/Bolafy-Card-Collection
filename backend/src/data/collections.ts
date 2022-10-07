import { Collection } from "../interfaces/collection-interface";
import generateCards from "../utils/generate-cards";

const collections: Collection[] = [
  {
    id: "Persija",
    name: "Persija Jakarta",
    cards: generateCards(10, "Persija"),
  },
  {
    id: "Persib",
    name: "Persib Bandung",
    cards: generateCards(10, "Persib"),
  },
  {
    id: "Persebaya",
    name: "Persebaya Surabaya",
    cards: generateCards(10, "Persebaya"),
  },
];

export default collections;
