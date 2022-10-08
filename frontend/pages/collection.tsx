import type { NextPage } from "next";
import Card from "../components/Card";
import Header from "../components/Header";
import Title from "../components/Title";
import { ICard } from "../interfaces/card-interface";
import { CollectionPageProps } from "../interfaces/collection-page-props";

const CollectionPage: NextPage<CollectionPageProps> = ({ cards }) => {
  return (
    <div>
      <Header />
      <div className="px-8">
        <div className="mb-2">
          <Title>Your Collection</Title>
        </div>
        <div className="flex flex-wrap justify-center">
          {cards.map((card) => (
            <div key={card.id} className="m-1">
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users/test/cards");
  const cards: ICard[] = await res.json();

  return {
    props: {
      cards,
    },
    revalidate: 10,
  };
}

export default CollectionPage;
