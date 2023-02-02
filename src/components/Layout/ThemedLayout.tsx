import { useTheme } from '@/hooks/useTheme';
import React from 'react';

export default function ThemedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {children}
    </div>
  );
}
