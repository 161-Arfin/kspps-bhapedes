import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { heroService } from "@/services/heroService";
import AdminLayout from "../components/layouts/AdminLayout";
import { Upload, Save, X, AlertCircle } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  judul: Yup.string()
    .min(5, "Judul minimal 5 karakter")
    .required("Judul hero wajib diisi"),
  gambar: Yup.string().required("Gambar hero wajib diunggah"),
});

export default function HeroTambahView() {
  const router = useRouter();
  const [previewGambar, setPreviewGambar] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const formik = useFormik({
    initialValues: {
      judul: "",
      status: true,
      gambar: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSaving(true);

      try {
        heroService.addHero({
          judul: values.judul,
          subjudul: "",
          gambar: previewGambar || "/placeholder.png",
          status: values.status,
        });

        setTimeout(() => {
          router.push("/admin/hero");
        }, 1000);
      } catch (error) {
        console.error("Gagal menyimpan hero:", error);
        alert("Terjadi kesalahan saat menyimpan hero.");
        setIsSaving(false);
      }
    },
  });

  const handleGambarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewGambar(result);
        formik.setFieldValue("gambar", result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6 pb-26 md:pb-0">
        {/* Header & Navigasi */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Tambah Hero Display
              </h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Lengkapi formulir di bawah untuk menambahkan gambar utama baru.
              </p>
            </div>
          </div>
        </div>

        {/* Formulir Utama */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6 sm:p-8 space-y-8">
              {/* Bagian Media */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">
                  Gambar Hero
                </label>
                <div
                  className={`relative aspect-video w-full rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden
                    ${previewGambar ? "border-none" : "border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400"}
                    ${formik.touched.gambar && formik.errors.gambar ? "border-red-500 bg-red-50" : ""}`}
                >
                  {previewGambar ? (
                    <>
                      <img
                        src={previewGambar}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setPreviewGambar(null);
                          formik.setFieldValue("gambar", "");
                        }}
                        className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer p-8 text-center">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <Upload className="w-6 h-6 text-slate-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900">
                        Upload Gambar Hero
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Rekomendasi ukuran: 1920x1080 (16:9)
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleGambarChange}
                      />
                    </label>
                  )}
                </div>
                {formik.touched.gambar && formik.errors.gambar && (
                  <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                    <AlertCircle size={12} /> {formik.errors.gambar}
                  </p>
                )}
              </div>

              {/* Input Data Hero */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label
                    htmlFor="judul"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Judul Hero (Internal)
                  </label>
                  <input
                    id="judul"
                    name="judul"
                    type="text"
                    placeholder="Masukkan judul untuk identifikasi data hero..."
                    className={`w-full px-4 py-3 rounded-lg border transition-all outline-none text-gray-900 
                      ${
                        formik.touched.judul && formik.errors.judul
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
                          : "border-gray-300 focus:ring-2 focus:ring-slate-500"
                      }`}
                    value={formik.values.judul}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.judul && formik.errors.judul ? (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {formik.errors.judul}
                    </p>
                  ) : (
                    <p className="text-[11px] text-gray-400 italic">
                      *Judul ini hanya untuk manajemen admin, tidak akan tampil
                      di halaman depan.
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Status Aktif
                  </label>
                  <div className="flex items-center gap-4 py-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        className="w-4 h-4 text-slate-700 focus:ring-slate-500"
                        checked={!formik.values.status}
                        onChange={() => formik.setFieldValue("status", false)}
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        Draft (Tidak Tampil)
                      </span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        className="w-4 h-4 text-slate-700 focus:ring-slate-500"
                        checked={formik.values.status}
                        onChange={() => formik.setFieldValue("status", true)}
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        Aktif (Tampilkan)
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <Link
                href="/admin/hero"
                className="w-full sm:w-auto px-6 py-2.5 rounded-sm border border-gray-300 text-gray-700 font-bold hover:bg-gray-100 transition-all text-sm text-center"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={isSaving}
                className="w-full sm:w-auto px-10 py-2.5 rounded-sm bg-slate-700 text-white font-bold hover:bg-slate-800 shadow-sm transition-all text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {isSaving ? "Menyimpan..." : "Simpan Hero"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
