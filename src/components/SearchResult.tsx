import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Beer } from "@/api/transformer";
import Link from "next/link";

export const SearchResult = ({ beer }: { beer: Beer }) => {
  return (
    <Link
      href={{
        pathname: "/beer/[id]",
        query: {
          id: beer.id.toString(),
        },
      }}
    >
      <motion.div
        className={`bg-white w-full h-26 mt-2 hover:bg-secondary rounded flex py-2`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        layout
      >
        {beer.imageURL ? (
          <Image
            src={beer.imageURL}
            alt="piwko"
            className="ml-8 object-contain"
            loading="lazy"
            width={16}
            height={16}
          />
        ) : null}

        <div className="ml-6">
          <p className="font-medium prose-lg">{beer.name}</p>
          <p className="italic">{beer.tagline}</p>
        </div>
      </motion.div>
    </Link>
  );
};
