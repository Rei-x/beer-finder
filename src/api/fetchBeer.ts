import { Convert } from "./transformer";

export const fetchBeer = async ({
  page = 1,
  perPage = 25,
  beerName,
  ids,
}: {
  page?: number;
  perPage?: number;
  beerName?: string;
  ids?: string | string[];
}) => {
  let additionalParams = {};

  if (beerName) {
    additionalParams = {
      beer_name: beerName,
    };
  }

  if (ids) {
    additionalParams = {
      ids: Array.isArray(ids) ? ids.join("|") : ids,
    };
  }

  const params = new URLSearchParams({
    page: page.toString() ?? "1",
    per_page: perPage?.toString(),
    ...additionalParams,
  });

  const data = await fetch(`https://api.punkapi.com/v2/beers?${params}`);

  if (!data.ok) {
    throw new Error("Error fetching data");
  }

  const beers = await data.text();

  const convertedBeers = Convert.toBeer(beers);
  const hasNextPage = convertedBeers.length === perPage;

  return {
    beers: convertedBeers,
    nextPage: hasNextPage ? page + 1 : null,
  };
};
