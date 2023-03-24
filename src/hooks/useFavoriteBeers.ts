import { fetchBeer } from "@/api/fetchBeer";
import {
  UseInfiniteQueryOptions,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";
import { useFavorite } from "./useFavorite";

export const useFavoriteBeers = () => {
  const { favoriteBeers } = useFavorite();

  return useQuery({
    queryKey: ["beers", "favorite", favoriteBeers],
    queryFn: () => {
      return fetchBeer({
        ids: favoriteBeers.map((id) => id.toString()),
      });
    },
  });
};
