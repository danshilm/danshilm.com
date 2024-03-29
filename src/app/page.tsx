import CustomLink from '@/components/CustomLink';
import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV === 'production'
      ? new URL('https://danshilm.com')
      : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: 'danshilm.com',
  description:
    "I'm a full stack web developer, and this is my personal website as well as playgrounds for some cool stuff",
  icons: '/favicon.ico',
  openGraph: {
    url: 'https://danshilm.com',
    type: 'website',
    title: 'danshilm.com',
    description:
      "I'm a full stack web developer, and this is my personal website as well as playgrounds for some cool stuff",
    images: '/banner.png',
  },
  twitter: {
    card: 'summary',
    title: 'danshilm.com',
    description:
      "I'm a full stack web developer, and this is my personal website as well as playgrounds for some cool stuff",
    images: '/banner.png',
  },
};

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 px-6 text-gray-800 dark:text-gray-200 dark:bg-zinc-900 bg-zinc-200">
        <div className="max-w-5xl pt-32 lg:py-0 lg:px-4 pb-14">
          <p className="font-serif font-semibold text-8xl">
            Hi there! I&apos;m Dan.
          </p>
          <p className="mt-4 text-2xl">
            I&apos;m a software engineer who&apos;s passionate about cool
            projects.
          </p>
          <p className="mt-4 text-xl">
            I currently spend a lot of my free time working on a mobile app,
            called{' '}
            <CustomLink
              href="https://github.com/danshilm/mobouzer"
              text="MoBouzer"
              aria-label="GitHub Repository of MoBouzer"
            />
            , that helps people using public transportation to navigate through
            Mauritius.
          </p>
          <p className="mt-2 text-xl">
            I also help maintain and contribute to a media discovery & request
            management tool for the Plex ecosystem called{' '}
            <CustomLink
              href="https://overseerr.dev"
              text="Overseerr"
              aria-label="Overseerr's homepage"
            />
            .
          </p>
          <p className="mt-10 text-lg text-gray-700 dark:text-gray-300">
            Find me on{' '}
            <CustomLink
              href="https://www.linkedin.com/in/danshil-kokil-mungur/"
              text="LinkedIn"
              aria-label="My LinkedIn Profile"
            />
            . Or feel free to contact me via{' '}
            <CustomLink
              href="mailto:me@danshilm.com"
              text="email"
              aria-label="Send an email to Danshil at me@danshilm.com"
            />
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
