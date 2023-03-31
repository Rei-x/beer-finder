import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { useFavorite } from "@/hooks/useFavorite";
import { useFavoriteBeers } from "@/hooks/useFavoriteBeers";
import Link from "next/link";
import React from "react";
import { Button, Divider } from "react-daisyui";

const Skeleton = () => (
  <div
    role="status"
    className="space-y-8 my-4 animate-pulse shadow-lg p-3 md:flex flex-col items-center"
    style={{ height: 400 }}
  >
    <div className="w-full">
      <div className="h-4 bg-gray-200 rounded-full  w-10"></div>
      <div className="flex items-center mx-auto justify-center w-1/4 h-48 bg-gray-300 rounded"></div>
    </div>
    <Divider className="h-0" />
    <div className="w-full">
      <div className="h-2.5 bg-gray-200 rounded-full  w-1/2 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full  w-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full  w-full mb-2.5"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

const Favorites = () => {
  const favoriteBeers = useFavoriteBeers();
  const { favoriteBeers: localBeers } = useFavorite();

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
          {favoriteBeers.isLoading
            ? localBeers.map((id) => <Skeleton key={id} />)
            : null}
          {favoriteBeers.isError ? <p>Something went wrong</p> : null}
        </div>
        {!favoriteBeers.isLoading &&
        !favoriteBeers.isError &&
        favoriteBeers.data?.beers.length === 0 ? (
          <div className="flex flex-col items-center">
            <p className="text-center">
              You don&apos;t have any favorite beers yet
            </p>
            <Link
              href={{
                pathname: "/page/[pageNumber]",
                query: {
                  pageNumber: "1",
                },
              }}
            >
              <Button color="primary" className="mt-3">
                Let&apos;s find some
              </Button>
            </Link>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Favorites;
