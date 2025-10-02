'use client';

import { ThemeProvider } from 'next-themes';
import { SpeedInsights } from '@vercel/speed-insights/next';
import axios from 'axios';
import React from 'react';
import { SWRConfig } from 'swr';
import NavBar from './NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <div className={`flex flex-col min-h-screen`}>
          <NavBar />
          <main className="flex flex-1 justify-center">{children}</main>
          <SpeedInsights />
        </div>
      </SWRConfig>
    </ThemeProvider>
  );
}
