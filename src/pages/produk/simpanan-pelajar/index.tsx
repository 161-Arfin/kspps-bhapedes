import SimpananPelajarView from "@/views/produk/simpanan-pelajar";
import Head from "next/head";

const SimpananPelajarPage = () => {
  return (
    <>
      <Head>
        <title>Simpanan Pelajar | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Layanan Simpanan Pelajar dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <link
          rel="canonical"
          href="https://bhapedes.id/produk/simpanan-pelajar"
        />

        <meta property="og:title" content="Simpanan Pelajar | KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Layanan Simpanan Pelajar dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <meta
          property="og:url"
          content="https://bhapedes.id/produk/simpanan-pelajar"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/layanan/Simpanan%20Pelajar.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SimpananPelajarView />
    </>
  );
};

export default SimpananPelajarPage;
