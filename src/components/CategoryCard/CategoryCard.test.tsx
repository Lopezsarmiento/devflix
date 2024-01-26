import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CategoryCard from './CategoryCard';
import { BrowserRouter } from 'react-router-dom';

const data = {
  title: 'Movies',
  link: '/movies',
  image: 'https://via.placeholder.com/300x400.png?text=Title',
};

const WrappedCategoryCard = ({ title, link, image }: any) => {
  return (
    <BrowserRouter>
      <CategoryCard title={title} link={link} image={image} />
    </BrowserRouter>
  );
}

test('renders the card title', () => {
  render(
    <WrappedCategoryCard title={data.title} link={data.link} image={data.image} />
  );
  const titleElement = screen.getByText(/Movies/i);
  expect(titleElement).toBeInTheDocument();
});
