import React, { useEffect, useState } from 'react';

const QUERY = '(prefers-color-scheme: dark)';

const useColourScheme = () => {
  // default to dark mode because I like it
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggle = () => setIsDarkMode((v) => !v);

  // have to use an effect here since window is unavailable on the server
  // side, but it is available in an useEffect
  // https://nextjs.org/docs/messages/react-hydration-error
  useEffect(() => {
    setIsDarkMode(window.matchMedia(QUERY).matches);
  }, []);

  return { isDarkMode, toggle };
};

export default useColourScheme;
