import Head from "next/head";
import KontakView from "@/views/kontak";

const KontakPage = () => {
  return (
    <>
      <Head>
        <title>Kontak | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Hubungi KSPPS BHAPEDES untuk informasi layanan simpanan, pembiayaan, gadai syariah, investasi emas, dan layanan koperasi syariah lainnya."
        />
        <link rel="canonical" href="https://bhapedes.id/kontak" />

        <meta property="og:title" content="Kontak KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Hubungi admin KSPPS BHAPEDES untuk informasi produk dan layanan."
        />
        <meta property="og:url" content="https://bhapedes.id/kontak" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/assets/cover.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <KontakView />
    </>
  );
};

export default KontakPage;
