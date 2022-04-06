import Head from "next/head";
import Vimeo from "@u-wave/react-vimeo";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Gallery1 from "@components/Gallery1";
import Video from "@components/Video";
import Gallery2 from "@components/Gallery2";
import Footer from "@components/Footer";
import { fetchEntries } from "utils/contentfulPage";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Daryl's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Navbar icon={props} />
      <Header title={props} />
      <main>
        <Gallery1 item={props} />
        {/* <Vimeo video={"https://player.vimeo.com/video/301496512?h=d48f405b7b"} width={1240} /> */}
        <Video video={props} />
        <Gallery2 item={props} />
      </main>
      <Footer icon={props} />
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
