import React, { useState } from 'react';
import type { ListenResponse } from '../../pages/api/listening-to';
import Image from 'next/image';

const MiniMusicWidget = ({
  data,
  onClick,
}: {
  data: ListenResponse;
  onClick: () => void;
}) => {
  const isMobile = 'ontouchstart' in window;

  return (
    <div
      className="relative flex items-center justify-center overflow-hidden rounded-md cursor-pointer dark:bg-zinc-700 bg-[#e9e9ec] h-11 w-11"
      onClick={onClick}
    >
      {data.isLive && !isMobile && (
        <>
          <div className="absolute z-20 w-2 h-2 bg-green-700 rounded-full animate-pulse top-1 right-1" />
          <div
            className={`absolute z-10 w-[100px] h-[100px] bg-zinc-900 transition duration-300 opacity-0 hover:opacity-80`}
          >
            <Image
              src={'/equalizer.gif'}
              alt="Live music equalizer icon"
              layout="fixed"
              width={100}
              height={100}
            />
          </div>
        </>
      )}
      {data.albumArtUrl ? (
        <Image
          src={data.albumArtUrl}
          alt="Cover image of the album whose song I last listened to"
          layout="fill"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAXSURBVChTY5DXNP9PDB5ViBdTW6H5fwAAb5U5k4N8CAAAAABJRU5ErkJggg=="
          placeholder="blur"
        />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
          />
        </svg>
      )}
    </div>
  );
};

export default MiniMusicWidget;
