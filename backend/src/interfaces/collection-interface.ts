import { Card } from "./card-interface";

export interface Collection {
  id: string;
  name: string;
  cards: Card[];
}
