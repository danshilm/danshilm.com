import React, { useEffect } from 'react';
import useColourScheme from '../hooks/useColourScheme';
import NavBar from './NavBar';

const Layout = ({ children }: { children: JSX.Element }) => {
  const { isDarkMode } = useColourScheme();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className={`flex-1 flex ${isDarkMode ? 'dark' : ''}`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
