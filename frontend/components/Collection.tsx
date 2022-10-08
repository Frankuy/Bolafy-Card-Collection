import { ICard } from "../interfaces/card-interface";
import { CollectionProps } from "../interfaces/collection-props";
import Button from "./Button";
import Card from "./Card";
import Slider from "react-slick";
import BuyIcon from "./BuyIcon";

const Collection = ({ collection }: CollectionProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <div className="w-auto mx-8">
        <Slider {...settings}>
          {collection.cards.map((card) => (
            <div key={card.id}>
              <Card card={card} />
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="flex justify-center flex-wrap">
        {collection.cards.map((card) => (
          <div key={card.id} className="m-1">
            <Card card={card} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Collection;
