import { Collection } from "../interfaces/collection-interface";
import generateCards from "../utils/generate-cards";

const collections: Collection[] = [
  {
    id: "Persija",
    name: "Persija Jakarta",
    cards: generateCards("Persija"),
  },
  {
    id: "Persib",
    name: "Persib Bandung",
    cards: generateCards("Persib"),
  },
  {
    id: "Persebaya",
    name: "Persebaya Surabaya",
    cards: generateCards("Persebaya"),
  },
];

export default collections;
