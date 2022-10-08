import Image from "next/image";
import { CardProps } from "../interfaces/card-props";

const Card = ({ card }: CardProps) => {
  return (
    <Image
      src={card.link}
      alt={card.name}
      width={100}
      height={100}
      objectFit="cover"
    />
  );
};

export default Card;
