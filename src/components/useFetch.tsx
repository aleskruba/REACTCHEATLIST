import { useState, useEffect, useRef } from 'react';

const cache: Record<string, any> = {}; 

const useFetch = (url: string) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!url) return;

    if (cache[url]) {
      console.log('Data stored in state from cache');
      setData(cache[url]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
 
      abortControllerRef.current?.abort(); 
      abortControllerRef.current = new AbortController(); 

      setLoading(true); 
      try {
      
        const response = await fetch(url, { signal: abortControllerRef.current.signal });
        if (!response.ok) {
          throw new Error('Network response was not ok'); 
        }
        const data = await response.json();
        console.log('Data fetched from API');
        cache[url] = data;
        setData(data);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted'); 
        } else {
          setError(err.message || 'An error occurred'); 
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

      return () => abortControllerRef.current?.abort();

  }, [url]);


  const abortFetch = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
  };

  return { data, loading, error, abortFetch }; 
};

export default useFetch;
