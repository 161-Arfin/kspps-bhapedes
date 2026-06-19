import Head from "next/head";
import HomeView from "@/views/home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>KSPPS BHAPEDES | Koperasi Syariah Kepulauan Kangean</title>
        <meta
          name="description"
          content="KSPPS BHAPEDES adalah koperasi simpan pinjam dan pembiayaan syariah di Kepulauan Kangean yang melayani simpanan, pembiayaan, gadai syariah, dan investasi emas."
        />
        <link rel="canonical" href="https://bhapedes.id/" />

        <meta property="og:title" content="KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Koperasi simpan pinjam dan pembiayaan syariah di Kepulauan Kangean."
        />
        <meta property="og:url" content="https://bhapedes.id/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KSPPS BHAPEDES" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/assets/cover.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KSPPS BHAPEDES | Koperasi Syariah Kepulauan Kangean"
        />
        <meta
          name="twitter:description"
          content="Koperasi simpan pinjam dan pembiayaan syariah di Kepulauan Kangean."
        />
      </Head>

      <HomeView />
    </>
  );
};

export default HomePage;
