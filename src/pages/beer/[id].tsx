import { fetchBeer } from "@/api/fetchBeer";
import { Beer } from "@/api/transformer";
import { Layout } from "@/components/Layout";
import { GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import { RoutedQuery } from "nextjs-routes";
import React, { useState } from "react";
import Image from "next/image";
import { Ebc2Hex } from "@/lib/ebc2hex";
import { GetColorName } from "hex-color-to-color-name";
import { Card } from "react-daisyui";
import { imageClient } from "@/api/imageClient";
import { useRouter } from "next/router";
import { IGetPlaiceholderReturn, getPlaiceholder } from "plaiceholder";
import { FavoriteButton } from "@/components/FavoriteButton";
import noImage from "../.././../public/noimage.png";

const Stats = ({ beer }: { beer: Beer }) => {
  return (
    <div className="stats stats-vertical md:stats-horizontal shadow w-full md:w-auto">
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Attenuation</div>
        <div className="stat-value">{beer.attenuationLevel}%</div>
      </div>

      <div className="stat">
        <div
          className="stat-figure mt-7 text-secondary w-5 h-5 rounded"
          style={{
            backgroundColor: Ebc2Hex.convert(beer.ebc ?? 0, 0.5),
          }}
        ></div>
        <div className="stat-title">Color</div>
        <div className="stat-value">
          {GetColorName(Ebc2Hex.convert(beer.ebc ?? 0, 0.5))}
        </div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Power</div>
        <div className="stat-value">{beer.abv}%</div>
      </div>
    </div>
  );
};

const FoodCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <Card className="md:w-96 md:h-96" imageFull={true}>
      <Card.Image className="object-cover w-full h-3/4" src={image} />
      <Card.Body className="p-0 pl-4">
        <Card.Title className="mt-3">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

const Beer = ({
  beer,
  placeholderImage,
  images,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const imageWidth = (beer.imageURL ?? "").includes("keg") ? 120 : 100;

  return (
    <Layout>
      <div className="container px-4 md:mx-0 md:flex flex-col items-center mt-12 pb-32">
        <div className="md:flex justify-between items-start">
          <div className="md:max-w-5xl max-w-full">
            <div className="md:flex justify-between items-center">
              <div className="md:pr-16 prose">
                <p
                  className="cursor-pointer mr-auto hover:underline"
                  onClick={() => {
                    router.back();
                  }}
                >
                  Back
                </p>
                <div className="flex justify-between">
                  <div>
                    <h1>{beer.name}</h1>
                    <i>{beer.tagline}</i>
                  </div>
                  <FavoriteButton beerId={beer.id} />
                </div>
                <p className="text-justify">{beer.description}</p>
                <Stats beer={beer} />
              </div>
              <div className="hover:scale-105 transition-all pr-16 hover:rotate-6 hidden md:block">
                <Image
                  alt={beer.name}
                  src={beer.imageURL ?? noImage}
                  className={`object-contain transition-all duration-300 ${
                    isImageLoaded ? "blur-0" : "blur-lg"
                  }`}
                  placeholder={"blur"}
                  blurDataURL={
                    typeof placeholderImage === "string"
                      ? placeholderImage
                      : undefined
                  }
                  width={imageWidth}
                  height={390}
                  onLoad={() => {
                    setIsImageLoaded(true);
                  }}
                />
              </div>
            </div>
            <div>
              <div className="prose lg:prose-lg mt-8">
                <h2>
                  {beer.foodPairing.length > 0
                    ? "Pair with"
                    : "No food pairing found"}
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-3 w-full mt-4 not-prose">
                {images.map((image) => (
                  <FoodCard
                    key={image.image}
                    image={image.image}
                    name={image.food}
                  />
                ))}
              </div>
            </div>
            <div className="mt-16">
              <div className="prose  ">
                <h2>Brewers tips</h2>
                <blockquote>
                  <p className="text-xl italic font-medium max-w-2xl leading-relaxed ">
                    {beer.brewersTips}
                  </p>
                </blockquote>
              </div>
              <div className="prose  mt-16">
                <h2>Ingredients</h2>
              </div>
              <div className="grid gap-6 md:gap-0 md:max-w-6xl mt-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="prose ">
                  <h3>Hops</h3>
                  <ul>
                    {beer.ingredients.hops.map((hop) => (
                      <li key={hop.name}>
                        {hop.name} ({hop.amount.value} {hop.amount.unit})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="prose ">
                  <h3>Malt</h3>
                  <ul>
                    {beer.ingredients.malt.map((malt) => (
                      <li key={malt.name}>
                        {malt.name} ({malt.amount.value} {malt.amount.unit})
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="prose ">
                  <h3>Yeast</h3>
                  <ul>
                    <li>{beer.ingredients.yeast}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Beer;

export const getStaticPaths = async () => {
  return {
    paths: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((id) => ({
      params: {
        id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<RoutedQuery<"/beer/[id]">>
) => {
  const id = context.params?.id;

  const { beers } = await fetchBeer({
    ids: id,
  });

  const firstBeer = beers.at(0);

  if (!firstBeer) {
    return {
      notFound: true,
    };
  }

  let shouldRevalidate = false;

  const { foodPairing } = firstBeer;
  let imagesForFoodPairings;
  try {
    if (process.env.NODE_ENV === "development") {
      throw new Error("DEV");
    }

    imagesForFoodPairings = await Promise.all(
      foodPairing.slice(0, 3).map(async (food) => {
        const image = await imageClient.photos.search({
          query: food,
          orientation: "landscape",
          size: "small",
          per_page: 1,
        });

        if ("error" in image) {
          return null;
        }

        const imageUrl = image.photos.at(0)?.src.landscape;

        if (!imageUrl) {
          return null;
        }

        return {
          food,
          image: imageUrl,
        };
      })
    );
  } catch {
    console.log("ERROR IN IMAGE FETCH");

    shouldRevalidate = true;

    imagesForFoodPairings = [
      {
        food: "Crusty bread",
        image:
          "https://images.pexels.com/photos/2160296/pexels-photo-2160296.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      },
      {
        food: "Spicy chicken tikka masala",
        image:
          "https://images.pexels.com/photos/14089729/pexels-photo-14089729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      },
      {
        food: "Grilled chicken quesadilla",
        image:
          "https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      },
    ];
  }

  let placeholderImage: IGetPlaiceholderReturn | null = null;

  if (!!firstBeer.imageURL) {
    placeholderImage = await getPlaiceholder(firstBeer.imageURL);
  }

  return {
    props: {
      beer: firstBeer,
      placeholderImage: placeholderImage?.base64 ?? null,
      images: imagesForFoodPairings.filter((image) => !!image) as Array<{
        food: string;
        image: string;
      }>,
    },
    revalidate: shouldRevalidate ? 60 : false,
  };
};
