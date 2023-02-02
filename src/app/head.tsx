export default function Head() {
  return (
    <>
      <title>danshilm.com</title>
      <meta
        name="description"
        content="I'm a full stack web developer, and this is my personal website as well as playgrounds for some cool stuff"
      />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://danshilm.com"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="danshilm.com"></meta>
      <meta
        property="og:description"
        content="I'm a full stack web developer, and this is my personal website as well as playgrounds for some cool stuff"
      ></meta>
      <meta
        property="og:image"
        content="https://danshilm.com/banner.png"
      ></meta>
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="Banner image"></meta>
      <meta property="twitter:domain" content="danshilm.com"></meta>
      <meta property="twitter:url" content="https://danshilm.com"></meta>
      <meta name="twitter:title" content="danshilm.com"></meta>
      <meta
        name="twitter:description"
        content="I'm a full stack web developer, and this is my personal website as well as playgrounds for some cool stuff"
      ></meta>
      <meta
        name="twitter:image"
        content="https://danshilm.com/banner.png"
      ></meta>
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
