import React from 'react';
import { useState, useEffect } from 'react';
import { Movie } from '../../pages/Movies/Movies.types';

const useFetch = () => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      
      try {

        // add a timer to simulate a slow connection
        await new Promise(resolve => setTimeout(resolve, 2000));

        // get data from json file in public folder
        const response = await fetch('./data.json');
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
  }, []);

  return { data, loading, error };
}

export default useFetch;