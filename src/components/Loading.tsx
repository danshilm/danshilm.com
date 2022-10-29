import React from 'react';
import { useTheme } from '../hooks/useTheme';

const Loading = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`absolute z-40 inset-0 flex flex-1 items-center justify-center min-h-screen transition-colors duration-500 ${
        isDarkMode ? 'bg-zinc-900' : 'bg-zinc-100'
      }`}
    >
      {/* from https://github.com/adexin/spinners-react */}
      <svg fill="none" viewBox="0 0 66 66" className="w-16 h-16 ">
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          strokeWidth={4}
          className={`transition-colors duration-500 ${
            isDarkMode ? 'stroke-neutral-600' : 'stroke-neutral-300'
          }`}
        />
        <circle
          cx="33"
          cy="33"
          fill="none"
          r="28"
          strokeDasharray="1, 174"
          strokeDashoffset="306"
          strokeLinecap="round"
          strokeWidth={6}
          className={`transition-colors duration-500 ${
            isDarkMode ? 'stroke-neutral-100' : 'stroke-neutral-500'
          }`}
          style={{
            animation: `spinners-react-circular 1.25s linear infinite`,
          }}
        />
      </svg>
    </div>
  );
};

export default Loading;
