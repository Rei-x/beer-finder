import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { useFavoriteBeers } from "@/hooks/useFavoriteBeers";
import React from "react";

const Favorites = () => {
  const favoriteBeers = useFavoriteBeers();

  return (
    <Layout>
      <div className="mt-14 max-w-5xl mx-12 flex-wrap flex justify-center items-center">
        {favoriteBeers.data?.beers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </Layout>
  );
};

export default Favorites;
