import { Convert } from "./transformer";

export const fetchBeer = async ({
  page = 1,
  perPage = 25,
}: {
  page?: number;
  perPage?: number;
}) => {
  const params = new URLSearchParams({
    page: page?.toString(),
    per_page: perPage?.toString(),
  });

  const data = await fetch(`https://api.punkapi.com/v2/beers?${params}`);

  if (!data.ok) {
    throw new Error("Error fetching data");
  }

  const beers = await data.text();

  const convertedBeers = Convert.toBeer(beers);
  const hasNextPage = convertedBeers.length === perPage;

  console.log("hasNextPage", hasNextPage);

  return {
    beers: convertedBeers,
    nextPage: hasNextPage ? page + 1 : null,
  };
};
