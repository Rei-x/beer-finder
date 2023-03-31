import { BeerCard } from "@/components/BeerCard";
import { Layout } from "@/components/Layout";
import { fetchBeer } from "@/api/fetchBeer";
import { Button, Pagination } from "react-daisyui";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetServerSidePropsType,
} from "next";
import { Link } from "@/components/Link";
import { RoutedQuery } from "nextjs-routes";
import { getPlaiceholder } from "plaiceholder";

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
      <div className="mt-4 justify-between items-center mx-4 hidden md:flex">
        <div />
        <PagesButtons
          className="ml-12"
          page={page}
          setPage={setPage}
          isLastPage={!nextPage}
        />
        <Link href="/wall">Disable pagination</Link>
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
