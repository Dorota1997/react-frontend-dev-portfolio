import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:url" content="http://seanred.io"></meta>
      <meta property="og:site_name" content="Sean Redmon"></meta>
      <meta property="og:image" content="images/sean-picture.webp"></meta>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
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
