import type { NextPage } from 'next';
import CustomLink from '../components/CustomLink';

const Home: NextPage = () => {
  return (
    <>
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
            I currently spend a lot of my free time working on a mobile app,
            called{' '}
            <CustomLink
              href="https://github.com/danshilm/mobouzer"
              text="MoBouzer"
            />
            , that helps people using public transportation to navigate through
            Mauritius.
          </p>
          <p className="mt-2 text-xl text-gray-300">
            I also help maintain and contribute to a media discovery & request
            management tool for the Plex ecosystem called{' '}
            <CustomLink href="https://overseerr.dev" text="Overseerr" />.
          </p>
          <p className="mt-10 text-lg text-gray-400">
            Find me on{' '}
            <CustomLink
              href="https://www.linkedin.com/in/danshil-kokil-mungur/"
              text="LinkedIn"
            />
            . Or feel free to contact me via{' '}
            <CustomLink href="mailto:me@danshilm.com" text="email" />.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
