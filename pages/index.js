import Head from "next/head";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { fetchEntries } from "utils/contentfulPage";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Home(props) {
  const { fields } = props;

  console.log(props);

  return (
    <div className="container">
      <Head>
        <title>Daryl's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {fields.map((item, data) => {
          return <h1 key={data}>{item.title}</h1>;
        })}
        {fields.map((item, data) => {
          return <div key={data}>{documentToReactComponents(item.about)}</div>;
        })}
        {fields.map((item) => {
          return item.gallery1.map((item, data) => {
            return <Image key={data} src={`https:` + item.fields.file.url} width={item.fields.file.details.image.width} height={item.fields.file.details.image.height} alt="Daryl" />;
          });
        })}

        <Vimeo video={"https://player.vimeo.com/video/301496512?h=d48f405b7b"} />

        {fields.map((item) => {
          return item.gallery2.map((item, data) => {
            return <Image key={data} src={`https:` + item.fields.file.url} width={item.fields.file.details.image.width} height={item.fields.file.details.image.height} alt="Daryl" />;
          });
        })}
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const entries = await fetchEntries();
  // console.log(entries);

  let data = entries.filter(
    () =>
      function () {
        return item.sys.contentType.sys.id === "page";
      }
  );

  // console.log(data)

  const fields = data.map((item) => item.fields);

  // console.log(fields);

  return {
    props: {
      fields: fields,
      data: data,
    },
  };
}
