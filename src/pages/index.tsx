import { beersQueryKey, options, useBeers } from "@/hooks/useBeers";
import { MasonryGrid } from "@/components/MasonryGrid";
import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchBeer } from "@/api/fetchBeer";

export default function Home() {
  const beers = useBeers();

  const numberOfBeers =
    beers.data?.pages.reduce((acc, page) => acc + page.beers.length, 0) ?? 0;

  return (
    <Layout>
      <div className="mt-14">
        <MasonryGrid
          next={() => {
            beers.fetchNextPage();
          }}
          loader={<p>Ładowanko</p>}
          scrollThreshold={0.6}
          dataLength={numberOfBeers}
          hasMore={beers.hasNextPage ?? false}
        >
          {beers.data?.pages.map((page) =>
            page.beers.map((beer) => <BeerCard key={beer.id} beer={beer} />)
          ) ?? []}
        </MasonryGrid>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery(options);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
}
