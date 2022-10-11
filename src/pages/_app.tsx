import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>danshilm.com</title>
      </Head>
      <Script
        defer
        data-domain="danshilm.com"
        src="https://plausible.danshilm.com/js/plausible.js"
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
