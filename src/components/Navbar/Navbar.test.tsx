import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

const WrappedNavbar = () => {
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

test('renders the brand name', () => {
  render(<WrappedNavbar />);
  const brandElement = screen.getByText(/devflix/i);
  expect(brandElement).toBeInTheDocument();
});

test('renders the home link', () => {
  render(<WrappedNavbar /> );
  const homeElement = screen.getByText(/home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders the movies link', () => {
  render(<WrappedNavbar /> );
  const moviesElement = screen.getByText(/movies/i);
  expect(moviesElement).toBeInTheDocument();
});

test('renders the series link', () => {
  render(<WrappedNavbar /> );
  const seriesElement = screen.getByText(/series/i);
  expect(seriesElement).toBeInTheDocument();
});