import Image from "next/image";
import { CardProps } from "../interfaces/card-props";

const Card = ({ card }: CardProps) => {
  return (
    <div className="rounded-xl border-2 border-white overflow-hidden w-48">
      <Image
        src={card.link}
        alt={card.name}
        width={200}
        height={100}
        objectFit="cover"
      />
      <div className="bg-white text-sm text-center py-2">{card.name}</div>
    </div>
  );
};

export default Card;
