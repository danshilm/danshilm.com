import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>danshilm.com</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-gray-200 dark:bg-black bg-[#181A1C]">
        <main className="flex flex-col items-center justify-center flex-1 w-full py-20 text-center">
          <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a
              className="text-transparent from-blue-700 to-blue-400 bg-clip-text bg-gradient-to-r"
              href="https://nextjs.org"
            >
              Next.js!
            </a>
          </h1>
          <p className="my-16 text-2xl">
            Get started by editing{' '}
            <code className="p-3 font-mono text-lg bg-gray-800 rounded-md dark:bg-gray-900">
              pages/index.tsx
            </code>
          </p>
          <div className="flex flex-wrap items-center justify-center max-w-3xl sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 m-4 text-left transition-colors duration-150 border dark:border-[#81786A] border-[#363A3D] hover:text-blue-400 hover:border-[#0054B6] focus:border-[#0054B6] w-80 rounded-xl focus:text-blue-400"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </a>
            <a
              href="https://nextjs.org/learn"
              className="p-6 m-4 text-left transition-colors duration-150 border dark:border-[#81786A] border-[#363A3D] w-80 rounded-xl hover:text-blue-400 focus:text-blue-400 hover:border-[#0054B6] focus:border-[#0054B6]"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="p-6 m-4 text-left transition-colors duration-150 border dark:border-[#81786A] border-[#363A3D] w-80 rounded-xl hover:text-blue-400 focus:text-blue-400 hover:border-[#0054B6] focus:border-[#0054B6]"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="p-6 m-4 text-left transition-colors duration-150 border dark:border-[#81786A] border-[#363A3D] w-80 rounded-xl hover:text-blue-400 focus:text-blue-400 hover:border-[#0054B6] focus:border-[#0054B6]"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-16 md:h-20 border-t dark:border-[#81786A] border-[#363A3D]">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
              className="dark:invert"
            />
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
