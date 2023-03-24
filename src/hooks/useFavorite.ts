import { favoriteBeersAtom } from "@/atoms/favoriteBeers";
import { useAtom } from "jotai";

export const useFavorite = (beerId: number = 0) => {
  const [favoriteBeers, setFavoriteBeers] = useAtom(favoriteBeersAtom);

  const toggleFavorite = () => {
    if (favoriteBeers.includes(beerId)) {
      setFavoriteBeers(favoriteBeers.filter((id) => id !== beerId));
    } else {
      setFavoriteBeers([...favoriteBeers, beerId]);
    }
  };

  const isFavorite = favoriteBeers.includes(beerId);

  return {
    isFavorite,
    toggleFavorite,
    favoriteBeers,
  };
};
