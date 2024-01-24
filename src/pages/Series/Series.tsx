import * as React from 'react';
import useFetch from '../../components/hooks/useFetch';

const Series = () => {
  const { data, loading, error } = useFetch();
  console.log('data in series', data);
  
  return (
    <div>
      <h1>Series</h1>
    </div>
  )
}

export default Series;