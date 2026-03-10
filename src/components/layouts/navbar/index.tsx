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
  { label: "Layanan Sosial", href: "/layanan" },
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
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
              +62 812-3456-7890
            </a>

            <div className="flex items-center gap-2">
              <Mail size={14} className="text-[#f08519]" />
              <a
                href="mailto:info@bhapedes.co.id"
                className="font-semibold hover:underline"
              >
                info@bhapedes.co.id
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white">
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
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
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
                          className={`transition-transform ${
                            openDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {openDropdown === item.label && (
                        <div className="ml-4 border-l-2 border-[#f08519]">
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
                      )}
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
        )}
      </nav>
    </header>
  );
}
