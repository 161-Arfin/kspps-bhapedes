import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function TentangView() {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-10 bg-[#194e9e] overflow-hidden">
        {/* Decorative Islamic Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="islamic-grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M50 0 L100 50 L50 100 L0 50 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-grid)" />
          </svg>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f08519]/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-[#f08519] font-semibold uppercase tracking-widest text-sm mb-4">
              Tentang Kami
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-tight">
              Membangun Ekonomi Umat
              <br />
              Berbasis <span className="text-[#f08519]">Syariah</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-green-50/90 leading-relaxed">
              KSPPS Bhapedes adalah mitra terpercaya dalam pemberdayaan ekonomi
              melalui prinsip amanah, transparansi, dan keberlanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROFIL & MAKNA ================= */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Profil KSPPS Bhapedes
            </h2>
            <div className="w-16 h-1 bg-[#f08519] mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* KOLOM GAMBAR */}
            <div className="md:col-span-1">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#f08519] z-10" />
                <Image
                  src="/img/assets/Foto bersama.jpeg"
                  alt="Kantor KSPPS Bhapedes"
                  width={900}
                  height={700}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto object-contain md:object-cover"
                />
              </div>

              <div className="mt-6 bg-white border border-gray-100 rounded-lg p-6 shadow-lg">
                <div className="text-2xl font-bold text-gray-700">
                  Sejak 2018
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Melayani masyarakat dengan prinsip amanah dan profesional
                  berdasarkan syariat Islam.
                </p>
              </div>
            </div>

            {/* KOLOM TEKS */}
            <div className="md:col-span-2 text-gray-700 leading-relaxed space-y-6 text-lg">
              <p>
                <strong>
                  Koperasi Simpan Pinjam dan Pembiayaan Syariah (KSPPS) Bhakti
                  Pemuda Desa (Bhapedes)
                </strong>{" "}
                merupakan lembaga keuangan syariah yang beroperasi di wilayah
                Kepulauan Kangean, khususnya Cabang Arjasa dan Cabang Sepanjang.
                Bhapedes hadir untuk memperluas akses keuangan syariah bagi
                masyarakat kepulauan serta mendukung pertumbuhan ekonomi mikro
                dan pemberdayaan pelaku UMKM.
              </p>
              <p>
                Sejak memperoleh izin operasional pada 09 Mei 2018 berdasarkan
                SK Nomor 0083/BH/M.KUKM.2/V/2018, Bhapedes berkomitmen membangun
                sistem keuangan syariah yang amanah, profesional, dan memberikan
                manfaat bagi masyarakat. Selain menjalankan fungsi layanan
                simpanan dan pembiayaan, Bhapedes juga aktif dalam kegiatan
                sosial, pendidikan, serta kegiatan keagamaan di wilayah
                Kepulauan Kangean.
              </p>
              <p>
                KSPPS Bhapedes didirikan atas inisiatif pemuda desa Kepulauan
                Kangean yang memiliki semangat untuk menghadirkan alternatif
                layanan keuangan berbasis syariah bagi masyarakat. Nama Bhapedes
                sendiri merupakan akronim dari Bhakti Pemuda Desa yang
                mencerminkan semangat pengabdian dalam membangun kemandirian
                ekonomi masyarakat.
              </p>
              <p>
                Dalam menjalankan operasionalnya, Bhapedes melayani kebutuhan
                simpanan dan pembiayaan anggota dengan prinsip kehati-hatian,
                transparansi, serta kepatuhan terhadap prinsip syariah. Layanan
                Bhapedes difokuskan pada masyarakat mikro dan pelaku UMKM di
                wilayah Kepulauan Kangean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISI & MISI ================= */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 flex items-center justify-center flex-col text-center">
          <h2 className="text-3xl font-bold text-[#1A1A1A]">
            Visi & Misi KSPPS BHAPEDES
          </h2>
          <div className="w-16 h-1 bg-[#f08519] mt-4 rounded" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 relative z-10">
          <div className="bg-[#194e9e] p-6 sm:p-10 lg:p-12 rounded-xl text-white shadow-xl relative overflow-hidden">
            {/* Gold Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#f08519]" />
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              Visi
            </h3>
            <p className="text-xl lg:text-2xl leading-relaxed font-medium">
              "Menjadi lembaga keuangan syariah yang profesional dan terpercaya
              di Kepulauan Kangean dalam membangun masyarakat produktif dan
              diberkahi Allah SWT."
            </p>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              {/* Optional background icon/shape */}
              <svg
                width="200"
                height="200"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-10 lg:p-12 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-[#1A1A1A] mb-8 flex items-center gap-3">
              Misi
            </h3>
            <ul className="space-y-6">
              {[
                {
                  desc: "Mengelola layanan keuangan syariah secara profesional, amanah, dan berkelanjutan.",
                },
                {
                  desc: "Mendorong pemberdayaan ekonomi masyarakat Kepulauan Kangean melalui penguatan pembiayaan produktif dan pengembangan UMKM.",
                },
                {
                  desc: "Membangun budaya kerja yang berintegritas, disiplin, dan berorientasi pada pelayanan prima.",
                },
                {
                  desc: "Mengembangkan kualitas sumber daya insani dan sistem lembaga yang adaptif terhadap perkembangan teknologi dan tantangan zaman.",
                },
                {
                  desc: "Menjalankan prinsip-prinsip syariah dalam seluruh aktivitas dan tata kelola lembaga.",
                },
              ].map((misi, i) => (
                <li key={i} className="flex gap-5">
                  <div className="text-gray-700 pt-0.5 items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {misi.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STRUKTUR ORGANISASI ================= */}
      <section className="py-12 sm:py-16 lg:py-24 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* TITLE */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Struktur Organisasi
            </h2>
            <div className="w-20 h-1 bg-[#f08519] mx-auto mt-3 rounded" />
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              KSPPS Bhapedes dikelola oleh SDM profesional serta diawasi oleh
              Dewan Pengawas Syariah untuk menjamin kepatuhan sistem.
            </p>
          </div>

          <div className="relative flex flex-col items-center">
            {/* DPS */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-40 sm:w-52 md:w-64 p-4 sm:p-5 md:p-6 flex flex-col items-center text-center">
              <img
                src="/img/struktur/jondy.jpeg"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#194e9e]/20 mb-2 sm:mb-3"
                loading="lazy"
                alt="Ketua DPS"
              />
              <h4 className="font-bold text-sm sm:text-base text-gray-800">
                Supriyadi, S.IP., M.IP
              </h4>
              <p className="text-[#194e9e] text-xs sm:text-sm font-semibold">
                Ketua Dewan Pengawas
              </p>
            </div>

            {/* LINE */}
            <div className="w-px h-8 bg-gray-300" />
            {/* KETUA */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-40 sm:w-52 md:w-64 p-4 sm:p-5 md:p-6 flex flex-col items-center text-center">
              <img
                src="/img/struktur/alex.jpeg"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-gray-100 mb-2 sm:mb-3"
                loading="lazy"
                alt="Ketua Pengurus"
              />
              <h4 className="font-bold text-sm sm:text-base text-gray-800">
                Alex Budiono, S.Ei
              </h4>
              <p className="text-[#f08519] text-xs sm:text-sm font-semibold">
                Ketua Pengurus
              </p>
            </div>

            {/* LINE */}
            <div className="w-px h-8 bg-gray-300" />

            <div className="relative w-full max-w-6xl">
              {/* horizontal line spanning semua 3 kolom */}
              <div className="absolute top-0 w-full h-px bg-gray-300" />
              <div className="grid grid-cols-3 gap-1 sm:gap-4">
                {/* ================= SEKRETARIS ================= */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" />
                  {/* Sekretaris 2 */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-[96px] sm:w-48 md:w-50 h-[132px] sm:h-48 md:h-46 p-2 sm:p-4 flex flex-col items-center text-center">
                    <img
                      src="/img/struktur/ica.jpeg"
                      className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-gray-100 mb-2"
                      loading="lazy"
                      alt="Azizah"
                    />
                    <h4 className="font-bold text-gray-800 text-[11px] sm:text-base leading-tight min-h-[46px] sm:min-h-[40px] flex items-center justify-center">
                      Azizah Triningsih, A.Md, Keb
                    </h4>
                    <p className="text-[#f08519] text-[10px] sm:text-sm font-semibold">
                      Sekretaris
                    </p>
                  </div>
                </div>

                {/* ================= ANGGOTA ================= */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-110 bg-gray-300" />
                  {/* horizontal line antara 2 anggota */}
                  <div className="relative w-full flex flex-col items-center">
                    <div className="absolute top-0 left-0 w-full h-px bg-gray-300" />
                    <div className="grid grid-cols-2 gap-4 sm:gap-32 w-max md:w-full">
                      {/* Anggota 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-gray-300" />
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-[96px] sm:w-48 md:w-50 h-[132px] sm:h-48 md:h-46 p-2 sm:p-4 flex flex-col items-center text-center">
                          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-4 border-gray-100 mb-2 bg-gray-100 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-gray-800 text-[11px] sm:text-base leading-tight min-h-[46px] sm:min-h-[40px] flex items-center justify-center">
                            Atun Istiana, S.Pd
                          </h4>
                          <p className="text-[#f08519] text-[10px] sm:text-sm font-semibold">
                            Anggota
                          </p>
                        </div>
                      </div>

                      {/* Anggota 2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-px h-6 bg-gray-300" />
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-[96px] sm:w-48 md:w-50 h-[132px] sm:h-48 md:h-46 p-2 sm:p-4 flex flex-col items-center text-center">
                          <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full border-4 border-gray-100 mb-2 bg-gray-100 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                          </div>
                          <h4 className="font-bold text-gray-800 text-[11px] sm:text-base leading-tight min-h-[46px] sm:min-h-[40px] flex items-center justify-center">
                            Khalifaturrahma
                          </h4>
                          <p className="text-[#f08519] text-[10px] sm:text-sm font-semibold">
                            Anggota
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ================= BENDAHARA ================= */}
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" />
                  <div className="flex flex-col items-center gap-0">
                    {/* Bendahara 1 */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-[96px] sm:w-48 md:w-50 h-[132px] sm:h-48 md:h-46 p-2 sm:p-4 flex flex-col items-center text-center">
                      <img
                        src="/img/struktur/wiwin.jpeg"
                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-gray-100 mb-2"
                        loading="lazy"
                        alt="Wiwin"
                      />
                      <h4 className="font-bold text-gray-800 text-[11px] sm:text-base leading-tight min-h-[46px] sm:min-h-[40px] flex items-center justify-center">
                        Wiwin Erliyana, S.E
                      </h4>
                      <p className="text-[#f08519] text-[10px] sm:text-sm font-semibold">
                        Bendahara
                      </p>
                    </div>

                    {/* LINE between Bendahara and Anggota Bendahara */}
                    <div className="w-px h-4 bg-gray-300" />

                    {/* Anggota Bendahara */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 w-[96px] sm:w-48 md:w-50 h-[132px] sm:h-48 md:h-46 p-2 sm:p-4 flex flex-col items-center text-center">
                      <img
                        src="/img/struktur/iin.jpeg"
                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover border-4 border-gray-100 mb-2"
                        loading="lazy"
                        alt="Nuril"
                      />
                      <h4 className="font-bold text-gray-800 text-[11px] sm:text-base leading-tight min-h-[46px] sm:min-h-[40px] flex items-center justify-center">
                        Wirdatul Inayah, S.P
                      </h4>
                      <p className="text-[#f08519] text-[10px] sm:text-sm font-semibold">
                        Bendahara
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEGALITAS & IZIN ================= */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="border border-gray-300 bg-gray-50 p-10">
            <div className="mb-8 border-b border-gray-300 pb-4">
              <h3 className="text-2xl font-bold text-[#194e9e]">
                Legalitas & Kepatuhan
              </h3>
              <p className="text-gray-600 mt-2">
                KSPPS Bhapedes beroperasi secara resmi dan terdaftar sesuai
                ketentuan hukum yang berlaku di Indonesia serta menjalankan
                prinsip syariah dalam setiap kegiatan operasionalnya.
              </p>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-[220px_20px_1fr] sm:items-start gap-1 sm:gap-0">
                <span className="font-bold">Badan Hukum</span>
                <span className="hidden sm:inline">:</span>
                <span>AHU-0000464.AH.01.39.TAHUN 2023</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[220px_20px_1fr] sm:items-start gap-1 sm:gap-0">
                <span className="font-bold">Tanggal Pengesahan</span>
                <span className="hidden sm:inline">:</span>
                <span>10 Februari 2023</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[220px_20px_1fr] sm:items-start gap-1 sm:gap-0">
                <span className="font-bold">Otoritas</span>
                <span className="hidden sm:inline">:</span>
                <span>Kementerin Hukum dan HAM RI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
