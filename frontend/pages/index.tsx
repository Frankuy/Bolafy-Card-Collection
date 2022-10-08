import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";
import Collection from "../components/Collection";
import Header from "../components/Header";
import Title from "../components/Title";
import { ICard } from "../interfaces/card-interface";
import { ICollection } from "../interfaces/collection-interface";
import { HomePageProps } from "../interfaces/home-page-props";

const Home: NextPage<HomePageProps> = ({ collections }) => {
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
    <div>
      <Header />
      <div className="px-8">
        <div className="mb-2">
          <Title />
        </div>
        {collections.map((collection) => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/collections");
  const collections: ICollection[] = await res.json();

  return {
    props: {
      collections,
    },
    revalidate: 10,
  };
}

export default Home;
