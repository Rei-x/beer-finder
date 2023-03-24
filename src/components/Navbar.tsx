import useDebounce from "@/hooks/useDebounce";
import { useSearchBeers } from "@/hooks/useSearch";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Input, Avatar, Link as DaisyLink } from "react-daisyui";
import { SearchResult } from "./SearchResult";
import Image from "next/image";
import Link from "next/link";

const Overlay = ({ show }: { show: boolean }) => {
  return (
    <div
      className={`transition-all fixed ${
        show
          ? " backdrop-blur-sm  bg-black bg-opacity-50 pointer-events-auto"
          : ""
      } z-[2] top-0 left-0 h-screen w-screen pointer-events-none`}
    ></div>
  );
};

export const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const searchedBeers = useSearchBeers(debouncedSearch);

  return (
    <>
      <Overlay show={showInput} />
      <div className="max-w-full bg-yellow-400 shadow-sm flex items-center justify-between pl-12 pt-3 pb-3">
        <Link href="/">
          <Image
            height={48}
            width={48}
            src="/logo.png"
            alt="logo"
            className="block"
          />
        </Link>
        <div className="mx-3 w-full md:w-1/2 z-10 relative">
          <Input
            onFocus={() => {
              setShowInput(true);
            }}
            onBlur={() => {
              setShowInput(false);
            }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            className=" w-full shadow-sm focus:outline-none border-b-2 border-primary border-t-0 border-l-0 border-r-0 rounded"
            type="text"
            placeholder="Search for your bear 🍺"
          />

          <div className="absolute w-full">
            <AnimatePresence mode="wait">
              {showInput
                ? searchedBeers.data?.beers.map((beer) => (
                    <SearchResult key={beer.id} beer={beer} />
                  ))
                : null}
            </AnimatePresence>
          </div>
        </div>
        <div className="mr-4">
          <Link href="/favorites" legacyBehavior>
            <DaisyLink>Favorites</DaisyLink>
          </Link>
        </div>
      </div>
    </>
  );
};
