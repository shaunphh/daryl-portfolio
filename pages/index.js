import Head from "next/head";
import Navbar from "@components/Navbar";
import Header from "@components/Header";
import Gallery1 from "@components/Gallery1";
import Video from "@components/Video";
import Gallery2 from "@components/Gallery2";
import Footer from "@components/Footer";
import { fetchEntries } from "utils/contentfulPage";

export default function Home(props) {
  return (
    <>
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
        <meta
          name="google-site-verification"
          content="ssBoV4jTY9IAq3vpVDRkSUyw3i0d1SFP2sTxFqeJzcU"
        />
        <meta
          name="description"
          content="A multidisciplinary digital product designer, helping design, launch and grow digital brands & products. Focused on delivering well-crafted, user-centred products by transforming rough ideas & complex problems into compelling digital experiences."
          key="titleDescription"
        />
        <meta
          name="keywords"
          content="daryl, daryl-fitzsimons, design, ux, ui, user experience, user experience designer, product design, product designer, digital design, digital designer, motion design, portfolio, ireland, irish design"
          key="titleKeywords"
        />
      </Head>
      <div className="container">
        <Navbar icon={props} />
        <Header title={props} />
        <main>
          <Gallery1 item={props} />
          <Video video={props} />
          <Gallery2 item={props} />
        </main>
        <Footer icon={props} />
      </div>
    </>
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
