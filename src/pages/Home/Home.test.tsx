import * as React from "react";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

const WrappedHome = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
);

describe("renders the home page", () => {
  test("renders box for series", () => {
    render(<WrappedHome />);
    const homeElement = screen.getByText(/Series/i);
    expect(homeElement).toBeInTheDocument();
  });

  test("renders box for movies", () => {
    render(<Home />, { wrapper: BrowserRouter });
    const homeElement = screen.getByText(/Movies/i);
    expect(homeElement).toBeInTheDocument();
  });

  test("navigates to /series when series box is clicked", async () => {
    act(() => {
      render(<Home />, { wrapper: BrowserRouter });
    });

    // Verify that the series box is present
    const seriesBox = screen.getByText(/Series/i);
    expect(seriesBox).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(seriesBox);
    });

    // Verify the navigation result
    expect(window.location.pathname).toBe("/series");
  });

  test("navigates to /movies when movies box is clicked", async () => {
    act(() => {
      render(<Home />, { wrapper: BrowserRouter });
    });

    // Verify that the movies box is present
    const moviesBox = screen.getByText(/Movies/i);
    expect(moviesBox).toBeInTheDocument();

    await act(async () => {
      await userEvent.click(moviesBox);
    });

    // Verify the navigation result
    expect(window.location.pathname).toBe("/movies");
  });
});
