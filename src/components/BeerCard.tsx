import { Beer } from "@/api/transformer";
import React from "react";
import { Badge, Card, Divider } from "react-daisyui";

const getRandomHeight = (beerId: number) => {
  const possibleHeights = [38, 40, 43];
  return possibleHeights[beerId % possibleHeights.length];
};
export const BeerCard = ({ beer }: { beer: Beer }) => {
  return (
    <Card
      key={beer.id}
      className="p-3 my-2 overflow-hidden hover:scale-105 transition-all cursor-pointer"
      style={{
        gridRow: `span ${getRandomHeight(beer.id)}`,
      }}
    >
      {beer.imageURL ? (
        <div className="h-48">
          <Card.Image
            src={beer.imageURL}
            alt="Card image background"
            className="max-h-48 border-b object-contain border-gray-200 border-solid"
          />
        </div>
      ) : null}
      <Divider className="h-0" />
      <Card.Title className="mt-3">{beer.name}</Card.Title>
      <Card.Body className="p-0">
        <i className="mt-4">{beer.tagline}</i>
      </Card.Body>
    </Card>
  );
};
