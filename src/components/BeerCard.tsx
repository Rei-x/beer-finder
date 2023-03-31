import { Beer } from "@/api/transformer";
import { useFavorite } from "@/hooks/useFavorite";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { SVGProps, useEffect, useState } from "react";
import { Badge, Button, Card, Divider } from "react-daisyui";
import { FavoriteButton } from "./FavoriteButton";
import { HeartIcon } from "./HeartIcon";
import NextImage from "next/image";

import noImage from "../../public/noimage.png";

const getHeight = (beer: Beer) => {
  const numberOfTitleCharacters = beer.name.trim().length;
  const numberOfTaglineCharacters = beer.tagline.trim().length;

  const titleHeight = Math.ceil(numberOfTitleCharacters / 20) * 2;
  const height = Math.ceil(numberOfTaglineCharacters / 20) * 2;

  return titleHeight + height + 36;
};

const Overlay = ({
  beer,
  ...props
}: { beer: Beer } & HTMLMotionProps<"div">) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/beer/[id]`);
  }, [beer.id, router]);

  return (
    <motion.div
      className={`prose absolute rounded bg-black bg-opacity-5 z-[2] top-0 left-0 h-full w-full`}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.1 }}
      {...props}
      onClick={() => {
        router.push({
          pathname: "/beer/[id]",
          query: {
            id: beer.id.toString(),
          },
        });
      }}
    >
      <div className="h-full w-full flex justify-end items-start">
        <FavoriteButton beerId={beer.id} />
      </div>
    </motion.div>
  );
};

export const BeerCard = ({
  beer,
  height,
  placeholder,
}: {
  beer: Beer;
  height?: number;
  placeholder?: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const { isFavorite } = useFavorite(beer.id);

  return (
    <div
      className={`p-3 my-4 shadow-md overflow-hidden relative transition-all cursor-pointer`}
      style={{
        gridRow: height ? undefined : `span ${getHeight(beer)}`,
        height: height ? `${height}px` : undefined,
      }}
    >
      <AnimatePresence>
        {isHovering ? (
          <Overlay
            onMouseLeave={() => {
              setIsHovering(false);
            }}
            beer={beer}
          />
        ) : null}
      </AnimatePresence>
      <Link
        href={{
          pathname: "/beer/[id]",
          query: {
            id: beer.id.toString(),
          },
        }}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
      >
        <Card key={beer.id} bordered={false}>
          <Badge color="primary">{beer.abv}%</Badge>
          {isFavorite ? (
            <HeartIcon
              className="absolute top-0 m-2"
              style={{
                right: "5px",
              }}
              isFavorite={true}
            />
          ) : null}

          <div className="h-48 flex justify-center items-center">
            <figure>
              <NextImage
                width={100}
                height={192}
                alt={beer.name + " photo"}
                src={beer.imageURL ?? noImage}
                placeholder={placeholder ? "blur" : "empty"}
                blurDataURL={placeholder}
                className="max-h-48 object-contain transition-all"
                quality={1}
              />
            </figure>
          </div>
          <Divider className="h-0" />
          <Card.Title className="mt-3">{beer.name}</Card.Title>
          <Card.Body className="p-0">
            <i className="mt-4">{beer.tagline}</i>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
