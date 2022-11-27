import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

export default function useFetch(config: AxiosRequestConfig) {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios(config)
      .then((resp) => setData(resp.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return [data, error, loading];
}
