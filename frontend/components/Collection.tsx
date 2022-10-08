import { ICard } from "../interfaces/card-interface";
import Button from "./Button";
import Card from "./Card";
import Slider from "react-slick";
import BuyIcon from "./BuyIcon";
import carouselSetting from "../settings/carousel";
import { useModal } from "react-modal-hook";
import { useState } from "react";
import Modal from "./Modal";
import { ICollection } from "../interfaces/collection-interface";

interface CollectionProps {
  collection: ICollection;
}

const Collection = ({ collection }: CollectionProps) => {
  const [newCards, setNewCards] = useState<ICard[]>([]);
  const [showModal, hideModal] = useModal(
    () => (
      <Modal>
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-bold text-xl">
            Congrats! you get these cards
          </p>
          <div className="flex flex-wrap justify-center">
            {newCards.map((card) => (
              <div className="m-4" key={card.id}>
                <Card card={card} />
              </div>
            ))}
          </div>
          <Button onClick={hideModal}>Close</Button>
        </div>
      </Modal>
    ),
    [newCards]
  );

  const onClickBuy = async (collectionId: string) => {
    const res = await fetch("http://localhost:3000/api/purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "test",
        collectionId,
      }),
    });
    const data: ICard[] = await res.json();
    setNewCards(data);
    showModal();
  };

  return (
    <div
      key={collection.id}
      className="border-white border-opacity-10 border-2 rounded-lg my-2 transition-all hover:border-opacity-40"
    >
      <div className="flex justify-between align-center p-2">
        <p className="text-white font-semibold">{collection.name}</p>
        <Button icon={<BuyIcon />} onClick={() => onClickBuy(collection.id)}>
          Buy
        </Button>
      </div>
      <div className="w-auto mx-8">
        <Slider {...carouselSetting}>
          {collection.cards.map((card) => (
            <div key={card.id}>
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
