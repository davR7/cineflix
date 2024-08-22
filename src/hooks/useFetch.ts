import { useState, useEffect } from 'react';

type FetchProps<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

const useFetch = <T>(url: string, accessToken: string): FetchProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const headers = {
    "Content-Type": "application/json",
    Authorization: 'Bearer ' + accessToken
  };

  useEffect(() => {
    setLoading(true);
    fetch(url, { headers })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
