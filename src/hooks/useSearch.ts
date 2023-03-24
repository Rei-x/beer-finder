import { fetchBeer } from "@/api/fetchBeer";
import { useQuery } from "@tanstack/react-query";

export const useSearchBeers = (beerName: string) => {
  return useQuery({
    queryKey: ["search", "beers", beerName],
    queryFn: () => fetchBeer({ beerName, perPage: 5 }),
  });
};
