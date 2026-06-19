import SimpananWalimahView from "@/views/produk/simpanan-walimah";
import Head from "next/head";

const SimpananWalimahPage = () => {
  return (
    <>
      <Head>
        <title>Simpanan Walimah | KSPPS BHAPEDES</title>
        <meta
          property="description"
          content="Layanan Simpanan Walimah dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <link
          rel="canonical"
          href="https://bhapedes.id/produk/simpanan-walimah"
        />

        <meta property="og:title" content="Simpanan Walimah | KSPPS BHAPEDES" />
        <meta
          property="og:url"
          content="https://bhapedes.id/produk/simpanan-walimah"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/layanan/Simpanan Walimah.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SimpananWalimahView />
    </>
  );
};

export default SimpananWalimahPage;
