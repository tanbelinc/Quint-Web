import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: quint"
        description="Welcome to quint homepage."
        canonical="https://quint.vercel.app/"
        openGraph={{
          url: "https://quint.vercel.app/",
        }}
      />
      <Head>
        <title>Quint</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
