import React from 'react';
import { useTheme } from 'next-themes';

export default function ThemedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      {children}
    </div>
  );
}
