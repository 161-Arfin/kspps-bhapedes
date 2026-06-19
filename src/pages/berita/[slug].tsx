import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import BeritaDetailView from "@/views/berita/BeritaDetailView";

export default function BeritaDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <Head>
        <title>Berita | KSPPS BHAPEDES</title>
        <meta
          name="description"
          content="Dapatkan informasi terbaru mengenai kegiatan, edukasi ekonomi syariah, dan kabar terbaru dari KSPPS BHAPEDES."
        />
        <link rel="canonical" href="https://bhapedes.id/berita" />
      </Head>
      {slug ? (
        <BeritaDetailView slugOrId={slug as string} />
      ) : (
        <div className="min-h-screen bg-gray-50" />
      )}
    </>
  );
}
