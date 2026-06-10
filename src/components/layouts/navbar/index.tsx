import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { ChevronDown, Menu, X, Mail } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  // { label: "Layanan Sosial", href: "/layanan" },
  {
    label: "Produk",
    href: "/produk",
    children: [
      { label: "Simpanan Pelajar", href: "/produk/simpanan-pelajar" },
      { label: "Simpanan Walimah", href: "/produk/simpanan-walimah" },
      { label: "Rahn/Gadai", href: "/produk/rahn-gadai" },
      { label: "Investasi Emas", href: "/produk/invest-emas" },
    ],
  },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [router.pathname]);

  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const formattedDate = currentTime.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("id-ID");

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
      style={{
        paddingTop: "env(safe-area-inset-top, 0px)",
      }}
    >
      {/* TOP BAR */}
      <div className="bg-[#194e9e] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-between">
          <span className="hidden md:block font-medium">
            {mounted && `${formattedDate} | ${formattedTime} WIB`}
          </span>

          <div className="flex items-center gap-4">
            <a
              href="tel:081234567890"
              className="font-semibold hover:underline"
            >
              +6285336260858
            </a>

            <div className="flex items-center gap-2">
              <a
                href="mailto:ksppsbhapedes18@gmail.com"
                className="font-semibold hover:underline"
              >
                ksppsbhapedes18@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center">
                <Image
                  src="/img/bhapedes3.png"
                  alt="KSPPS BHAPEDES"
                  width={230}
                  height={230}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                          isActive(item.href)
                            ? "text-[#194e9e] border-b-2 border-[#f08519] pb-1"
                            : "text-gray-700 hover:text-[#194e9e]"
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={16} />
                      </button>

                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 pt-3 w-56 z-50">
                          <div className="bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className={`block px-4 py-3 text-sm transition-colors ${
                                  isActive(child.href)
                                    ? "text-[#194e9e] bg-blue-50 font-semibold"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-[#194e9e]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-semibold ${
                        isActive(item.href)
                          ? "text-[#194e9e] border-b-2 border-[#f08519] pb-1"
                          : "text-gray-700 hover:text-[#194e9e]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full z-50 transition-all duration-300 ease-out ${
            mobileOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-3 opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 top-full h-screen bg-slate-950/25 transition-opacity duration-300 ${
              mobileOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          <div className="relative border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-2xl">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label,
                          )
                        }
                        className="w-full flex justify-between items-center py-3 text-sm font-semibold text-gray-700"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`ml-4 overflow-hidden border-l-2 border-[#f08519] transition-all duration-300 ease-out ${
                          openDropdown === item.label
                            ? "max-h-48 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2 text-sm ${
                              isActive(child.href)
                                ? "text-[#194e9e] font-semibold"
                                : "text-gray-600 hover:text-[#194e9e]"
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-3 text-sm font-semibold ${
                        isActive(item.href)
                          ? "text-[#194e9e]"
                          : "text-gray-700 hover:text-[#194e9e]"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
