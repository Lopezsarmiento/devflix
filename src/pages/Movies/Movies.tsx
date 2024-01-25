import React, { useMemo, useState } from "react";
import useFetch from "../../components/hooks/useFetch";
import { Movie } from "./Movies.types";
import Loading from "../../components/Common/Loading/Loading";
import ErrorMessage from "../../components/Common/ErrorMessage/ErrorMessage";
import List from "../../components/Common/List/List";

const Movies = () => {
  const { data, loading, error } = useFetch();

  // Memoize the sorting logic
  const moviesOrdered = useMemo(() => {
    // filter items by type: movies and releasedYear >= 2010
    const filteredMovies = data.filter(
      (item: Movie) =>
        item.type === "movie" && Number(item.releasedYear) >= 2010
    );

    // order by title ascending
    return filteredMovies.sort((a: Movie, b: Movie) =>
      a.title.localeCompare(b.title)
    );
  }, [data]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <List items={moviesOrdered} />
  );
};

export default Movies;
