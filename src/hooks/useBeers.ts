import { fetchBeer } from "@/api/fetchBeer";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useBeers = () => {
  return useInfiniteQuery({
    queryKey: ["beers"],
    queryFn: (data) => {
      return fetchBeer({
        page: data.pageParam,
      });
    },
    getNextPageParam: (lastPage) => {
      return lastPage.nextPage;
    },
  });
};
