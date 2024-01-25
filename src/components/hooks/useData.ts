import React, { useMemo } from 'react';
import useFetch from './useFetch';


const useData = (options: any) => {
  const { releasedYear, ascendingOrder = true, itemType } = options;
  const { data, error, loading } = useFetch();

  const itemsOrdered = useMemo(() => {
    // TODO: add filtering logic here

    // TODO: add sorting logic here
  }, [])
};