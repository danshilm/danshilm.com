import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>danshilm.com</title>
      </Head>
      <div className="flex flex-col items-center justify-center flex-1 px-6 text-gray-200 dark:bg-black bg-[#181A1C]">
        <div className="max-w-5xl pt-32 lg:py-0 lg:px-4 pb-14">
          <p className="font-serif font-semibold text-8xl">
            Hi there! I&apos;m Dan.
          </p>
          <p className="mt-4 text-2xl text-gray-300">
            I&apos;m a full stack web developer who&apos;s passionate about cool
            projects.
          </p>
          <p className="mt-4 text-xl text-gray-300">
            I currently spend a lot of my free time working on a mobile app that
            helps people navigate through Mauritius using public transportation
            called{' '}
            <span className="underline cursor-pointer hover:text-white">
              <a
                href="https://github.com/danshilm/mobouzer"
                target="_blank"
                rel="noreferrer"
              >
                MoBouzer
              </a>
            </span>
            .
          </p>
          <p className="mt-2 text-xl text-gray-300">
            I also help maintain and contribute to a media discovery & request
            management tool for the Plex ecosystem called{' '}
            <span className="underline cursor-pointer hover:text-white">
              <a
                href="https://overseerr.dev"
                target="_blank"
                rel="noreferrer"
              >
                Overseerr
              </a>
            </span>
            .
          </p>
          <p className="mt-10 text-lg text-gray-400">
            Find me on{' '}
            <span className="underline cursor-pointer hover:text-white">
              <a
                href="https://www.linkedin.com/in/danshil-kokil-mungur/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </span>
            . Or feel free to contact me via{' '}
            <span className="underline cursor-pointer hover:text-white">
              <a href="mailto:me@danshilm.com">email</a>
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
