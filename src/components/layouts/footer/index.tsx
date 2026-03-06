import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Mail } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
}

const navigationLinks: FooterLink[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/tentang' },
  { label: 'Produk', href: '/produk' },
  { label: 'Layanan Sosial', href: '/layanan-sosial' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '/kontak' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* Gold Accent Line */}
      <div className="h-1 bg-[#F0A500]" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">

          {/* Brand */}
          <div>
            <Image
              src="/img/bhapedes1.png"
              alt="KSPPS Bhapedes"
              width={200}
              height={200}
              className="mb-5 object-contain"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              KSPPS Bhakti Pemuda Desa adalah lembaga keuangan mikro syariah
              yang berkomitmen mendukung pertumbuhan ekonomi umat
              melalui layanan simpanan, pembiayaan usaha, dan kegiatan sosial.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-[#2E7D32] mb-5 uppercase tracking-wide">
              Navigasi
            </h3>
            <ul className="space-y-3 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#2E7D32] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-[#2E7D32] mb-5 uppercase tracking-wide">
              Kontak
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Jl. Contoh No. 123, Jakarta</li>
              <li>Telp: 0812-3456-7890</li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#F0A500]" />
                <span>info@bhapedes.co.id</span>
              </li>
              <li>Senin - Jumat (08.00 - 16.00 WIB)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} KSPPS Bhakti Pemuda Desa.
          Berkah dan Memberdayakan.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
