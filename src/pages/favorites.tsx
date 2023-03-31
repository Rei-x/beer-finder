import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { useFavoriteBeers } from "@/hooks/useFavoriteBeers";
import React from "react";

const Favorites = () => {
  const favoriteBeers = useFavoriteBeers();

  return (
    <Layout>
      <div className="container mx-auto flex flex-col justify-center">
        <div className="prose mx-auto mt-24 w-full text-center">
          <h1>Your favorite beers 💗</h1>
        </div>
        <div className="mt-8 mb-16 grid w-full grid-cols-1 justify-center gap-8 p-4 md:mx-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteBeers.data?.beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} height={400} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
