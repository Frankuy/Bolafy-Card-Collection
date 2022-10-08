import { ICard } from "../interfaces/card-interface";
import { CollectionProps } from "../interfaces/collection-props";
import Button from "./Button";
import Card from "./Card";

const Collection = ({ collection }: CollectionProps) => {
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
    console.log(data);
  };

  return (
    <div
      key={collection.id}
      className="border-white border-opacity-10 border-2 rounded-lg my-2 transition-all hover:border-opacity-100"
    >
      <div className="flex justify-between align-center p-2">
        <p className="text-white">{collection.name}</p>
        <Button onClick={() => onClickBuy(collection.id)}>Buy</Button>
      </div>
      <div className="flex justify-center">
        {collection.cards.map((card) => (
          <div key={card.id} className="m-1">
            <Card card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
