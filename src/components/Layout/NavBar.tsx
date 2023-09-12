import useClickOutside from '@/hooks/useClickOutside';
import { ListenResponse } from '@/pages/api/listening-to';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Transition } from '@headlessui/react';
import { Dancing_Script } from 'next/font/google';
import { Fragment, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import Delayed from '../Delayed';
import MusicWidget from '../MusicWidget';
import MiniMusicWidget from '../MusicWidget/MiniMusicWidget';
import ThemeSwitcher from './ThemeSwitcher';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: '700',
});

const NavBar = () => {
  const { data } = useSWR<ListenResponse>('/api/listening-to', {
    refreshInterval: 10 * 1000,
  });
  const receivedInitialData = useRef(false);
  const [isMusicWidgetOpen, setIsMusicWidgetOpen] = useState(false);
  const musicWidgetRef = useRef<HTMLDivElement | null>(null);
  const musicWidgetData = useRef<{ song?: string }>({ song: undefined });

  // auto-animate the mini widget appearing and moving the navbar title away
  const [miniWidgetParent] = useAutoAnimate<HTMLDivElement>();

  useClickOutside(musicWidgetRef, () => setIsMusicWidgetOpen(false));

  // auto-close widget 10 seconds after it's opened
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

  // show music widget when song changes
  useEffect(() => {
    if (
      data &&
      musicWidgetData.current.song &&
      musicWidgetData.current.song !== data.song
    ) {
      setIsMusicWidgetOpen(true);
    }

    musicWidgetData.current.song = data?.song;
  }, [data]);

  return (
    <div className="flex justify-center h-16 px-3 text-gray-700 dark:text-gray-200 bg-zinc-100 dark:bg-[#252529] shadow-md">
      <div className="relative flex justify-between flex-1 max-w-5xl">
        <Transition
          show={!!data && isMusicWidgetOpen}
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="scale-90 opacity-70"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-300"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MusicWidget data={data} ref={musicWidgetRef} />
        </Transition>
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
          <p
            className={`hidden p-2 text-4xl font-bold ${dancingScript.className} md:block whitespace-nowrap`}
          >
            Danshil Kokil Mungur
          </p>
          <p
            className={`block p-2 text-4xl font-bold ${dancingScript.className} md:hidden`}
          >
            Danshil
          </p>
        </div>
        <div className="flex items-center gap-1">
          <ThemeSwitcher />
          <a
            href="https://github.com/danshilm"
            target="_blank"
            className="flex items-center flex-row p-2.5 rounded-lg dark:hover:bg-zinc-900 hover:bg-zinc-200"
            rel="noreferrer"
            aria-label="Link to Danshil's GitHub profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block w-7 h-7 sm:hidden"
              viewBox="0 0 512 512"
              fill="currentColor"
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
