import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Daryl's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header
          title="Hi. I'm Daryl —
A Dublin based,
multidisciplinary
digital product
designer."
        />
        <p className="description">
          A multidisciplinary digital product designer, helping design, launch and grow digital brands & products. Focused on delivering well-crafted, user-centred products by transforming rough ideas & complex problems into compelling digital experiences. Over the years I’ve worked with startups,
          large enterprises and global brands on a variety of projects, ranging from user-centred interfaces, motion design and comprehensive brand identity and design systems. If you have a project you’d like to discuss, or just want to chat about design, then please reach out and say hello 👋
        </p>
      </main>

      <Footer />
    </div>
  );
}
