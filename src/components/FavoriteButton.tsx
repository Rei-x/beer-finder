import { useFavorite } from "@/hooks/useFavorite";
import React from "react";
import { Button } from "react-daisyui";
import { HeartIcon } from "./HeartIcon";

export const FavoriteButton = ({ beerId }: { beerId: number }) => {
  const { isFavorite, toggleFavorite } = useFavorite(beerId);

  return (
    <Button
      color="primary"
      className="m-2"
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
    >
      <HeartIcon isFavorite={isFavorite} />
    </Button>
  );
};
