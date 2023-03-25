import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { useFavoriteBeers } from "@/hooks/useFavoriteBeers";
import React from "react";

const Favorites = () => {
  const favoriteBeers = useFavoriteBeers();

  return (
    <Layout>
      <div>
        <div className="prose mt-24 mx-auto text-center w-full">
          <h1>Your favorite beers 💗</h1>
        </div>
        <div className="w-full grid mt-8 mb-16 grid-cols-masonry gap-x-8 auto-rows-masonry justify-center">
          {favoriteBeers.data?.beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Favorites;
