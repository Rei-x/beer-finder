import { useFavorite } from "@/hooks/useFavorite";
import React from "react";
import { Button } from "react-daisyui";
import { HeartIcon } from "./HeartIcon";

export const FavoriteButton = ({
  beerId,
  className,
}: {
  beerId: number;
  className?: string;
}) => {
  const { isFavorite, toggleFavorite } = useFavorite(beerId);

  return (
    <Button
      color="primary"
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        toggleFavorite();
      }}
    >
      <HeartIcon isFavorite={isFavorite} />
    </Button>
  );
};
