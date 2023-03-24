import { fetchBeer } from "@/api/fetchBeer";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

export const beersQueryKey = () => ["beers"];

export const options = {
  queryKey: beersQueryKey(),
  queryFn: (data) => {
    return fetchBeer({
      page: data.pageParam,
    });
  },
  getNextPageParam: (lastPage) => {
    return (lastPage as { beers: []; nextPage: null | number }).nextPage;
  },
} satisfies UseInfiniteQueryOptions;

export const useBeers = () => {
  return useInfiniteQuery(options);
};
