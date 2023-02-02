'use client';

import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/hooks/useTheme';
import { Transition } from '@headlessui/react';
import { Analytics } from '@vercel/analytics/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SWRConfig } from 'swr';
import Loading from '../Loading';
import NavBar from './NavBar';
import ThemedLayout from './ThemedLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [hasBeenMounted, setHasBeenMounted] = useState(false);

  // wait for components which need to be themed
  // to be painted on the DOM
  // + add artificial delay so it's not jarring
  useEffect(() => {
    setTimeout(() => setHasBeenMounted(true), 500);
  }, []);

  return (
    <ThemeProvider>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <ThemedLayout>
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
          <main className="flex flex-1">{children}</main>
          <Analytics />
        </ThemedLayout>
      </SWRConfig>
    </ThemeProvider>
  );
}
