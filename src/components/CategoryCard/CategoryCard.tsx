import React from "react";
import { Wrapper, TitleWrapper, StyledLink } from "./CategoryCard.styles";

interface CategoryCardProps {
  title: string;
  link: string;
  image: string;
}

const CategoryCard = ({ title, link, image }: CategoryCardProps) => {
  return (
    <Wrapper>
      <StyledLink to={link} image={image}>
        <TitleWrapper><h2>{title}</h2></TitleWrapper>
      </StyledLink>
    </Wrapper>
  );
};

export default CategoryCard;
