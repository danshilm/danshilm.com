import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import Loading from './Loading';
import NavBar from './NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useTheme();
  const [hasBeenMounted, setHasBeenMounted] = useState(false);

  useEffect(() => {
    setHasBeenMounted(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Transition
        show={!hasBeenMounted}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Loading />
      </Transition>

      <NavBar />
      <main className={`flex-1 flex`}>{children}</main>
    </div>
  );
};

export default Layout;
