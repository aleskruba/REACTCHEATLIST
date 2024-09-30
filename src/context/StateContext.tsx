import React, { createContext, useState, useContext, useCallback } from 'react';

// Create Context
const StateContext = createContext<any | undefined>(undefined);

// Create a provider component
export const StateProvider = ({ children }:any) => {
  const [childState, setChildState] = useState(0);

  // Function to update the state
  const handleButtonClick = useCallback(() => {
    setChildState(prev => prev + 1);
  }, []);

  return (
    <StateContext.Provider value={{ childState, handleButtonClick }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook for using context
export const useStateContext = () => useContext(StateContext);
