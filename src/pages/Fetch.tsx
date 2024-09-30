import React, { useState } from 'react';
import useFetch from '../components/useFetch';

const Fetch = () => {
  const [fetchUrl, setFetchUrl] = useState<string | null>(null);
  const { data, loading, error, abortFetch } = useFetch(fetchUrl || '');

  const startFetch = () => {
    setFetchUrl('https://jsonplaceholder.typicode.com/todos/'); 
  };

  return (
    <div>
      <button onClick={startFetch}>Start Fetch</button> 
      <button onClick={abortFetch}>Abort Fetch</button> 
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          {data.slice(0, 5).map((item: { id: any; title: string }) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}
       <div className="code">
        <pre><code>{codeString}</code></pre>


        </div>

    </div>
  );
};

export default Fetch;


const codeString = `

import React, { useState } from 'react';
import useFetch from '../components/useFetch';

const Fetch = () => {
  const [fetchUrl, setFetchUrl] = useState<string | null>(null);
  const { data, loading, error, abortFetch } = useFetch(fetchUrl || '');

  const startFetch = () => {
    setFetchUrl('https://jsonplaceholder.typicode.com/todos/'); 
  };

  return (
    <div>
      <button onClick={startFetch}>Start Fetch</button> 
      <button onClick={abortFetch}>Abort Fetch</button> 
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          {data.slice(0, 5).map((item: { id: any; title: string }) => (
            <div key={item.id}>{item.title}</div>
          ))}
        </div>
      )}


    </div>
  );
};

export default Fetch;


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

`
