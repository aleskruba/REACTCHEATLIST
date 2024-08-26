import { useEffect, useState } from 'react';
import "./../App.css"

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(value);
  const [debounceLoading, setDebounceLoading] = useState<boolean>(false);

  useEffect(() => {
    setDebounceLoading(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setDebounceLoading(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, debounceLoading };
};


const useFetchUsers = (query: string | null) => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if (query) {  // Fetch only if query is not empty
        const fetchUsers = async () => {
          setLoading(true);
          setError(null);
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
          } catch (err) {
            setError('Failed to fetch users');
          } finally {
            setLoading(false);
          }
        };
  
        fetchUsers();
      } else {
        setUsers([]); // Clear users when the query is empty
      }
    }, [query]);
  
    return { users, loading, error };
  };

  
const Debounce = () => {
    const [text, setText] = useState('');
    const { debouncedValue, debounceLoading } = useDebounce(text, 1000);
    const { users, loading, error } = useFetchUsers(debouncedValue);
  
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };
  
    const userDataFiltered = users.filter((user: any) =>
      user.name.toLowerCase().includes(debouncedValue ? debouncedValue.toLowerCase() : '')
    );
  
    return (
      <div>
        Debounce
        <input
          type="text"
          value={text}
          onChange={changeHandler}
          placeholder="Type here ..."
          style={{ marginRight: '10px' }}
        />
        {error && <p>{error}</p>}
        {debounceLoading && <p>Debouncing...</p>}
        {loading && <p>Loading...</p>}
        {userDataFiltered.map((user: any) => (
          <p key={user.id}>{user.name}</p>
        ))}
        <h1>{!userDataFiltered.length && !debounceLoading ? 'NO RECORD' : ''}</h1>


        <div className="code">
        <pre><code>{codeString}</code></pre>


        </div>

      </div>
    );
  };
  
  export default Debounce;




  const codeString = `
import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(value);
  const [debounceLoading, setDebounceLoading] = useState<boolean>(false);

  useEffect(() => {
    setDebounceLoading(true);
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      setDebounceLoading(false);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue, debounceLoading };
};


const useFetchUsers = (query: string | null) => {
    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if (query) {  // Fetch only if query is not empty
        const fetchUsers = async () => {
          setLoading(true);
          setError(null);
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
          } catch (err) {
            setError('Failed to fetch users');
          } finally {
            setLoading(false);
          }
        };
  
        fetchUsers();
      } else {
        setUsers([]); // Clear users when the query is empty
      }
    }, [query]);
  
    return { users, loading, error };
  };

  
const Debounce = () => {
    const [text, setText] = useState('');
    const { debouncedValue, debounceLoading } = useDebounce(text, 1000);
    const { users, loading, error } = useFetchUsers(debouncedValue);
  
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    };
  
    const userDataFiltered = users.filter((user: any) =>
      user.name.toLowerCase().includes(debouncedValue ? debouncedValue.toLowerCase() : '')
    );
  
    return (
      <div>
        Debounce
        <input
          type="text"
          value={text}
          onChange={changeHandler}
          placeholder="Type here ..."
          style={{ marginRight: '10px' }}
        />
        {error && <p>{error}</p>}
        {debounceLoading && <p>Debouncing...</p>}
        {loading && <p>Loading...</p>}
        {userDataFiltered.map((user: any) => (
          <p key={user.id}>{user.name}</p>
        ))}
        <h1>{!userDataFiltered.length && !debounceLoading ? 'NO RECORD' : ''}</h1>


      </div>
    );
  };
  
  export default Debounce;


`;
