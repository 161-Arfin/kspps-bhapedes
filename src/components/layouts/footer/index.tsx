import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

const navigationLinks: FooterLink[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Produk", href: "/produk" },
  // { label: 'Layanan Sosial', href: '/layanan-sosial' },
  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="h-1 bg-[#194e9e]" />

      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12">
        <div className="flex flex-col gap-10 md:flex-row md:flex-wrap lg:flex-nowrap lg:gap-8 lg:justify-between">
          <div className="w-full md:w-[45%] lg:w-4/12">
            <Image
              src="/img/bhapedes2.png"
              alt="KSPPS Bhapedes"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
            <p className="mt-4 max-w-md text-sm text-gray-600 leading-relaxed">
              KSPPS Bhakti Pemuda Desa adalah lembaga keuangan mikro syariah
              yang berkomitmen mendukung pertumbuhan ekonomi umat melalui
              layanan simpanan, pembiayaan usaha, dan kegiatan sosial.
            </p>
          </div>

          <div className="w-full md:w-[45%] lg:w-auto lg:mx-auto lg:pl-8">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#194e9e]">
              Navigasi
            </h3>
            <ul className="flex flex-col gap-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 transition-colors hover:text-[#194e9e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-full lg:w-auto lg:ml-auto">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#194e9e]">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-[#194e9e]" />
                <span>
                  Jl Ignatus Slamet Riyadi, <br />
                  Paseraman, Arjasa, Kabupaten Sumenep, <br /> Jawa Timur 69491
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#194e9e]" />
                <span>+62 85336260858</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#194e9e]" />
                <span>ksppsbhapedes18@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock3 size={16} className="shrink-0 text-[#194e9e]" />
                <span>Senin - Jumat (08.00 - 17.00 WIB)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200/70">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500 sm:text-sm">
          &copy; {new Date().getFullYear()} KSPPS Bhakti Pemuda Desa. Berkah dan
          Memberdayakan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
