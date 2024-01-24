import * as React from 'react';
import useFetch from '../../components/hooks/useFetch';


const Movies: React.FC = () => {
  const { data, loading, error } = useFetch();
  console.log('data in movies', data);


  return (
    <div>
      <h1>Movies</h1>
    </div>
  )
}

export default Movies;