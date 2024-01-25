// CardDetail.tsx
import React from "react";
import { Item } from "./CardDetail.types";
import { CardDetailContainer, ImageContainer, DetailsContainer } from "./CardDetail.styles";


interface CardDetailProps {
  item: Item;
}

const CardDetail =  ({ item }: CardDetailProps ) => {
  const { title, plot, releasedYear, image } = item;

  return (
    <CardDetailContainer>
      <ImageContainer style={{ backgroundImage: `url(${image})` }} />
      <DetailsContainer>
        <h2>{title}</h2>
        <p>{plot}</p>
        <p>Released Year: {releasedYear}</p>
      </DetailsContainer>
    </CardDetailContainer>
  );
};

export default CardDetail;
