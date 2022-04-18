import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
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
