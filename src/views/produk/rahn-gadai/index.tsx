import React from "react";
import Link from "next/link";
import { ShieldCheck, Wallet, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function RahnView() {
  return (
    <div className="bg-white min-h-screen">
      {/* ================= HERO ================= */}
      <section className="bg-[#194e9e] py-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-semibold uppercase text-green-200 mb-6">
            <Link href="/" className="text-white hover:text-[#194e9e]">
              Beranda
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#f08519] font-semibold">Rahn/Gadai</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold">
            Gadai Syariah (Rahn)
          </h1>

          <p className="mt-4 max-w-2xl text-green-100 leading-relaxed">
            Solusi pembiayaan cepat berbasis prinsip syariah dengan sistem gadai
            (rahn) yang aman, transparan, dan tanpa riba.
          </p>
        </div>
      </section>

      {/* ================= PENJELASAN ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <div className="relative">
            <Image
              src="/img/layanan/Gadai.jpeg"
              alt="Gadai Syariah"
              width={900}
              height={620}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg shadow-md border border-gray-200 w-full h-auto object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#f08519] rounded-br-lg" />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Apa itu <span className="text-[#f08519]">Rahn?</span>
            </h2>
            <div className="w-16 h-1 bg-[#194e9e] mb-6 rounded" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Rahn merupakan layanan pembiayaan syariah dengan sistem gadai
              dimana anggota dapat memperoleh dana tunai dengan menjaminkan
              barang berharga sebagai jaminan.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Barang yang dijaminkan akan disimpan dengan aman oleh koperasi
              hingga pembiayaan dilunasi. Sistem ini tidak menggunakan bunga,
              melainkan biaya pemeliharaan (ujrah) sesuai ketentuan syariah.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Layanan Rahn sangat membantu anggota yang membutuhkan dana cepat
              untuk berbagai kebutuhan tanpa harus menjual barang berharga yang
              dimiliki.
            </p>
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN ================= */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Keunggulan Gadai Syariah
            </h2>
            <div className="w-16 h-1 bg-[#f08519] mx-auto mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Wallet className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Proses Cepat</h3>
              <p className="text-gray-500 text-sm">
                Pengajuan pembiayaan dapat diproses dengan cepat setelah barang
                jaminan dinilai.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Aman & Terpercaya
              </h3>
              <p className="text-gray-500 text-sm">
                Barang jaminan disimpan secara aman hingga pembiayaan dilunasi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Clock className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Fleksibel</h3>
              <p className="text-gray-500 text-sm">
                Jangka waktu pembiayaan dapat disesuaikan dengan kemampuan
                anggota.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFORMASI PRODUK ================= */}
      {/* <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6">
              Informasi Layanan
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Akad
                </span>
                <p className="font-medium text-gray-700">
                  Rahn & Ijarah
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Barang Jaminan
                </span>
                <p className="font-medium text-gray-700">
                  Emas, perhiasan, elektronik, dll
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Pencairan Dana
                </span>
                <p className="font-medium text-gray-700">
                  Cepat setelah penilaian barang
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Jangka Waktu
                </span>
                <p className="font-medium text-gray-700">
                  Sesuai kesepakatan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
