import { defaultOptions } from "@/hooks/useBeers";
import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { fetchBeer } from "@/api/fetchBeer";
import { Button, Divider, Pagination } from "react-daisyui";
import { atomWithHash } from "jotai-location";
import { Router, useRouter } from "next/router";
import { useAtom } from "jotai";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";
import { Link } from "@/components/Link";
import { RoutedQuery } from "nextjs-routes";
import { getPlaiceholder } from "plaiceholder";

const options = (pageParam: number, perPage: number) => ({
  queryKey: ["beers", pageParam, perPage],
  queryFn: () =>
    fetchBeer({
      page: pageParam,
      perPage,
    }),
});

const useBeersPaginate = ({ pageParam = 1, perPage = 10 }) => {
  return useQuery(options(pageParam, perPage));
};

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

const PagesButtons = ({
  page,
  setPage,
  isLastPage,
  className,
}: {
  page: number;
  setPage: (page: number) => void;
  isLastPage?: boolean;
  className?: string;
}) => {
  return (
    <Pagination className={`flex justify-center ${className}`}>
      <Button
        color="primary"
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
          window.scrollTo({ top: 0 });
        }}
      >
        «
      </Button>
      <Button color="primary">Page {page}</Button>
      <Button
        color="primary"
        disabled={isLastPage}
        onClick={() => {
          setPage(page + 1);
          window.scrollTo({ top: 0 });
        }}
      >
        »
      </Button>
    </Pagination>
  );
};

const perPage = 32;

export default function Home({
  beers,
  nextPage,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  const router = useRouter<"/page/[pageNumber]">();

  const page = parseInt(router.query.pageNumber ?? "1");

  const setPage = (page: number) => {
    router.push({
      pathname: "/page/[pageNumber]",
      query: {
        pageNumber: page.toString(),
      },
    });
  };

  return (
    <Layout>
      <div className="flex mt-4 justify-between mx-4">
        <div />
        <PagesButtons
          className="ml-12"
          page={page}
          setPage={setPage}
          isLastPage={!nextPage}
        />
        <Link href="/wall" className="block mt-4">
          Disable pagination
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4">
        <AnimatePresence mode="popLayout">
          {beers.map((beer, i) => (
            <motion.div
              key={beer.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.4,
              }}
            >
              <BeerCard
                height={400}
                beer={beer}
                placeholder={
                  "placeholder" in beer ? beer.placeholder : undefined
                }
              />
            </motion.div>
          ))}
          {!beers || beers.length === 0
            ? Array.from({ length: perPage }).map((_, i) => (
                <motion.div
                  key={i + "placeholder"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                >
                  <Skeleton />
                </motion.div>
              ))
            : null}
        </AnimatePresence>
      </div>
      <PagesButtons
        className="mb-10"
        page={page}
        setPage={setPage}
        isLastPage={!nextPage}
      />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths<
  RoutedQuery<"/page/[pageNumber]">
> = async () => {
  if (process.env.NODE_ENV === "development") {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const beers = [];

  let page = 1;

  let { beers: beersPage, nextPage } = await fetchBeer({
    page,
    perPage,
  });

  beers.push(...beersPage);

  while (nextPage) {
    page++;

    const { beers: beersPage, nextPage: nextPagePage } = await fetchBeer({
      page,
      perPage,
    });
    beers.push(...beersPage);
    nextPage = nextPagePage;
  }

  const numberOfPages = Math.ceil(beers.length / perPage);

  console.log(numberOfPages);

  return {
    paths: Array.from({ length: numberOfPages }).map((_, id) => ({
      params: {
        pageNumber: (id + 1).toString(),
      },
    })),
    fallback: "blocking",
  };
};

export async function getStaticProps(
  context: GetStaticPropsContext<RoutedQuery<"/page/[pageNumber]">>
) {
  const page = parseInt(context.params?.pageNumber ?? "1");

  const { beers, nextPage } = await fetchBeer({
    page,
    perPage,
  });

  const beersWithImages = await Promise.all(
    beers.map(async (beer) => {
      if (!beer.imageURL) return beer;

      const placeholder = await getPlaiceholder(beer.imageURL);

      return {
        ...beer,
        placeholder: placeholder.base64,
      };
    })
  );

  return {
    props: {
      nextPage,
      beers: beersWithImages,
    },
  };
}
