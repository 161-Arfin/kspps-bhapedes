import Head from "next/head";
import TentangView from "@/views/tentang";

const TentangPage = () => {
  return (
    <>
      <Head>
        <title>Tentang | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Kenali profil KSPPS BHAPEDES, koperasi syariah berbasis keanggotaan yang melayani masyarakat Kepulauan Kangean dengan prinsip amanah dan profesional."
        />
        <link rel="canonical" href="https://bhapedes.id/tentang" />

        <meta property="og:title" content="Tentang KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Profil KSPPS BHAPEDES sebagai koperasi syariah di Kepulauan Kangean."
        />
        <meta property="og:url" content="https://bhapedes.id/tentang" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/assets/Foto%20bersama.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <TentangView />
    </>
  );
};

export default TentangPage;
