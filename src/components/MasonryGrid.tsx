// export const MasonryGrid = styled("div", {
//   position: "absolute",
//   left: "50%",
//   transform: "translateX(-50%)",
//   width: "80vw",

//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, 200px)",
//   gridColumnGap: "10px",
//   gridAutoRows: "10px",
//   justifyContent: "center",
// });

import React from "react";
import InfiniteScroll, { Props } from "react-infinite-scroll-component";

export const MasonryGrid = (props: Props) => {
  return (
    <InfiniteScroll
      className="absolute left-1/2 -translate-x-1/2 w-full grid grid-cols-masonry gap-x-3 auto-rows-masonry justify-center"
      {...props}
    />
  );
};
