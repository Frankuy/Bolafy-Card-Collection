import type { NextPage } from "next";
import Collection from "../components/Collection";
import Header from "../components/Header";
import Title from "../components/Title";
import { ICollection } from "../interfaces/collection-interface";

interface HomePageProps {
  collections: ICollection[];
}

const Home: NextPage<HomePageProps> = ({ collections }) => {
  return (
    <div>
      <Header />
      <div className="px-8">
        <div className="mb-2">
          <Title>Explore</Title>
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
