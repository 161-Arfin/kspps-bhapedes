import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  ArrowRight,
  PlayCircle,
  Newspaper,
  Tag,
  Heart,
  Loader2
} from "lucide-react";
import { beritaService } from "@/services/beritaService";

interface NewsItem {
  id: number;
  slug: string;
  title: string;
  date: string;
  time: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  featured?: boolean;
}

export default function BeritaView() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = () => {
      const data = beritaService.getBerita();
      const mappedData: NewsItem[] = data
        .filter(item => item.status === true) // Hanya tampilkan yang dipublikasikan
        .map((item, index) => ({
          id: item.id,
          slug: item.slug,
          title: item.judul,
          date: item.waktu,
          time: "WIB", // Waktu detail tidak disimpan di model saat ini
          author: item.pengunggah,
          category: item.kategori,
          image: item.gambar,
          excerpt: item.ringkasan,
          featured: index < 3 // Tandai 3 berita pertama sebagai featured/headline
        }));
      setNewsData(mappedData);
      setIsLoading(false);
    };

    fetchNews();
  }, []);
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const newsSectionRef = React.useRef<HTMLDivElement>(null);

  const featuredNews = newsData.filter(item => item.featured);
  const latestNews = newsData.filter(item => !item.featured);

  // Pagination Logic
  const totalPages = Math.ceil(latestNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = latestNews.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (newsSectionRef.current) {
      const yOffset = -100; // Offset for navbar
      const element = newsSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % featuredNews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredNews.length]);

  if (isLoading) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 text-[#194e9e] animate-spin mb-4" />
        <p className="text-gray-500 font-medium">Memuat berita...</p>
      </div>
    );
  }

  if (newsData.length === 0) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Newspaper className="w-10 h-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Belum Ada Berita</h2>
        <p className="text-gray-500 max-w-md">Saat ini belum ada berita atau pengumuman yang dipublikasikan. Silakan cek kembali nanti.</p>
        <Link href="/" className="mt-8 text-[#194e9e] font-bold hover:underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f8f9fa] pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= UPDATES TICKER ================= */}
        <div className="bg-white border-y border-gray-200 py-3 mb-8 flex items-center gap-4 overflow-hidden relative">
          <div className="bg-[#194e9e] text-white px-3 py-2 text-xs font-bold uppercase whitespace-nowrap z-10 hidden lg:block">
            Terbaru
          </div>
          <div className="flex-grow overflow-hidden relative h-5">
            <div className="absolute flex gap-12 whitespace-nowrap animate-marquee hover:pause">
              {newsData.map(item => (
                <Link key={item.id} href={`/berita/${item.slug}`} className="text-sm text-gray-700 hover:text-[#f08519] flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full" /> {item.title}
                </Link>
              ))}
              {/* Duplicate for seamless loop */}
              {newsData.map(item => (
                <Link key={`dup-${item.id}`} href={`/berita/${item.id}`} className="text-sm text-gray-700 hover:text-[#f08519] flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full" /> {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* ================= MAIN CONTENT (HEADLINE & FEED) ================= */}
          <div className="lg:col-span-2 space-y-12">

            {/* FEATURED CAROUSEL */}
            <section className="relative h-[450px] rounded-sm overflow-hidden group shadow-lg border border-gray-200">
              <div
                className="flex transition-transform duration-1000 ease-in-out h-full"
                style={{ transform: `translateX(-${currentHeadline * 100}%)` }}
              >
                {featuredNews.map((slide) => (
                  <div key={slide.id} className="min-w-full h-full relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                      <span className="bg-[#f08519] text-xs font-bold px-2 py-1 uppercase rounded-sm mb-4 inline-block tracking-wider">
                        {slide.category}
                      </span>
                      <h2 className="text-xl md:text-4xl font-extrabold mb-4 leading-tight transition underline-offset-4 decoration-[#f08519] hover:underline">
                        <Link href={`/berita/${slide.slug}`}>{slide.title}</Link>
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {slide.date}</span>
                        <span className="flex items-center gap-1"><User size={14} /> {slide.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Controls */}
              <button
                onClick={() => setCurrentHeadline((prev) => (prev - 1 + featuredNews.length) % featuredNews.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 text-white transition opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => setCurrentHeadline((prev) => (prev + 1) % featuredNews.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-2 text-white transition opacity-0 group-hover:opacity-100"
              >
                <ChevronRight />
              </button>

              {/* Indicators */}
              <div className="absolute top-6 right-6 flex flex-col gap-2">
                {featuredNews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentHeadline(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === currentHeadline ? "bg-[#f08519] h-6" : "bg-white/60"}`}
                  />
                ))}
              </div>
            </section>

            {/* LATEST NEWS REED */}
            <section ref={newsSectionRef} className="scroll-mt-24">
              <div className="flex items-center justify-between border-b-2 border-gray-200 pb-3">
                <h3 className="text-2xl font-bold text-[#194e9e] flex items-center gap-2">
                  <Newspaper className="text-[#f08519]" /> Kabar Terbaru
                </h3>
              </div>

              <div className="space-y-2 divide-y divide-gray-200">
                {currentItems.map((item) => (
                  <article key={item.id} className="pt-2 pb-2 flex flex-col sm:flex-row gap-6 group">
                    <div className="relative sm:w-56 h-40 sm:h-36 overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-start flex-grow py-1">
                      <div className="text-gray-400 text-sm mb-1 font-medium">
                        {item.date}
                      </div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2 leading-snug group-hover:underline transition">
                        <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination Indicators - Panel 1, 2, ... */}
              <div className="flex justify-center items-center gap-2 pt-8">
                <button
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 border border-gray-300 transition-colors ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-[#194e9e] hover:text-white'}`}
                >
                  <ChevronLeft size={18} />
                </button>

                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 border font-bold text-sm transition-all
                      ${currentPage === i + 1
                        ? 'bg-[#194e9e] text-white border-[#194e9e]'
                        : 'border-gray-300 text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 border border-gray-300 transition-colors ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-[#194e9e] hover:text-white'}`}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </section>

          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-12">

            {/* SEARCH */}
            <div className="bg-white p-6 border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#194e9e]" />
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Search size={18} className="text-[#f08519]" /> Cari Berita
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ketik kata kunci..."
                  className="w-full bg-gray-50 border border-gray-300 py-3 pl-4 pr-12 focus:outline-none focus:border-[#194e9e] transition text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#194e9e]">
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* POPULAR NEWS */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#194e9e] border-b border-gray-300 pb-2 flex items-center gap-2">
                <TrendingUp size={20} className="text-[#f08519]" /> Berita Populer
              </h3>
              <div className="space-y-6">
                {newsData.slice(0, 4).map((item, idx) => (
                  <article key={item.id} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-100 flex items-center justify-center font-bold text-gray-400 border border-gray-200 transition">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-[#f08519] transition line-clamp-2">
                        <Link href={`/berita/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <p className="text-[11px] text-gray-500 mt-1 uppercase font-medium">{item.category} • {item.date}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Ticker Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
