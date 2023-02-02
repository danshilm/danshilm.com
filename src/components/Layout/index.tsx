'use client';

import { ThemeProvider } from 'next-themes';
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
    <ThemeProvider attribute="class">
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <ThemedLayout>
          <NavBar />
          <main className="flex flex-1">{children}</main>
          <Analytics />
        </ThemedLayout>
      </SWRConfig>
    </ThemeProvider>
  );
}
