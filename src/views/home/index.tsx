import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ArrowRight,
  Building2,
  HeartHandshake,
  Users,
  Newspaper,
} from "lucide-react";
import { beritaService } from "@/services/beritaService";
import { heroService } from "@/services/heroService";
import { Berita, Hero } from "@/types";
import Image from "next/image";

interface CounterProps {
  value: number;
  duration?: number;
  noFormat?: boolean;
}

const Counter: React.FC<CounterProps> = ({
  value,
  duration = 2000,
  noFormat = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{noFormat ? count.toString() : count.toLocaleString()}</span>;
};

const stats = [
  { value: 15, label: "Karyawan", icon: Users, noFormat: false },
  { value: 2, label: "Kantor Cabang", icon: Building2, noFormat: false },
  {
    value: 2000,
    label: "Anggota",
    icon: HeartHandshake,
    noFormat: false,
    suffix: "+",
  },
  { value: 2018, label: "Tahun Berdiri", icon: Calendar, noFormat: true },
];

export default function HomeView() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dataBerita, setDataBerita] = useState<Berita[]>([]);
  const [dataHero, setDataHero] = useState<Hero[]>([]);
  const [isLoadingNews, setIsLoadingNews] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const news = beritaService.getBerita();
        const heroes = heroService.getHero();
        setDataBerita(news);
        setDataHero(heroes);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoadingNews(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (dataHero.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % dataHero.length);
      }, 10000);
      return () => clearInterval(timer);
    }
  }, [dataHero.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % dataHero.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + dataHero.length) % dataHero.length);

  return (
    <div className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[350px] sm:h-[450px] md:h-[650px] w-full overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {dataHero.map((hero, index) => (
              <div key={index} className="min-w-full h-full relative">
                <Image
                  src="/img/assets/cover.jpeg"
                  alt={hero.judul}
                  fill
                  priority
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {dataHero.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all ${
                i === currentSlide ? "bg-[#f08519] w-8" : "bg-white/60 w-3"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ================= STATISTIK ================= */}
      <section className="pt-20 pb-2 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#1A1A1A] text-center uppercase tracking-tight">
            Perkembangan <span className="text-[#f08519]">KSPPS BHAPEDES</span>
            <div className="w-30 h-1 bg-[#194e9e] mx-auto mt-2" />
          </h2>
          <div className="grid grid-cols-4">
            {stats.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center py-4 md:py-10 relative"
                >
                  {/* Vertical Divider */}
                  {idx !== stats.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 md:h-24 w-px bg-gray-200" />
                  )}

                  {/* Icon */}
                  <div className="text-[#194e9e] h-10 md:h-24 flex items-center justify-center mb-1 md:mb-4">
                    <Icon
                      className="w-8 h-8 md:w-20 md:h-20"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Number */}
                  <div className="h-8 md:h-12 flex items-center justify-center mb-2">
                    <div className="text-xl md:text-4xl font-bold text-[#f08519]">
                      <Counter value={item.value} noFormat={item.noFormat} />
                      {item.suffix}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="h-8 md:h-12 flex items-start justify-center px-1">
                    <div className="text-[9px] md:text-base text-gray-500 font-medium uppercase tracking-wide leading-tight">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= TENTANG SINGKAT ================= */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* TEXT */}
          <div>
            <span className="text-[#f08519] font-semibold uppercase tracking-wider text-sm">
              Tentang Bhapedes
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-4 leading-tight">
              Lembaga Keuangan Mikro Syariah Berbasis Keanggotaan dan
              Kebersamaan
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              KSPPS Bhakti Pemuda Desa hadir sebagai mitra terpercaya dalam
              pemberdayaan ekonomi umat melalui layanan simpanan, pembiayaan
              usaha, serta pengelolaan dana sosial berbasis prinsip syariah.
            </p>

            {/* Gold accent bar */}
            <div className="w-12 h-1 bg-[#f08519] mt-2 mb-4 rounded" />

            <Link
              href="/tentang"
              className="inline-flex items-center gap-2 bg-[#194e9e] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#153f80] transition"
            >
              Baca Selengkapnya <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* IMAGE */}
          <div className="relative w-full max-w-2xl">
            {/* Gold accent corner */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#f08519] rounded-tl-md z-10" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-4 border-r-4 border-[#f08519] rounded-br-md z-10" />
            <Image
              src="/img/assets/Pelayanan.jpeg"
              alt="Kegiatan Bhapedes"
              width={200}
              height={200}
              className="rounded-md shadow-md w-full object-cover border border-gray-200"
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUK & LAYANAN ================= */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-widest text-[#f08519]">
              Apa yang Kami Tawarkan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
              Produk & Layanan
            </h2>
            <div className="w-20 h-1 bg-[#f08519] mx-auto mt-2 rounded" />
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm leading-relaxed">
              Berbagai layanan keuangan syariah yang dirancang untuk memenuhi
              kebutuhan anggota secara aman, transparan, dan sesuai prinsip
              Islam.
            </p>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1 - SIMPANAN PELAJAR */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/img/layanan/Simpanan Pelajar.jpeg"
                  alt="Simpanan Pelajar"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-left md:object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-8 h-1 bg-[#194e9e] rounded mb-3" />
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  Simpanan Pelajar
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Tabungan khusus pelajar berbasis syariah untuk membangun
                  kebiasaan menabung sejak dini dengan akad yang aman dan
                  transparan.
                </p>
                <Link
                  href="/produk/simpanan-pelajar"
                  className="inline-flex items-center gap-1 text-sm text-[#194e9e] font-semibold hover:text-[#f08519] transition"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 2 - SIMPANAN WALIMAH */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/img/layanan/Simpanan Walimah.jpeg"
                  alt="Simpanan Walimah"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-right md:object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-8 h-1 bg-[#194e9e] rounded mb-3" />
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  Simpanan Walimah
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Simpanan rencana pernikahan berbasis syariah yang membantu
                  anggota mempersiapkan biaya walimah dengan terencana dan
                  barokah.
                </p>
                <Link
                  href="/produk/simpanan-walimah"
                  className="inline-flex items-center gap-1 text-sm text-[#194e9e] font-semibold hover:text-[#f08519] transition"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 3 - GADAI */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/img/layanan/Gadai.jpeg"
                  alt="Gadai Syariah"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-left md:object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-8 h-1 bg-[#194e9e] rounded mb-3" />
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  Gadai Syariah
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Solusi pembiayaan cepat dengan jaminan barang berharga
                  menggunakan akad rahn yang sesuai prinsip syariah dan tanpa
                  bunga.
                </p>
                <Link
                  href="/produk/rahn-gadai"
                  className="inline-flex items-center gap-1 text-sm text-[#194e9e] font-semibold hover:text-[#f08519] transition"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* 4 - INVESTASI EMAS */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/img/layanan/Investasi Emas.jpeg"
                  alt="Investasi Emas"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-right md:object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="w-8 h-1 bg-[#194e9e] rounded mb-3" />
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
                  Investasi Emas
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  Layanan cicil dan tabung emas secara syariah sebagai instrumen
                  investasi yang aman, nilainya stabil, dan bebas riba.
                </p>
                <Link
                  href="/produk/invest-emas"
                  className="inline-flex items-center gap-1 text-sm text-[#194e9e] font-semibold hover:text-[#f08519] transition"
                >
                  Selengkapnya <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LAYANAN SOSIAL ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* IMAGE */}
            <div className="rounded-xl overflow-hidden shadow-md relative">
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#f08519] z-10" />
              <Image
                src="/img/assets/Layanan.jpeg"
                alt="Layanan Sosial Bhapedes"
                width={200}
                height={200}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-[#f08519] font-semibold uppercase tracking-wider text-sm">
                Layanan Sosial
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2 mb-2 leading-tight">
                Menebar Manfaat Melalui Pengelolaan Dana Sosial Umat
              </h2>
              <div className="w-18 h-1 bg-[#f08519] mb-6 rounded" />
              <p className="text-gray-700 leading-relaxed mb-2">
                Melalui unit Baitul Maal, KSPPS Bhapedes mengelola dan
                menyalurkan dana Zakat, Infaq, dan Sedekah secara amanah untuk
                mendukung pemberdayaan ekonomi masyarakat.
              </p>
              <ul className="text-gray-600 space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f08519] inline-block" />
                  Penyaluran Zakat Produktif
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f08519] inline-block" />
                  Program Bantuan Modal Usaha
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f08519] inline-block" />
                  Santunan Sosial & Pendidikan
                </li>
              </ul>
              <div className="flex gap-4 flex-wrap">
                {/* <Link
                  href="/layanan"
                  className="inline-flex items-center gap-2 bg-[#194e9e] text-white px-6 py-3 rounded font-semibold hover:bg-[#153f80] transition"
                >
                  Pelajari Lebih Lanjut <ArrowRight className="w-4 h-4" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BERITA ================= */}
      <section className="py-8 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12 border-b-2 border-[#194e9e] pb-4">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A]">
                Portal Berita
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1 text-[#194e9e] font-semibold hover:text-[#f08519] transition"
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* LEFT - BERITA */}
            <div className="lg:col-span-2">
              {isLoadingNews ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg border border-gray-100">
                  <div className="w-10 h-10 border-4 border-gray-200 border-t-[#194e9e] rounded-full animate-spin mb-4" />
                  <p className="text-gray-500 text-sm">Memuat berita...</p>
                </div>
              ) : dataBerita.length > 0 ? (
                <>
                  {/* Featured News */}
                  <article className="group pb-2 border-b border-gray-200">
                    <div className="overflow-hidden rounded-lg relative">
                      {/* Gold badge */}
                      <div className="absolute top-4 left-4 z-10 bg-[#f08519] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Terbaru
                      </div>
                      <Image
                        src={dataBerita[0].gambar}
                        alt={dataBerita[0].judul}
                        width={200}
                        height={200}
                        className="w-full h-[380px] object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>

                    <div className="mt-6">
                      <p className="text-sm text-gray-400">
                        {dataBerita[0].waktu}
                      </p>

                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#194e9e] transition leading-snug mt-1">
                        <Link href={`/berita/${dataBerita[0].slug}`}>
                          {dataBerita[0].judul}
                        </Link>
                      </h3>

                      <p className="text-gray-600 leading-relaxed mt-3">
                        {dataBerita[0].ringkasan}
                      </p>
                    </div>
                  </article>

                  {/* Smaller News */}
                  <div className="mt-2 divide-y divide-gray-100">
                    {dataBerita.slice(1).map((item) => (
                      <article key={item.id} className="flex gap-6 py-4 group">
                        <div className="w-40 h-28 flex-shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={item.gambar}
                            alt={item.judul}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        </div>

                        <div>
                          <p className="text-xs text-gray-400 mb-1">
                            {item.waktu}
                          </p>

                          <h4 className="font-bold text-gray-800 group-hover:text-[#194e9e] transition leading-snug">
                            <Link href={`/berita/${item.slug}`}>
                              {item.judul}
                            </Link>
                          </h4>

                          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                            {item.ringkasan}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg border border-gray-100 text-center px-6">
                  <Newspaper className="w-12 h-12 text-gray-200 mb-4" />
                  <p className="text-gray-500 font-medium">
                    Belum ada berita terbaru
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Silakan kembali lagi nanti untuk informasi terbaru.
                  </p>
                </div>
              )}
            </div>

            {/* RIGHT - INSTAGRAM */}
            <div className="bg-white border border-gray-100 rounded-lg p-6 h-fit shadow-sm">
              <div className="aspect-[3/5] w-full overflow-hidden rounded-md border border-gray-100">
                <iframe
                  src="https://www.instagram.com/p/DUhtp-6EqO8/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  className="w-full h-full"
                />
              </div>
              <Link
                href="https://www.instagram.com/koperasisyariahbhapedes?igsh=MXU2N3ltbjZjOTBoaQ=="
                target="_blank"
                className="mt-4 inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-[#194e9e] text-white font-semibold rounded-md hover:bg-[#153f80] transition shadow-sm"
              >
                Kunjungi Instagram Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-8 bg-[#194e9e] overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f08519]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl" />

        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-[#f08519]" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#f08519] font-semibold uppercase tracking-widest text-sm">
            Bergabung Bersama Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mt-3">
            Ingin Mengelola Keuangan Sesuai Prinsip Syariah?
          </h2>
          <p className="mt-6 text-green-100 text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah bersama ribuan anggota KSPPS Bhapedes dalam membangun
            kemandirian ekonomi umat yang berkah dan berkelanjutan.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-[#f08519] text-white px-8 py-4 rounded-md font-bold hover:bg-[#c97017] transition shadow-lg"
            >
              Daftar Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
