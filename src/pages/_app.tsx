import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        defer
        data-domain="danshilm.com"
        src="https://plausible.danshilm.com/js/plausible.js"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
