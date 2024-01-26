import React from 'react';
import { render, screen } from '@testing-library/react';
import CardDetail from './CardDetail';

const item = {
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
    <CardDetail item={item} />
  );
  const titleElement = screen.getByText(/Test Title/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders the card plot', () => {
  render(
    <CardDetail item={item} />
  );
  const plotElement = screen.getByText(/Lorem ipsum dolor sit amet/i);
  expect(plotElement).toBeInTheDocument();
});

test('renders the card released year', () => {
  render(
    <CardDetail item={item} />
  );
  const releasedYearElement = screen.getByText(/Released Year: 2020/i);
  expect(releasedYearElement).toBeInTheDocument();
});