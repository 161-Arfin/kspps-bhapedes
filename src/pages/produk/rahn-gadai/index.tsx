import Head from "next/head";
import RahnView from "@/views/produk/rahn-gadai";

const RahnPage = () => {
  return (
    <>
      <Head>
        <title>Gadai Syariah | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Layanan gadai syariah dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <link rel="canonical" href="https://bhapedes.id/produk/rahn-gadai" />

        <meta property="og:title" content="Gadai Syariah | KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Layanan gadai syariah dari KSPPS BHAPEDES yang aman, transparan, dan sesuai prinsip syariah."
        />
        <meta
          property="og:url"
          content="https://bhapedes.id/produk/rahn-gadai"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/layanan/Gadai.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <RahnView />
    </>
  );
};

export default RahnPage;
