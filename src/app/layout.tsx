import Layout from '@/components/Layout';
import Script from 'next/script';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Script
        defer
        data-domain="danshilm.com"
        src="https://plausible.danshilm.com/js/plausible.js"
      />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
