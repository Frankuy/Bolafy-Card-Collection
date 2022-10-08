import { ICard } from "./card-interface";

export interface ICollection {
  id: string;
  name: string;
  cards: ICard[];
}
