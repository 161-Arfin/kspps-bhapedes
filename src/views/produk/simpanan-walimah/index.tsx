import React from "react";
import Link from "next/link";
import { Heart, Calendar, Wallet, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function SimpananWalimahView() {
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
            <span className="text-[#f08519] font-semibold">
              Simpanan Walimah
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold">Simpanan Walimah</h1>

          <p className="mt-4 max-w-2xl text-green-100 leading-relaxed">
            Program tabungan perencanaan pernikahan yang membantu anggota
            mempersiapkan biaya walimah secara bertahap, ringan, dan sesuai
            prinsip syariah.
          </p>
        </div>
      </section>

      {/* ================= PENJELASAN ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Apa itu <span className="text-[#f08519]">Simpanan Walimah?</span>
            </h2>

            <div className="w-16 h-1 bg-[#194e9e] mb-6 rounded" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Simpanan Walimah merupakan produk tabungan rencana yang
              diperuntukkan bagi anggota yang ingin mempersiapkan biaya
              pernikahan secara bertahap dan terencana.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              Melalui program ini, anggota dapat menabung secara rutin sesuai
              kemampuan hingga mencapai target dana yang dibutuhkan untuk
              pelaksanaan akad nikah maupun acara walimah.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Dengan sistem pengelolaan berbasis syariah, Simpanan Walimah
              membantu calon pengantin merencanakan pernikahan dengan lebih
              matang tanpa harus terbebani biaya besar secara mendadak.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <Image
              src="/img/layanan/Simpanan Walimah.jpeg"
              alt="Simpanan Walimah"
              width={900}
              height={620}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-lg shadow-md border border-gray-200 w-full h-auto object-cover"
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
              Keunggulan Simpanan Walimah
            </h2>
            <div className="w-16 h-1 bg-[#f08519] mx-auto mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Wallet className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Tabungan Terencana
              </h3>
              <p className="text-gray-500 text-sm">
                Membantu anggota menyiapkan dana pernikahan secara bertahap
                sesuai kemampuan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Calendar className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">
                Target Pernikahan
              </h3>
              <p className="text-gray-500 text-sm">
                Dana dapat dipersiapkan hingga mencapai target waktu pernikahan
                yang direncanakan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center">
              <Heart className="mx-auto text-[#194e9e] mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Sesuai Syariah</h3>
              <p className="text-gray-500 text-sm">
                Dikelola dengan sistem keuangan syariah yang aman dan
                transparan.
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
                  Mudharabah / Wadiah
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Setoran Awal
                </span>
                <p className="font-medium text-gray-700">
                  Mulai dari Rp20.000
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Setoran Rutin
                </span>
                <p className="font-medium text-gray-700">
                  Sesuai kemampuan anggota
                </p>
              </div>
              <div>
                <span className="font-semibold text-gray-500 uppercase text-xs tracking-widest">
                  Penarikan
                </span>
                <p className="font-medium text-gray-700">
                  Menjelang pelaksanaan pernikahan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
