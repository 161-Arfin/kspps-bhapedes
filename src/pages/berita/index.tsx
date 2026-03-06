import React from "react";
import Head from "next/head";
import BeritaView from "@/views/berita";

export default function BeritaPage() {
  return (
    <>
      <Head>
        <title>Berita & Kegiatan | KSPPS BMT Nurul Barakah</title>
        <meta name="description" content="Dapatkan informasi terbaru mengenai kegiatan, prestasi, dan edukasi ekonomi syariah dari KSPPS BMT Nurul Barakah." />
      </Head>
      <BeritaView />
    </>
  );
}
