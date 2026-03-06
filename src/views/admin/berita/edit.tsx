import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { beritaService } from "@/services/beritaService";
import AdminLayout from "../components/layouts/AdminLayout";
import {
  Save,
  X,
  ArrowLeft,
  AlertCircle
} from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface EditBeritaViewProps {
  id: number;
}

const validationSchema = Yup.object({
  judul: Yup.string()
    .min(5, 'Judul minimal 5 karakter')
    .required('Judul berita wajib diisi'),
  kategori: Yup.string()
    .required('Kategori wajib dipilih'),
  ringkasan: Yup.string()
    .min(10, 'Ringkasan minimal 10 karakter')
    .max(250, 'Ringkasan maksimal 250 karakter')
    .required('Ringkasan wajib diisi'),
  isi: Yup.string()
    .min(20, 'Konten minimal 20 karakter')
    .required('Konten utama wajib diisi'),
  gambar: Yup.string().nullable()
});

export default function EditBeritaView({ id }: EditBeritaViewProps) {
  const router = useRouter();
  const [previewGambar, setPreviewGambar] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const formik = useFormik({
    initialValues: {
      judul: "",
      kategori: "",
      status: true,
      ringkasan: "",
      isi: "",
      gambar: ""
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      setIsSaving(true);

      try {
        beritaService.updateBerita(id, {
          judul: values.judul,
          kategori: values.kategori,
          status: values.status,
          ringkasan: values.ringkasan,
          isi: values.isi,
          gambar: previewGambar || '/placeholder.png'
        });

        setTimeout(() => {
          router.push('/admin/berita');
        }, 800);
      } catch (error) {
        console.error("Gagal memperbarui berita:", error);
        alert("Terjadi kesalahan saat memperbarui berita.");
        setIsSaving(false);
      }
    },
  });

  useEffect(() => {
    if (id) {
      const data = beritaService.getBeritaById(id);
      if (data) {
        formik.setValues({
          judul: data.judul,
          kategori: data.kategori,
          status: data.status,
          ringkasan: data.ringkasan,
          isi: data.isi,
          gambar: data.gambar || ""
        });
        setPreviewGambar(data.gambar);
        setIsLoading(false);
      } else {
        alert("Data berita tidak ditemukan!");
        router.push('/admin/berita');
      }
    }
  }, [id, router]);

  const handleGambarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreviewGambar(result);
        formik.setFieldValue('gambar', result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-700" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/admin/berita"
              className="p-2 hover:bg-white rounded-sm border border-transparent hover:border-gray-200 transition-all text-gray-400 hover:text-gray-600"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Edit Berita</h1>
              <p className="text-sm text-gray-500 mt-0.5">ID: #{id}</p>
            </div>
          </div>
        </div>

        {/* Formulir */}
        <div className="bg-white border border-gray-200 overflow-hidden">
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6 sm:p-8 space-y-8">
              {/* Gambar */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-gray-700">Gambar Utama</label>
                <div
                  className={`relative aspect-video w-full rounded-xl border-2 border-dashed transition-all flex flex-col items-center justify-center overflow-hidden
                    ${previewGambar ? 'border-none' : 'border-gray-300 bg-gray-50 hover:bg-gray-100 hover:border-gray-400'}`}
                >
                  {previewGambar ? (
                    <>
                      <img src={previewGambar} alt="Preview" className="w-full h-full object-cover" />
                      <label className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center cursor-pointer transition-all">
                        <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">Ganti Gambar</span>
                        <input type="file" className="hidden" accept="image/*" onChange={handleGambarChange} />
                      </label>
                    </>
                  ) : (
                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer p-8">
                      <span className="text-sm text-gray-500">Klik untuk upload gambar</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleGambarChange} />
                    </label>
                  )}
                </div>
              </div>

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="judul" className="block text-sm font-bold text-gray-700">Judul Berita</label>
                  <input
                    id="judul"
                    name="judul"
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border transition-all outline-none text-gray-900 
                      ${formik.touched.judul && formik.errors.judul
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-300 focus:ring-2 focus:ring-slate-500'}`}
                    value={formik.values.judul}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.judul && formik.errors.judul && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {formik.errors.judul}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="kategori" className="block text-sm font-bold text-gray-700">Kategori</label>
                  <select
                    id="kategori"
                    name="kategori"
                    className={`w-full px-4 py-3 rounded-lg border transition-all outline-none text-gray-900 bg-white
                      ${formik.touched.kategori && formik.errors.kategori
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-300 focus:ring-2 focus:ring-slate-500'}`}
                    value={formik.values.kategori}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="Bisnis">Bisnis</option>
                    <option value="Kegiatan">Kegiatan</option>
                    <option value="Edukasi">Edukasi</option>
                    <option value="Prestasi">Prestasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                  {formik.touched.kategori && formik.errors.kategori && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {formik.errors.kategori}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Status</label>
                  <div className="flex gap-4 py-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={!formik.values.status}
                        onChange={() => formik.setFieldValue('status', false)}
                      />
                      <span className="text-sm text-gray-700 font-medium">Draft</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        checked={formik.values.status}
                        onChange={() => formik.setFieldValue('status', true)}
                      />
                      <span className="text-sm text-gray-700 font-medium">Publikasikan</span>
                    </label>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="ringkasan" className="block text-sm font-bold text-gray-700">Ringkasan</label>
                  <textarea
                    id="ringkasan"
                    name="ringkasan"
                    rows={3}
                    className={`w-full px-4 py-3 rounded-lg border transition-all outline-none text-gray-900 resize-none
                      ${formik.touched.ringkasan && formik.errors.ringkasan
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-300 focus:ring-2 focus:ring-slate-500'}`}
                    value={formik.values.ringkasan}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.ringkasan && formik.errors.ringkasan && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {formik.errors.ringkasan}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="isi" className="block text-sm font-bold text-gray-700">Konten Utama</label>
                  <textarea
                    id="isi"
                    name="isi"
                    rows={10}
                    className={`w-full px-4 py-3 rounded-lg border transition-all outline-none text-gray-900 min-h-[250px]
                      ${formik.touched.isi && formik.errors.isi
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-gray-300 focus:ring-2 focus:ring-slate-500'}`}
                    value={formik.values.isi}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.isi && formik.errors.isi && (
                    <p className="text-red-500 text-xs flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {formik.errors.isi}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-3">
              <Link href="/admin/berita" className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-bold hover:bg-gray-100 transition-all text-sm">
                Batal
              </Link>
              <button
                type="submit"
                disabled={isSaving || !formik.isValid}
                className="px-10 py-2.5 rounded-lg bg-slate-700 text-white font-bold hover:bg-slate-800 shadow-sm transition-all text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
                {isSaving ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
