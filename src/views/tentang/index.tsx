import React from "react";
import Link from "next/link";

export default function TentangView() {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-20 bg-[#2E7D32] overflow-hidden">
        {/* Decorative Islamic Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="islamic-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="white" strokeWidth="1" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamic-grid)" />
          </svg>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0A500]/20 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-[#F0A500] font-semibold uppercase tracking-widest text-sm mb-4">
              Tentang Kami
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-tight">
              Membangun Ekonomi Umat
              <br />
              Berbasis <span className="text-[#F0A500]">Syariah</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-green-50/90 leading-relaxed">
              KSPPS Bhapedes adalah mitra terpercaya dalam pemberdayaan ekonomi melalui prinsip amanah, transparansi, dan keberlanjutan.
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
            <div className="w-16 h-1 bg-[#F0A500] mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {/* KOLOM GAMBAR */}
            <div className="md:col-span-1">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#F0A500] z-10" />
                <img
                  src="/img/assets/kantor.png"
                  alt="Kantor KSPPS Bhapedes"
                  className="w-full object-cover aspect-[4/5] md:aspect-auto h-full"
                />
              </div>

              <div className="mt-6 bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
                <div className="text-2xl font-bold text-gray-700">Sejak 2018</div>
                <p className="text-sm text-gray-500 mt-2">
                  Melayani masyarakat dengan prinsip amanah dan profesional berdasarkan syariat Islam.
                </p>
              </div>
            </div>

            {/* KOLOM TEKS */}
            <div className="md:col-span-2 text-gray-700 leading-relaxed space-y-6 text-lg">

              <p>
                <strong>KSPPS Bhapedes (Bhakti Pemuda Desa)</strong> merupakan Koperasi Simpan Pinjam dan Pembiayaan Syariah
                yang didirikan pada tahun 2018 sebagai bentuk ikhtiar bersama dalam
                membangun sistem keuangan yang adil dan berlandaskan prinsip syariah.
                Sejak awal berdiri, Bhapedes berkomitmen menjadi mitra terpercaya
                bagi anggota dalam mengelola keuangan secara aman dan bertanggung jawab.
              </p>
              <p>
                Dengan mengedepankan nilai amanah, transparansi, dan profesionalitas,
                kami menyediakan layanan simpanan dan pembiayaan yang sesuai dengan
                ketentuan syariah. Seluruh aktivitas operasional diawasi oleh
                Dewan Pengawas Syariah guna memastikan setiap transaksi
                selaras dengan prinsip hukum Islam.
              </p>

              <p>
                Hingga saat ini, KSPPS Bhapedes telah berkembang untuk melayani
                masyarakat luas serta didukung oleh sumber daya
                insani yang kompeten dan berintegritas. Kami terus meningkatkan
                kualitas pelayanan untuk memberikan manfaat yang luas bagi anggota
                dan pemberdayaan ekonomi umat.
              </p>

              <p>
                Sebagai lembaga keuangan berbasis koperasi, kami percaya bahwa
                kebersamaan dan partisipasi aktif anggota merupakan kekuatan utama
                dalam membangun kemandirian dan memajukan kesejahteraan bersama.
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
          <div className="w-16 h-1 bg-[#F0A500] mt-4 rounded" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 sm:gap-12 relative z-10">
          <div className="bg-[#2E7D32] p-6 sm:p-10 lg:p-12 rounded-xl text-white shadow-xl relative overflow-hidden">
            {/* Gold Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#F0A500]" />
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              Visi
            </h3>
            <p className="text-xl lg:text-2xl leading-relaxed font-medium">
              "Menjadi koperasi syariah unggulan yang memberdayakan masyarakat melalui layanan keuangan yang amanah, profesional, dan inovatif."
            </p>
            <div className="absolute -bottom-10 -right-10 opacity-10">
              {/* Optional background icon/shape */}
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
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
                { title: "Pelayanan Prima", desc: "Memberikan layanan keuangan syariah yang prima, cepat, dan transparan." },
                { title: "Pemberdayaan Ekonomi", desc: "Meningkatkan kesejahteraan anggota melalui produk simpanan edukatif dan pembiayaan produktif." },
                { title: "Kepatuhan Syariah", desc: "Menjalankan seluruh aktivitas bisnis sesuai dengan tuntunan Al-Qur'an dan As-Sunnah." },
                { title: "Sinergi Umat", desc: "Membangun kemitraan strategis untuk memperkuat jaringan ekonomi syariah." }
              ].map((misi, i) => (
                <li key={i} className="flex gap-5">
                  <div className="text-[#1A1A1A] pt-0.5 items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{misi.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{misi.desc}</p>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">
              Struktur Organisasi
            </h2>
            <div className="w-20 h-1 bg-[#F0A500] mx-auto mt-3 rounded" />
            <p className="text-gray-500 max-w-2xl mx-auto mt-4">
              KSPPS Bhapedes dikelola oleh SDM profesional serta diawasi
              oleh Dewan Pengawas Syariah untuk menjamin kepatuhan sistem.
            </p>
          </div>
          <div className="relative flex flex-col items-center">

            {/* DPS */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center w-64">
              <img
                src="https://plus.unsplash.com/premium_photo-1769792788002-af9ec5e40c36?q=80&w=700&auto=format&fit=crop"
                className="w-20 h-20 rounded-full object-cover border-4 border-[#2E7D32]/20 mb-3"
              />
              <h4 className="font-bold text-gray-800">Dr. KH. M. Syukron, M.A.</h4>
              <p className="text-[#2E7D32] text-sm font-semibold">Ketua DPS</p>
            </div>
            {/* LINE */}
            <div className="w-px h-10 bg-gray-300 my-2" />

            {/* KETUA */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center w-64">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 mb-3"
              />
              <h4 className="font-bold text-gray-800">H. Ahmad Fauzi, S.E.</h4>
              <p className="text-[#F0A500] text-sm font-semibold">Ketua Pengurus</p>
            </div>
            {/* LINE */}
            <div className="w-px h-10 bg-gray-300 my-2" />

            {/* SEKRETARIS & BENDAHARA */}
            <div className="relative w-full max-w-xl">
              {/* horizontal line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gray-300" />
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" />
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition h-40 min-h-[220px]">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 mx-auto mb-3"
                    />
                    <h4 className="font-bold text-gray-800">Ir. Bambang Wijaya</h4>
                    <p className="text-[#F0A500] text-sm font-semibold">Sekretaris</p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-px h-6 bg-gray-300" />
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md transition h-40 min-h-[220px]">
                    <img
                      src="https://images.unsplash.com/photo-1584339312444-6952d098e152"
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 mx-auto mb-3"
                    />
                    <h4 className="font-bold text-gray-800">Hj. Siti Aminah, M.Ak.</h4>
                    <p className="text-[#F0A500] text-sm font-semibold">Bendahara</p>
                  </div>
                </div>
              </div>
            </div>
            {/* LINE */}
            <div className="w-px h-12 bg-gray-300 my-4" />

            {/* MANAJEMEN */}
            <div className="grid md:grid-cols-2 gap-8 max-w-xl w-full">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#2E7D32]"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Budi Santoso</h4>
                  <p className="text-[#2E7D32] text-sm font-semibold">Manajer Utama</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1729201025889-9d2a20fd5afd"
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#2E7D32]"
                />
                <div>
                  <h4 className="font-bold text-gray-800">Rina Kusuma</h4>
                  <p className="text-[#2E7D32] text-sm font-semibold">Manajer Operasional</p>
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
              <h3 className="text-2xl font-semibold text-[#1b5e20]">
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
                <span className="font-medium">Badan Hukum</span>
                <span className="hidden sm:inline">:</span>
                <span>No. 123/BH/KOP/1997</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[220px_20px_1fr] sm:items-start gap-1 sm:gap-0">
                <span className="font-medium">Nomor Induk Koperasi (NIK)</span>
                <span className="hidden sm:inline">:</span>
                <span>0000000000000</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[220px_20px_1fr] sm:items-start gap-1 sm:gap-0">
                <span className="font-medium">Audit & Pengawasan</span>
                <span className="hidden sm:inline">:</span>
                <span>KAP & Dewan Pengawas Syariah</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[220px_20px_1fr] sm:items-start gap-1 sm:gap-0">
                <span className="font-medium">Izin Operasional</span>
                <span className="hidden sm:inline">:</span>
                <span>Kementerian Koperasi & UKM RI</span>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
