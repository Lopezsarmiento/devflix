import * as React from 'react';
import { CardContainer, CardTitle } from './Card.styles';
import { Item } from './Card.types';

interface CardProps {
  data: Item;
  handleClick: (data: Item) => void;
}

// TODO: set the type of the data prop
const Card = ({ data, handleClick }: CardProps) => {
  const { title, image } = data;
  return (
    <CardContainer image={image} onClick={() => handleClick(data)}>
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default Card;