import React from 'react';
import { useTheme } from '../hooks/useTheme';
import NavBar from './NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <NavBar />
      <main className={`flex-1 flex`}>{children}</main>
    </div>
  );
};

export default Layout;
