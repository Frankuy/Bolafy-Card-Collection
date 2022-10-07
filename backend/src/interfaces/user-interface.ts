import { Card } from "./card-interface";

export interface User {
  username: string;
  name: string;
  cards: Card[];
}
