import React, { useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import { useTheme } from '../hooks/useTheme';
import type { ListenResponse } from '../pages/api/listening-to';
import useClickOutside from '../hooks/useClickOutside';
import autoAnimate from '@formkit/auto-animate';
import MusicWidget from './MusicWidget';
import MiniMusicWidget from './MusicWidget/MiniMusicWidget';
import Delayed from './Delayed';

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { data } = useSWR<ListenResponse>('/api/listening-to', {
    refreshInterval: 15 * 1000,
  });
  const receivedInitialData = useRef(false);
  const [isMusicWidgetOpen, setIsMusicWidgetOpen] = useState(false);
  const musicWidgetRef = useRef<HTMLDivElement | null>(null);

  // for auto-animate to work
  // pretty tedious, I know :(
  const widgetParent = useRef(null);
  const miniWidgetParent = useRef(null);

  useClickOutside(musicWidgetRef, () => setIsMusicWidgetOpen(false));

  // auto-animate the widget opening and closing
  useEffect(() => {
    widgetParent.current && autoAnimate(widgetParent.current);
  }, [widgetParent]);

  // auto-animate the mini widget opening and closing
  useEffect(() => {
    miniWidgetParent.current && autoAnimate(miniWidgetParent.current);
  }, [miniWidgetParent]);

  // close widget 15 seconds after it's opened
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isMusicWidgetOpen) {
        setIsMusicWidgetOpen(false);
      }
    }, 10 * 1000);

    return () => clearTimeout(timeout);
  }, [isMusicWidgetOpen]);

  // open music widget when data is received from the endpoint for the first time
  useEffect(() => {
    if (!receivedInitialData.current && data) {
      setIsMusicWidgetOpen(true);
      receivedInitialData.current = true;
    }
  }, [data]);

  return (
    <div className="flex justify-center h-16 px-3 text-gray-200 bg-black border-b border-gray-700">
      <div
        className="relative flex justify-between flex-1 max-w-5xl"
        ref={widgetParent}
      >
        {data && isMusicWidgetOpen && (
          <MusicWidget data={data} ref={musicWidgetRef} />
        )}
        <div className="flex items-center" ref={miniWidgetParent}>
          {data && (
            // Delay for a bit since the music widget's opacity is low enough for the user
            // to see the mini widget before the widget is shown
            <Delayed>
              <MiniMusicWidget
                data={data}
                onClick={() => setIsMusicWidgetOpen(true)}
              />
            </Delayed>
          )}
          <p className="hidden p-2 text-4xl font-bold font-nav-title md:block whitespace-nowrap">
            Danshil Kokil Mungur
          </p>
          <p className="block p-2 text-4xl font-bold font-nav-title md:hidden">
            Danshil
          </p>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="p-2.5 rounded-lg hover:bg-gray-800"
            onClick={toggleTheme}
            aria-label="Toggle dark mode button"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            )}
          </button>
          <a
            href="https://github.com/danshilm"
            target="_blank"
            className="flex items-center flex-row p-2.5 rounded-lg hover:bg-gray-800"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block w-7 h-7 sm:hidden"
              viewBox="0 0 512 512"
              fill="#FFFFFF"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
              />
            </svg>

            <div className="flex-row items-center hidden sm:flex">
              <p>GitHub Profile</p>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
