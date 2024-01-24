// build a useFetch hook that retrieves data from an API or in this case json file
// and returns the data in a usable format
import React from 'react';
import { useState, useEffect } from 'react';

const useFetch = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        // get data from json file in public folder
        const response = await fetch('./data.json');
        console.log('movies', response);
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