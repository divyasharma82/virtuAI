// ContextProvider.js
import React, { createContext, useEffect } from 'react';
import run from '../config/config';

export const Context = createContext();

const ContextProvider = (props) => {
  useEffect(() => {
    const onSent = async (prompt) => {
      try {
        await run(prompt);
      } catch (error) {
        console.error('Error in onSent:', error);
      }
    };
    onSent('What is React JS?');
    // return () => {};
  }, []);

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
