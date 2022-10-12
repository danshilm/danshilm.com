import React, { useEffect } from 'react';
import useColourScheme from '../hooks/useColourScheme';

const Layout = ({ children }: { children: JSX.Element }) => {
  const { isDarkMode } = useColourScheme();

  return (
    <>
      <main className={isDarkMode ? 'dark' : ''}>{children}</main>
    </>
  );
};

export default Layout;
