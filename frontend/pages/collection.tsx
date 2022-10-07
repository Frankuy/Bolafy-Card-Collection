import type { NextPage } from "next";
import Image from "next/image";
import { Card } from "../interfaces/card-interface";
import { CollectionPageProps } from "../interfaces/collection-page-props";
import styles from "../styles/Home.module.css";

const CollectionPage: NextPage<CollectionPageProps> = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Image
          key={card.id}
          src={card.link}
          alt={card.name}
          width={100}
          height={100}
          objectFit="contain"
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/users/test/cards");
  const cards: Card[] = await res.json();

  return {
    props: {
      cards,
    },
    revalidate: 10,
  };
}

export default CollectionPage;
