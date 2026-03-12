import { useState, useEffect } from "react";
import Link from "next/link";
import {
  RotateCcw,
  Trash2,
  AlertCircle,
  Clock,
  Info,
  ArrowLeft,
} from "lucide-react";
import AdminLayout from "../components/layouts/AdminLayout";
import { heroService } from "@/services/heroService";
import { Hero } from "@/types";
import ConfirmModal from "../components/ui/ConfirmModal";

export default function HeroRecycleBinView() {
  const [dataSampah, setDataSampah] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk Modal Kustom
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    id: number | null;
    judul: string;
    type: "restore" | "delete" | "empty";
  }>({
    isOpen: false,
    id: null,
    judul: "",
    type: "restore",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const data = heroService.getDeletedHero();
    setDataSampah(data);
    setIsLoading(false);
  };

  const onOpenModal = (
    type: "restore" | "delete" | "empty",
    id: number | null = null,
    judul: string = "",
  ) => {
    setModalConfig({ isOpen: true, type, id, judul });
  };

  const handleConfirmAction = () => {
    const { type, id } = modalConfig;

    if (type === "restore" && id) {
      heroService.restoreHero(id);
    } else if (type === "delete" && id) {
      heroService.permanentlyDeleteHero(id);
    } else if (type === "empty") {
      dataSampah.forEach((hero) => heroService.permanentlyDeleteHero(hero.id));
    }

    loadData();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header & Navigasi */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Tempat Sampah Hero
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Kelola hero display yang telah dihapus sementara.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenModal("empty")}
            disabled={dataSampah.length === 0}
            className="inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-sm text-sm font-bold border border-red-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
            Kosongkan Sampah
          </button>
        </div>

        {/* Banner Informasi */}
        <div className="bg-amber-50 border border-amber-100 rounded-sm p-4 flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-amber-800">
              Penyimpanan Sementara
            </h4>
            <p className="text-sm text-amber-700 leading-relaxed">
              Hero display yang berada di tempat sampah dapat dipulihkan kembali
              ke daftar utama atau dihapus secara{" "}
              <span className="font-bold">permanen.</span>
            </p>
          </div>
        </div>

        {/* Tabel Konten */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider w-16">
                    No
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Gambar & Judul
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Uploader
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Waktu Hapus
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {isLoading ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      Memuat data...
                    </td>
                  </tr>
                ) : dataSampah.length > 0 ? (
                  dataSampah.map((hero, index) => (
                    <tr
                      key={hero.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-400 font-medium">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-20 h-12 rounded bg-gray-100 overflow-hidden border border-gray-200 opacity-60">
                            {hero.gambar && (
                              <img
                                src={hero.gambar}
                                alt={hero.judul}
                                className="w-full h-full object-cover grayscale"
                              />
                            )}
                          </div>
                          <p className="text-sm font-semibold text-gray-600 line-clamp-1 italic">
                            {hero.judul}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {hero.pengunggah}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="text-sm">{hero.waktu}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() =>
                              onOpenModal("restore", hero.id, hero.judul)
                            }
                            className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors group relative"
                            title="Pulihkan"
                          >
                            <RotateCcw className="w-4 h-4 transition-transform group-hover:-rotate-45" />
                          </button>
                          <button
                            onClick={() =>
                              onOpenModal("delete", hero.id, hero.judul)
                            }
                            className="p-1.5 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
                            title="Hapus Permanen"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <Info className="w-8 h-8 text-gray-300" />
                        <p className="text-gray-500 font-medium">
                          Tempat sampah kosong
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-gray-50/30 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              {isLoading
                ? "..."
                : `Menampilkan ${dataSampah.length} data terhapus`}
            </span>
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        onConfirm={handleConfirmAction}
        title={
          modalConfig.type === "restore"
            ? "Pulihkan Hero?"
            : modalConfig.type === "empty"
              ? "Kosongkan Sampah?"
              : "Hapus Permanen?"
        }
        message={
          modalConfig.type === "restore"
            ? `Hero "${modalConfig.judul}" akan dikembalikan ke daftar utama.`
            : modalConfig.type === "empty"
              ? "Semua data hero di tempat sampah akan dihapus selamanya dan tidak bisa dikembalikan."
              : `Hapus hero "${modalConfig.judul}" selamanya? Tindakan ini tidak dapat dibatalkan.`
        }
        confirmText={
          modalConfig.type === "restore"
            ? "Ya, Pulihkan"
            : modalConfig.type === "empty"
              ? "Ya, Kosongkan"
              : "Hapus Selamanya"
        }
        variant={modalConfig.type === "restore" ? "info" : "danger"}
      />
    </AdminLayout>
  );
}
