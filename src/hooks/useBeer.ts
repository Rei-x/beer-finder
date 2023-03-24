import { fetchBeer } from "@/api/fetchBeer";
import { useQuery } from "@tanstack/react-query";

export const useBeer = (id: string) => {
  return useQuery({
    queryKey: ["beer", id],
    queryFn: () => fetchBeer({ ids: id, perPage: 1 }),
  });
};
