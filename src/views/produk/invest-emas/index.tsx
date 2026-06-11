import React from "react";
import Link from "next/link";
import {
  Gem,
  TrendingUp,
  ShieldCheck,
  Coins,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function InvestasiEmasView() {
  return (
    <div className="bg-white min-h-screen">
      {/* ================= HERO ================= */}
      <section className="bg-[#194e9e] py-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-semibold uppercase text-green-200 mb-6">
            <Link href="/" className="text-white hover:text-[#f08519]">
              Beranda
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#f08519] font-semibold">Investasi Emas</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold">
            Investasi Emas Syariah
          </h1>

          <p className="mt-4 max-w-2xl text-green-100 leading-relaxed">
            Solusi investasi yang aman dan bernilai stabil melalui kepemilikan
            emas dengan sistem syariah yang transparan dan terpercaya.
          </p>
        </div>
      </section>

      {/* ================= PENJELASAN ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Apa itu <span className="text-[#f08519]">Investasi Emas?</span>
            </h2>

            <div className="w-16 h-1 bg-[#194e9e] mb-6 rounded" />

            <p className="text-gray-600 leading-relaxed mb-4">
              Investasi emas merupakan salah satu instrumen investasi yang telah
              dikenal luas karena nilainya yang cenderung stabil dan mampu
              menjaga nilai kekayaan dalam jangka panjang.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Melalui layanan investasi emas di KSPPS Bhapedes, anggota dapat
              memiliki emas secara bertahap melalui sistem tabungan atau cicilan
              yang dikelola berdasarkan prinsip syariah.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Program ini membantu anggota merencanakan investasi masa depan
              dengan cara yang aman, mudah, dan sesuai dengan nilai-nilai Islam.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <Image
              src="/img/assets/invest.jpg"
              alt="Investasi Emas"
              width={200}
              height={200}
              className="rounded-lg shadow-md border border-gray-200 w-full object-cover"
            />

            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-[#f08519] rounded-bl-lg" />
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN ================= */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Keunggulan Investasi Emas
            </h2>
            <div className="w-16 h-1 bg-[#f08519] mx-auto mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <TrendingUp className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Nilai Stabil</h3>
              <p className="text-gray-500 text-sm">
                Emas dikenal sebagai aset yang relatif stabil dan mampu menjaga
                nilai kekayaan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Aman & Syariah</h3>
              <p className="text-gray-500 text-sm">
                Dikelola sesuai prinsip syariah dan diawasi oleh Dewan Pengawas
                Syariah.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Coins className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Investasi Bertahap
              </h3>
              <p className="text-gray-500 text-sm">
                Anggota dapat memiliki emas secara bertahap melalui setoran atau
                cicilan ringan.
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
              Informasi Produk
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Akad
                </span>
                <p className="font-medium text-gray-700">
                  Murabahah
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Jenis Investasi
                </span>
                <p className="font-medium text-gray-700">
                  Tabungan / Cicilan Emas
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Setoran Awal
                </span>
                <p className="font-medium text-gray-700">
                  Mulai dari Rp100.000
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Tujuan
                </span>
                <p className="font-medium text-gray-700">
                  Investasi jangka menengah & panjang
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
