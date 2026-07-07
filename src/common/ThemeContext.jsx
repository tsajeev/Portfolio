
import React, { createContext, useContext, useEffect, useState } from 'react';

//const ThemeContext = createContext();

/*export const useTheme = () => useContext(ThemeContext); */
const ThemeContext = createContext();

/* @refresh reset */ // <--- 💡 This tells Vite's Fast Refresh how to safely handle this file
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
