import { ICard } from "../interfaces/card-interface";
import { CollectionProps } from "../interfaces/collection-props";
import Button from "./Button";
import Card from "./Card";

const BuyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      />
    </svg>
  );
};

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
      className="border-white border-opacity-10 border-2 rounded-lg my-2 transition-all hover:border-opacity-40"
    >
      <div className="flex justify-between align-center p-2">
        <p className="text-white font-semibold">{collection.name}</p>
        <Button icon={<BuyIcon />} onClick={() => onClickBuy(collection.id)}>
          Buy
        </Button>
      </div>
      <div className="flex justify-center flex-wrap">
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
