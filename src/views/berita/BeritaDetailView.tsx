import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  User,
  ArrowLeft,
  Clock,
  Loader2,
  Newspaper
} from "lucide-react";
import { beritaService } from "@/services/beritaService";
import { Berita } from "@/types";

interface BeritaDetailViewProps {
  slugOrId: string;
}

export default function BeritaDetailView({ slugOrId }: BeritaDetailViewProps) {
  const [berita, setBerita] = useState<Berita | null>(null);
  const [recentNews, setRecentNews] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = beritaService.getBeritaBySlug(slugOrId);
        setBerita(data);

        if (data) {
          const allNews = beritaService.getBerita();
          setRecentNews(
            allNews.filter((b) => b.id !== data.id).slice(0, 6)
          );
        }
      } catch (error) {
        console.error("Error fetching berita detail:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (slugOrId) {
      fetchData();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slugOrId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-red-600 mb-4" />
        <p className="text-gray-500">Memuat berita...</p>
      </div>
    );
  }

  if (!berita) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Newspaper className="w-14 h-14 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold mb-2">
          Berita Tidak Ditemukan
        </h2>
        <p className="text-gray-500 mb-6">
          Maaf, berita yang Anda cari tidak tersedia.
        </p>
        <Link
          href="/berita"
          className="px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Kembali ke Berita
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      <div className="max-w-6xl mx-auto px-4 pt-10">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* MAIN CONTENT */}
          <article className="lg:col-span-2">

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-black mb-4">
              {berita.judul}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 border-b pb-4 mb-6">
              <span className="font-semibold text-black">
                {berita.pengunggah}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar size={13} />
                <span className="font-medium">
                  {new Date(berita.id).toLocaleDateString('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock size={13} />
                <span className="font-medium">
                  {new Date(berita.id).toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })} WIB
                </span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full mb-8">
              <img
                src={berita.gambar}
                alt={berita.judul}
                className="w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="prose prose-xl prose-emerald max-w-none text-gray-800 leading-[1.8] space-y-10 font-serif selection:bg-[#fff3e0]">
              {berita.isi.split('\n').map((paragraph, idx) => (
                paragraph.trim() && (
                  < p key={idx} className={`${idx === 0 ? 'text-lg font-medium text-gray-900 mb-10' : ''}`}>
                    {paragraph}
                  </p>
                )
              ))}
            </div>

            {/* Back Button */}
            <div className="mt-12">
              <Link
                href="/berita"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:underline"
              >
                <ArrowLeft size={16} />
                Kembali ke Daftar Berita
              </Link>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">

              <h3 className="text-lg font-bold border-b pb-2 mb-6">
                Berita Terbaru
              </h3>

              <div className="space-y-6">
                {recentNews.map((item) => (
                  <Link
                    key={item.id}
                    href={`/berita/${item.slug}`}
                    className="flex gap-4 group"
                  >
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      className="w-24 h-20 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold leading-snug group-hover:text-red-600 transition">
                        {item.judul}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.waktu}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </aside>

        </div>
      </div >
    </div >
  );
}