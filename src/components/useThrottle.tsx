import React, { useState, useRef, useEffect } from 'react';

function useThrottle(value:any, delay:number) {
  const [throttleValue, setThrottleValue] = useState(value);
  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElapsed = now - lastExecuted.current;

      if (timeElapsed >= delay) {
        setThrottleValue(value);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Include value in the dependency array

  return throttleValue;
}

export default useThrottle;
