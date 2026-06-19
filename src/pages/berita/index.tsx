import React from "react";
import Head from "next/head";
import BeritaView from "@/views/berita";

export default function BeritaPage() {
  return (
    <>
      <Head>
        <title>Berita & Kegiatan | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Dapatkan informasi terbaru mengenai kegiatan, edukasi ekonomi syariah, dan kabar terbaru dari KSPPS BHAPEDES."
        />
        <link rel="canonical" href="https://bhapedes.id/berita" />
        <meta property="og:title" content="Berita & Kegiatan | KSPPS BHAPEDES" />
        <meta
          property="og:description"
          content="Dapatkan informasi terbaru mengenai kegiatan, edukasi ekonomi syariah, dan kabar terbaru dari KSPPS BHAPEDES."
        />
        <meta property="og:url" content="https://bhapedes.id/berita" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KSPPS BHAPEDES" />
        <meta
          property="og:image"
          content="https://bhapedes.id/img/assets/cover.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <BeritaView />
    </>
  );
}
