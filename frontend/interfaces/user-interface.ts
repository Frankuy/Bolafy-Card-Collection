import { ICard } from "./card-interface";

export interface User {
  username: string;
  name: string;
  cards: ICard[];
}
