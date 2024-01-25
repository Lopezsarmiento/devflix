import React, { useMemo } from 'react';
import useFetch from '../../components/hooks/useFetch';
import { Container } from './Series.styles';
import { Serie } from './Series.types';
import Loading from '../../components/Common/Loading/Loading';
import ErrorMessage from '../../components/Common/ErrorMessage/ErrorMessage';
import Card from '../../components/Card/Card';
import List from '../../components/Common/List/List';

const Series = () => {
  const { data, loading, error } = useFetch();

  // Memoize the sorting logic
  const orderedSeries = useMemo(() => {
    // filter items by type: movies and releasedYear >= 2010
    const filteredSeries = data.filter(
      (item: Serie) =>
        item.type === "series" && Number(item.releasedYear) >= 2010
    );

    // order by title ascending
    return filteredSeries.sort((a: Serie, b: Serie) =>
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
    <List items={orderedSeries} />
  );
}

export default Series;