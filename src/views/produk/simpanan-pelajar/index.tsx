import React from "react";
import {
  GraduationCap,
  HandCoins,
  ShieldCheck,
  Users,
  ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function SimpananPelajarView() {
  return (
    <div className="bg-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-[#2E7D32] py-12 text-white">
        <div className="max-w-7xl mx-auto px-6">

          <nav className="flex items-center gap-2 text-sm font-semibold uppercase text-green-200 mb-6">
            <Link href="/" className="text-white hover:text-[#F0A500]">
              Beranda
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#F0A500] font-semibold">
              Simpanan Pelajar
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold">
            Simpanan Pelajar
          </h1>

          <p className="mt-4 max-w-3xl text-green-100 leading-relaxed">
            Program tabungan khusus bagi pelajar untuk menumbuhkan
            kebiasaan menabung sejak dini dengan sistem pengelolaan
            yang aman, transparan, dan sesuai prinsip syariah.
          </p>
        </div>
      </section>

      {/* ================= PENJELASAN ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/img/assets/sipijar.jpg"
              alt="Simpanan Pelajar"
              className="rounded-lg shadow-md border border-gray-200 w-full object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#F0A500] rounded-br-lg" />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Apa itu <span className="text-[#F0A500]">Simpanan Pelajar?</span>
            </h2>
            <div className="w-16 h-1 bg-[#2E7D32] mb-6 rounded" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Simpanan Pelajar merupakan produk tabungan yang diperuntukkan
              khusus bagi siswa atau pelajar sebagai sarana belajar
              mengelola keuangan sejak usia dini. Melalui program ini,
              pelajar dapat menabung secara rutin dengan nominal yang
              ringan dan fleksibel.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Program ini juga menjadi bagian dari edukasi literasi
              keuangan syariah agar generasi muda memahami pentingnya
              menabung, merencanakan keuangan, serta menghindari
              praktik keuangan yang tidak sesuai prinsip syariah.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dengan Simpanan Pelajar, orang tua dan sekolah juga dapat
              ikut berperan dalam membangun kebiasaan finansial yang
              sehat bagi anak sejak dini.
            </p>
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN ================= */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Keunggulan Simpanan Pelajar
            </h2>
            <div className="w-16 h-1 bg-[#F0A500] mx-auto mt-2 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <HandCoins className="mx-auto text-[#2E7D32] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Setoran Ringan
              </h3>
              <p className="text-gray-500 text-sm">
                Setoran tabungan dapat dilakukan dengan nominal ringan
                sehingga mudah dijangkau oleh para pelajar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <ShieldCheck className="mx-auto text-[#2E7D32] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Aman & Syariah
              </h3>
              <p className="text-gray-500 text-sm">
                Dikelola dengan sistem keuangan syariah yang aman,
                transparan, serta bebas riba.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Users className="mx-auto text-[#2E7D32] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Edukasi Finansial
              </h3>
              <p className="text-gray-500 text-sm">
                Membantu pelajar belajar mengatur keuangan dan
                membangun kebiasaan menabung sejak usia dini.
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
                  Wadiah / Mudharabah
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Setoran Awal
                </span>
                <p className="font-medium text-gray-700">
                  Mulai dari Rp10.000
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Sasaran
                </span>
                <p className="font-medium text-gray-700">
                  Pelajar SD, SMP, SMA
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Penarikan
                </span>
                <p className="font-medium text-gray-700">
                  Sesuai ketentuan koperasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

    </div>
  );
}