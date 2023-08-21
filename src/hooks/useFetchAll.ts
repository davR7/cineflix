import { useState, useEffect } from 'react';

type FetchProps<T, U> = {
  data: [T | null, U | null] | null;
  error: Error | null;
  loading: boolean;
};

export const useFetchAll = <T, U>(urls: string[]): FetchProps<T, U> => {
  const [data, setData] = useState<FetchProps<T, U>['data'] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const generatePromises = (urls: string[]) =>
    urls.map(url => fetch(url).then(res => res.json()));

  useEffect(() => {
    const promises = generatePromises(urls);
    Promise.all(promises)
      .then(res => setData(res as FetchProps<T, U>['data']))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [urls]);

  return { data, error, loading };
};
