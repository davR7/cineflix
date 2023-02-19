import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok){
          return Promise.reject(
            "Ops! Algo deu errado. Verique sua Conexão ou Informe ao Admin do Sistema."
            );
        } 
        return res.json()
      })
      .then(setData)
      .catch(setError)
      .finally(setLoading(false))
  }, [url])

  return {data, error, loading}
};

export default useFetch;