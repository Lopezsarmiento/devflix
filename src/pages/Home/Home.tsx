// src/pages/Home.tsx
import React from "react";
import { Container } from "./Home.styles"
import CategoryCard from "../../components/CategoryCard/CategoryCard";

const categories = [
  {
    title: "Movies",
    link: "/movies",
    image: "https://filmartgallery.com/cdn/shop/products/batman-begins-vintage-movie-poster-original-1-sheet-27x41.jpg?v=1615842077",
  },
  {
    title: "Series",
    link: "/series",
    image: "https://image.tmdb.org/t/p/original/dg9e5fPRRId8PoBE0F6jl5y85Eu.jpg",
  },
];

const Home = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryCard
          key={category.title}
          title={category.title}
          link={category.link}
          image={category.image}
        />
      ))}
    </Container>
  );
};

export default Home;
