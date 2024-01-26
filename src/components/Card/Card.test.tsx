import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

const data = {
  id: 1,
  title: 'Test Title', 
  image: 'https://via.placeholder.com/300x400.png?text=Title',
  type: 'movie',
  releasedYear: '2020',
  rated: 'PG-13',
  runtime: '120 min',
  released: '01 Jan 2020',
  genre: 'Action',
  director: 'Juan Dela Cruz',
  actors: 'Juan Dela Cruz, Pedro Penduko, Maria Makiling',
  plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imdbRating: '8.0'
};


test('renders the card title', () => {
  render(
    <Card data={data} handleClick={() => {}} />
  );
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});