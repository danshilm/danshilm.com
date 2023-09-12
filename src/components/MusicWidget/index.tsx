import { ListenResponse } from '@/pages/api/listening-to';
import { getRelativeTime } from '@/utils/date';
import Image from 'next/image';
import React, { forwardRef } from 'react';

const MusicWidget = (
  { data }: { data?: ListenResponse },
  ref?: React.Ref<HTMLDivElement>
) => {
  const isMobile = 'ontouchstart' in window;

  return (
    <div
      className="flex flex-row absolute rounded-lg dark:bg-[#0c0c0c] bg-white p-2 h-28 mt-2 w-[96vw] max-w-md z-30 shadow-md -ml-1 origin-top-left"
      ref={ref}
    >
      <div className="relative flex items-center justify-center min-w-[6rem] min-h-[6rem] overflow-hidden rounded-md cursor-pointer dark:bg-zinc-700 bg-[#e9e9ec]">
        {data?.isLive && !isMobile && (
          <div
            className={`absolute z-10 w-[150px] h-[150px] bg-black transition duration-300 opacity-0 hover:opacity-80`}
          >
            <Image
              src={'/equalizer.gif'}
              alt="Live music equalizer icon"
              fill
              sizes="150px"
            />
          </div>
        )}
        {data?.albumArtUrl ? (
          <Image
            src={data?.albumArtUrl}
            alt="Cover image of the album whose song I last listened to"
            className="cursor-pointer"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAXSURBVChTY5DXNP9PDB5ViBdTW6H5fwAAb5U5k4N8CAAAAABJRU5ErkJggg=="
            placeholder="blur"
            fill
            sizes="150px"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
            />
          </svg>
        )}
      </div>
      <div className="flex flex-col pr-2 ml-3">
        {data?.isLive ? (
          <>
            <div className="flex flex-row items-center">
              <div className="w-1.5 h-1.5 animate-pulse bg-green-600 rounded-full" />
              <p className="ml-2 text-sm italic text-gray-700 dark:text-gray-300">
                Currently listening to
              </p>
            </div>
          </>
        ) : (
          <div className="flex flex-row items-center">
            <p className="text-sm italic text-gray-700 dark:text-gray-300">
              ~{' '}
              {data?.lastListenedTo &&
                getRelativeTime(new Date(data?.lastListenedTo * 1000))}
            </p>
          </div>
        )}
        <div className="flex flex-1" />
        <p className="text-2xl font-bold tracking-tight text-gray-800 truncate h-9 w-72 dark:text-gray-200">
          {data?.song}
        </p>
        <p className="tracking-tight text-gray-800 truncate dark:text-gray-200">
          {data?.album}
        </p>
        <p className="font-semibold tracking-tight text-gray-800 truncate dark:text-gray-200">
          <span className="text-sm font-normal text-gray-700 dark:text-gray-300">
            by{' '}
          </span>
          {data?.artist}
        </p>
      </div>
    </div>
  );
};

export default forwardRef(MusicWidget);
