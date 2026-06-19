import InvestasiEmasView from "@/views/produk/invest-emas";
import Head from "next/head";

const InvestasiEmasPage = () => {
  return (
    <>
      <Head>
        <title>Investasi Emas | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Layanan Investasi Emas dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <link rel="canonical" href="https://bhapedes.id/produk/invest-emas" />

        <meta property="og:title" content="Investasi Emas | KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Layanan Investasi Emas dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <meta
          property="og:url"
          content="https://bhapedes.id/produk/invest-emas"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/layanan/Investasi%20Emas.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <InvestasiEmasView />
    </>
  );
};

export default InvestasiEmasPage;
