import React, { useState, useEffect } from "react";
import {
  Heart,
  Handshake,
  Users,
  Sprout,
  BookOpen,
  Stethoscope,
  Briefcase,
  Gift,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  AlertCircle,
  Import,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ziswafItems = [
  {
    title: "Zakat",
    desc: "Tunaikan kewajiban zakat mal maupun zakat fitrah Anda untuk menyucikan harta dan membantu asnaf yang membutuhkan.",
    icon: <CheckCircle2 className="mx-auto text-[#194e9e] mb-4" size={32} />,
  },
  {
    title: "Infaq",
    desc: "Berikan kontribusi terbaik untuk kemaslahatan umat melalui program-program sosial yang berkelanjutan.",
    icon: <Heart className="mx-auto text-[#194e9e] mb-4" size={32} />,
  },
  {
    title: "Shadaqah",
    desc: "Amalan sunnah yang membawa keberkahan, mulai dari senyuman hingga bantuan materi bagi sesama.",
    icon: <Gift className="mx-auto text-[#194e9e] mb-4" size={32} />,
  },
  {
    title: "Wakaf",
    desc: "Investasi akhirat dengan manfaat yang terus mengalir melalui pengelolaan aset produktif untuk umat.",
    icon: <Sprout className="mx-auto text-[#194e9e] mb-4" size={32} />,
  },
];

const socialPrograms = [
  {
    title: "Pendidikan Umat",
    desc: "Beasiswa dan sarana belajar bagi anak-anak dhuafa berprestasi untuk masa depan yang lebih baik.",
    icon: <BookOpen className="text-[#194e9e] mb-4" size={40} />,
    stats: "500+ Penerima Manfaat",
  },
  {
    title: "Kesehatan Terpadu",
    desc: "Layanan kesehatan gratis dan subsidi bagi anggota dan masyarakat yang membutuhkan.",
    icon: <Stethoscope className="text-[#194e9e] mb-4" size={40} />,
    stats: "20+ Lokasi Layanan",
  },
  {
    title: "Ekonomi Produktif",
    desc: "Pemberdayaan UMKM melalui modal kerja dan pendampingan usaha berbasis komunitas.",
    icon: <Briefcase className="text-[#194e9e] mb-4" size={40} />,
    stats: "100+ UMKM Binaan",
  },
  {
    title: "Bantuan Kemanusiaan",
    desc: "Tanggap darurat bencana dan bantuan sosial mendesak bagi korban bencana alam.",
    icon: <AlertCircle className="text-[#194e9e] mb-4" size={40} />,
    stats: "Quick Response Team",
  },
];

const gallerySlides = [
  {
    image: "/Image/layanansos.jpg",
    title: "Penyaluran Bantuan Sembako Berkah",
    tag: "Featured Activity",
    desc: "Program rutin penyaluran bantuan pangan bagi kaum dhuafa dan lansia di wilayah sekitar.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop",
    title: "Pemberdayaan Ekonomi Dhuafa",
    tag: "Social Impact",
    desc: "Pemberian modal usaha dan pendampingan bagi masyarakat kurang mampu untuk kemandirian ekonomi.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
    title: "Program Ramadhan Berbagi",
    tag: "Seasonal Program",
    desc: "Kebersamaan dalam berbagi kebahagiaan di bulan suci melalui buka puasa bersama dan santunan.",
  },
];

export default function LayananView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % gallerySlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length,
    );

  return (
    <div className="bg-white min-h-screen">
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

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-[#f08519] font-semibold uppercase tracking-widest text-sm mb-4">
              Layanan Sosial
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Peduli Sesama Bersama Bhapedes Melalui{" "}
              <span className="text-[#f08519]">ZISWAF</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-green-50/90 leading-relaxed">
              Wujudkan kepedulian Anda bersama KSPPS BHAPEDES melalui
              pengelolaan Zakat, Infaq, Shadaqah, dan Wakaf yang profesional dan
              tepat sasaran.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ZISWAF GRID ================= */}
      <section className="py-16 bg-[#F8FAF8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Program ZISWAF
            </h2>
            <div className="w-16 h-1 bg-[#f08519] mx-auto mt-4 rounded" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {ziswafItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm text-center"
              >
                {item.icon}
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAM PEMBERDAYAAN ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A]">
              Program Pemberdayaan
            </h2>
            <div className="w-16 h-1 bg-[#194e9e] mx-auto mt-4 rounded" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Komitmen kami dalam menyalurkan dana sosial melalui program yang
              memberikan dampak nyata dan berkelanjutan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialPrograms.map((program, idx) => (
              <div
                key={idx}
                className="relative bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                <div>
                  {program.icon}
                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3">
                    {program.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {program.desc}
                  </p>
                  <div className="flex justify-between items-center text-sm border-t border-gray-100 pt-4">
                    <span className="text-gray-500">Capaian Program</span>
                    <span className="font-bold text-[#194e9e]">
                      {program.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DOCUMENTATION GALLERY ================= */}
      <section className="py-20 bg-[#F8FAF8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
              Dokumentasi &{" "}
              <span className="text-[#f08519]">Dampak Sosial</span>
            </h2>
            <div className="w-16 h-1 bg-[#194e9e] mx-auto mt-2 mb-4 rounded" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Setiap rupiah yang Anda amanahkan dikelola dengan transparan untuk
              memberikan manfaat nyata bagi yang membutuhkan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Featured Photo Slider */}
            <div className="md:col-span-2 relative overflow-hidden rounded-xl shadow-lg h-[400px] md:h-[500px] group border border-gray-200">
              <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {gallerySlides.map((slide, idx) => (
                  <div key={idx} className="min-w-full h-full relative">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <span className="inline-flex items-center px-3 py-1 bg-[#194e9e] text-xs font-bold rounded-full mb-4 uppercase tracking-wider text-white">
                        {slide.tag}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-gray-200 text-sm max-w-lg">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>

              {/* Slider Indicators */}
              <div className="absolute bottom-6 right-8 z-10 flex gap-2">
                {gallerySlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${i === currentSlide ? "bg-[#f08519] w-6" : "bg-white/40 w-2"}`}
                  />
                ))}
              </div>
            </div>

            {/* Side Photos */}
            <div className="flex flex-col gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-md h-[188px] md:h-[238px] border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                  alt="Edukasi Anak Dhuafa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold">
                    Program Pendidikan & Literasi Umat
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-md h-[188px] md:h-[238px] border border-gray-200">
                <Image
                  src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop"
                  alt="Layanan Kesehatan"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                  <p className="text-white font-bold">
                    Pemeriksaan Kesehatan Gratis Berkala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW TO GIVE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">
                Cara Menyalurkan Donasi
              </h2>
              <div className="w-16 h-1 bg-[#f08519] mb-8 rounded" />
              <div className="space-y-6">
                {[
                  {
                    title: "Kunjungi Kantor Cabang",
                    desc: "Anda dapat langsung datang ke kantor cabang KSPPS BHAPEDES terdekat di kota Anda.",
                  },
                  {
                    title: "Transfer Bank",
                    desc: "Kemudahan berdonasi melalui transfer antar bank ke rekening resmi Baitul Maal KSPPS BHAPEDES.",
                  },
                  {
                    title: "Layanan Jemput Zakat",
                    desc: "Tim kami siap menjemput donasi Anda untuk wilayah tertentu demi kenyamanan Anda.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#194e9e] text-white flex items-center justify-center font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="bg-[#194e9e] p-10 rounded-xl shadow-lg text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Users size={120} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Konsultasi ZISWAF</h3>
              <p className="text-green-100 mb-8 leading-relaxed">
                Bingung cara menghitung zakat mal atau ingin mengetahui lebih dalam tentang program wakaf produktif kami? Hubungi kami
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Handshake size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-green-200 uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="font-bold text-md">0812-3456-7890</p>
                  </div>
                </div>
                <Link
                  href="/kontak"
                  className="inline-block w-full text-center py-3 bg-[#f08519] hover:bg-[#d69300] text-white font-bold rounded-lg transition duration-300"
                >
                  Hubungi Sekarang
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* ================= QUICK STATS ================= */}
      {/* <section className="py-12 bg-[#F8FAF8] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Donatur Aktif", val: "2,500+" },
              { label: "Penerima Manfaat", val: "10,000+" },
              { label: "Program Berjalan", val: "15+" },
              { label: "Kota/Kabupaten", val: "12" }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-3xl font-extrabold text-[#194e9e]">{stat.val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
