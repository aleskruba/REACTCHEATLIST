import { useEffect, useState } from "react";
import { Hotel } from "../types/types";

type FetchHotelsResponse = {
  hotels: Hotel[];
};


const useFetchParams = (url: string, params: Record<string, any>) => {
  const [data, setData] = useState<FetchHotelsResponse | null>(null); // Use the response type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const queryParams = new URLSearchParams(params as Record<string, string>).toString();
        const response = await fetch(`${url}?${queryParams}`);
        const result: FetchHotelsResponse = await response.json();
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, params]);

  return { data, loading, error };
};

export default useFetchParams;
