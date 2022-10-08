import Image from "next/image";
import { useModal } from "react-modal-hook";
import Modal from "./Modal";
import Button from "./Button";
import { ICard } from "../interfaces/card-interface";

interface CardProps {
  card: ICard;
}

const Card = ({ card }: CardProps) => {
  const [showModal, hideModal] = useModal(() => (
    <Modal>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white font-bold text-xl">{card.name}</p>
        <Image
          src={card.link}
          alt={card.name}
          width={400}
          height={400}
          objectFit="contain"
        />
        <Button onClick={hideModal}>Close</Button>
      </div>
    </Modal>
  ));
  return (
    <div
      onClick={showModal}
      className="rounded-xl border-2 border-gray-100 border-opacity-40 overflow-hidden w-48 transition-all hover:border-opacity-100"
    >
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
