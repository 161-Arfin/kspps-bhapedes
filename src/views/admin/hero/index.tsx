import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Plus,
  Pencil,
  Trash2,
  Image as ImageIcon,
} from "lucide-react";
import AdminLayout from "../components/layouts/AdminLayout";
import { heroService } from "@/services/heroService";
import { Hero } from "@/types";
import ConfirmModal from "../components/ui/ConfirmModal";

export default function HeroListView() {
  const [dataHero, setDataHero] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Modal Konfirmasi
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    id: number | null;
    judul: string;
  }>({
    isOpen: false,
    id: null,
    judul: ""
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const data = heroService.getHero();
    setDataHero(data);
    setIsLoading(false);
  };

  const handleDelete = (id: number, judul: string) => {
    setModalConfig({ isOpen: true, id, judul });
  };

  const handleConfirmDelete = () => {
    if (modalConfig.id) {
      heroService.softDeleteHero(modalConfig.id);
      loadData();
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Bagian Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hero Display Management</h1>
            <p className="text-sm text-gray-500 mt-1">Kelola gambar utama dan pesan promosi di halaman beranda.</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/hero/tambah"
              className="inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-800 text-white px-4 py-2.5 rounded-sm text-sm font-semibold transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Tambah Hero
            </Link>
          </div>
        </div>

        {/* Konten Tabel */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">No</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Gambar & Judul</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Uploader</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap text-center">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">Waktu</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="h-8 w-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />
                        <p className="text-sm text-gray-500 font-medium">Memuat data hero...</p>
                      </div>
                    </td>
                  </tr>
                ) : dataHero.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                          <ImageIcon className="w-8 h-8 text-gray-300" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-gray-900">Belum Ada Hero</p>
                          <p className="text-xs text-gray-500">Silakan tambahkan hero display pertama Anda.</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  dataHero.map((hero, index) => (
                    <tr key={hero.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">{index + 1}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
                            {hero.gambar ? (
                              <img
                                src={hero.gambar}
                                alt={hero.judul}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-5 h-5 text-gray-300" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">
                              {hero.judul}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 whitespace-nowrap">
                        {hero.pengunggah}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {hero.status ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 tracking-wider">
                            Aktif
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-gray-600 border border-gray-200 tracking-wider">
                            Draft
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">{hero.waktu}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <Link
                            href={`/admin/hero/edit/${hero.id}`}
                            className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                            title="Edit"
                          >
                            <Pencil className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(hero.id, hero.judul)}
                            className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-500">
              {isLoading ? 'Sedang memuat...' : `Menampilkan ${dataHero.length} data hero`}
            </span>
          </div>
        </div>
      </div>
      <ConfirmModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        onConfirm={handleConfirmDelete}
        title="Hapus Hero Display"
        message={`Apakah Anda yakin ingin menghapus "${modalConfig.judul}"? Data akan dipindahkan ke tempat sampah.`}
        confirmText="Hapus"
        cancelText="Batal"
        variant="danger"
      />
    </AdminLayout>
  );
}
