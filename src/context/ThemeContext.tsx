import React, { createContext, useContext, useEffect, useState } from 'react';

export interface ThemeContextProps {
  isDarkMode?: boolean;
  toggle?: () => void;
  children?: React.ReactNode;
}

const defaultProps: ThemeContextProps = {
  isDarkMode: undefined,
};

const ThemeContext = createContext<ThemeContextProps>(defaultProps);

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | undefined>(
    defaultProps.isDarkMode
  );
  const toggle = () => setIsDarkMode((v) => !v);

  const QUERY = '(prefers-color-scheme: dark)';

  useEffect(() => {
    const isDarkModeString = localStorage.getItem('isDarkMode');

    if (isDarkModeString === null) {
      // have to do this inside of an useEffect since window is unavailable on
      // the server side, but it is available in an useEffect
      // https://nextjs.org/docs/messages/react-hydration-error
      setIsDarkMode(window.matchMedia(QUERY).matches);
    } else {
      setIsDarkMode(JSON.parse(isDarkModeString));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== undefined) {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
