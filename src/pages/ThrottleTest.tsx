import React, { useEffect, useState } from 'react'
import useThrottle from '../components/useThrottle';

function ThrottleTest() {

  const [scrollPosition, setScrollPosition] = useState<number>(0)


  const handleScroll = () => {
    console.log('handlimg scroll');

    setScrollPosition(Math.round(window.scrollY));
  };

  useThrottle(handleScroll, 5000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => { 
        window.removeEventListener('scroll', handleScroll);
    }
  },[])


  return (
    <div style={{height:5000}}>
        <div
        style={{
          height:5,
          position:'fixed',
          left:0,
          right:0,
          backgroundColor:'red',
          width:`${scrollPosition /50}%`,
          transition: 'width 0.2 ease-out'
        }}> </div>

        <h2 style={{position:'fixed',top:50,left:0}}>
          Current position : {scrollPosition}
        </h2>


        <div className="code" style={{margin:'100px'}}>
        <pre><code>{codeString}</code></pre>


        </div>
    </div>
  )
}



const codeString = `
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

import React, { useEffect, useState } from 'react'
import useThrottle from '../components/useThrottle';

function ThrottleTest() {

  const [scrollPosition, setScrollPosition] = useState<number>(0)


  const handleScroll = () => {
    console.log('handlimg scroll');

    setScrollPosition(Math.round(window.scrollY));
  };

  useThrottle(handleScroll, 5000);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => { 
        window.removeEventListener('scroll', handleScroll);
    }
  },[])


  return (
    <div style={{height:5000}}>
        <div
        style={{
          height:5,
          position:'fixed',
          left:0,
          right:0,
          backgroundColor:'red',
           width: \`\${scrollPosition / 50}%\`,
          transition: 'width 0.2 ease-out'
        }}> </div>

        <h2 style={{position:'fixed',top:50,left:0}}>
          Current position : {scrollPosition}
        </h2>


        <div className="code">
        <pre><code>{codeString}</code></pre>


        </div>
    </div>
  )
}

`

export default ThrottleTest