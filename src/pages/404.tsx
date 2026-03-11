import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8FAF8] px-4">
      {" "}
      <div className="max-w-xl text-center">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#194e9e]">
          404
        </h1>
        <div className="w-16 h-1 bg-[#f08519] mx-auto my-4 rounded" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-500 mt-4 leading-relaxed">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          Silakan kembali ke halaman utama untuk melanjutkan.
        </p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#194e9e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163f82] transition"
          >
            <Home size={18} />
            Beranda
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft size={18} />
            Kembali
          </button>
        </div>
      </div>
    </section>
  );
}
