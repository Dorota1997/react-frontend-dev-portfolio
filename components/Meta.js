import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="http://seanred.io"></meta>
      <meta property="og:site_name" content="Sean Redmon"></meta>
      <meta property="og:image" content="images/sean-picture.webp"></meta>
      <meta charSet="utf-8" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#b91d47" />
      <meta name="theme-color" content="#ffffff"></meta>
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Sean Redmon | Frontend Engineer",
  keywords:
    "sean redmon, full stack developer, frontend developer, backend developer, sean red",
  description:
    "Sean Redmon is a full-stack developer from Bowling Green Ohio. While working as a teacher in China, he discovered a love for creating apps that helped his students enjoy studying.",
};

export default Meta;
