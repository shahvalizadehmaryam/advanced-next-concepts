import Head from "next/head";

const NextJS = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="nextJs course" content={data.description} />
      </Head>
      <h1>next.js page - {data.name}</h1>
    </div>
  );
};

export default NextJS;
export async function getServerSideProps() {
  return {
    props: {
      data: {
        name: "maryam",
        title: "maryam page",
        description: "maryam is a programmer",
      },
    },
  };
}
