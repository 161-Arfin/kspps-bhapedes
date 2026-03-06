import { useState, useEffect } from "react";
import AdminLayout from "../components/layouts/AdminLayout";
import {
  Newspaper,
  Eye,
  MessageSquare,
  TrendingUp,
  Clock,
  User as UserIcon,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { beritaService } from "@/services/beritaService";
import { Berita } from "@/types";

export default function DashboardView() {
  const [dataBerita, setDataBerita] = useState<Berita[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = beritaService.getBerita();
    setDataBerita(data);
    setIsLoading(false);
  }, []);

  // Hitung Kategori Terpopuler
  const getPopularCategory = () => {
    if (dataBerita.length === 0) return "-";
    const counts: { [key: string]: number } = {};
    dataBerita.forEach(b => {
      counts[b.kategori] = (counts[b.kategori] || 0) + 1;
    });
    return Object.entries(counts).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  const stats = [
    { label: 'Total Berita', value: dataBerita.length.toString(), icon: Newspaper, color: 'text-slate-700', bg: 'bg-slate-100' },
    { label: 'Total View', value: '0', icon: Eye, color: 'text-slate-700', bg: 'bg-slate-100' },
    { label: 'Komentar', value: '0', icon: MessageSquare, color: 'text-slate-700', bg: 'bg-slate-100' },
    { label: 'Kategori Populer', value: getPopularCategory(), icon: TrendingUp, color: 'text-slate-700', bg: 'bg-slate-100' },
  ];

  // Ambil 3 berita terbaru untuk log aktivitas
  const recentNews = [...dataBerita]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <AdminLayout>
      <div className="space-y-6">

        {/* Header Dashboard Minimalis */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Dashboard Admin</h1>
            <p className="text-sm text-slate-500 mt-1">Ringkasan aktivitas dan performa portal berita.</p>
          </div>
        </div>

        {/* Kartu Statistik Slate & White */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white p-5 border border-slate-200 flex items-center gap-4">
                <div className={`${stat.bg} ${stat.color} p-3 rounded-md border border-slate-200`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-tight">{stat.label}</p>
                  <p className="text-xl font-bold text-slate-800 mt-0.5">
                    {isLoading ? "..." : stat.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Aktivitas Terbaru */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-slate-200">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  Berita Terbaru
                </h3>
                <Link href="/admin/berita" className="text-xs text-slate-500 hover:text-slate-800 font-medium">Lihat Semua</Link>
              </div>
              <div className="divide-y divide-slate-100">
                {isLoading ? (
                  <div className="p-6 text-center text-sm text-slate-500">Memuat data...</div>
                ) : recentNews.length === 0 ? (
                  <div className="p-6 text-center text-sm text-slate-500">Belum ada berita.</div>
                ) : (
                  recentNews.map((news) => (
                    <div key={news.id} className="px-6 py-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 border border-slate-200">
                          <UserIcon className="w-4 h-4" />
                        </div>
                        <div className="text-sm">
                          <p className="text-slate-600">
                            <span className="font-semibold text-slate-800">{news.pengunggah}</span>
                            <span className="mx-1">menambahkan berita</span>
                            <span className="font-medium text-slate-700">"{news.judul}"</span>
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">{news.waktu}</p>
                        </div>
                      </div>
                      <Link href={`/admin/berita/edit/${news.id}`}>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Info Status & Pintasan Minimalis */}
          <div className="space-y-6">
            <div className="bg-white p-6 border border-slate-200">
              <h3 className="text-sm font-bold text-slate-800 mb-4">Status Portal</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Kesehatan Sistem</span>
                  <span className="text-slate-800 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                    Normal
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Penyimpanan</span>
                  <span className="text-slate-800">1.2 / 10 GB</span>
                </div>
                <div className="pt-2">
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full w-[12%] bg-slate-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}
