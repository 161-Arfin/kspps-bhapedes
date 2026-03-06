import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import BeritaDetailView from "@/views/berita/BeritaDetailView";

export default function BeritaDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Render detail view only when slug is available from the router
  return (
    <>
      <Head>
        <title>Detail Berita | KSPPS BMT Nurul Barakah</title>
        <meta name="description" content="Baca detail berita dan pengumuman terbaru dari KSPPS BMT Nurul Barakah." />
      </Head>
      {slug ? (
        <BeritaDetailView slugOrId={slug as string} />
      ) : (
        <div className="min-h-screen bg-gray-50" />
      )}
    </>
  );
}
