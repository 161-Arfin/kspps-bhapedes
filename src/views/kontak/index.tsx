"use client";

import React from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

const ADMIN_WHATSAPP_NUMBER = "6285336260858";
const layananOptions = [
  "Simpanan Pelajar",
  "Simpanan Walimah",
  "Rahn/Gadai",
  "Investasi Emas",
  "Lainnya",
];

export default function KontakView() {
  const [selectedLayanan, setSelectedLayanan] = React.useState(
    layananOptions[0],
  );
  const [isLayananOpen, setIsLayananOpen] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nama = formData.get("nama")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const whatsapp = formData.get("whatsapp")?.toString().trim();
    const layanan = formData.get("layanan")?.toString().trim();
    const pesan = formData.get("pesan")?.toString().trim();

    const message = [
      "Assalamu'alaikum Admin BHAPEDES.",
      "",
      `Saya ingin menghubungi admin terkait layanan: ${layanan}`,
      "",
      `Nama: ${nama}`,
      `Email: ${email}`,
      `Nomor WhatsApp: ${whatsapp}`,
      "",
      "Pesan:",
      pesan,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ================= CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-4">Hubungi Kami</h1>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* ================= FORM ================= */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">
                Kirim Pesan
              </h2>
              <div className="w-16 h-1 bg-[#f08519] mb-8 rounded" />
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      name="nama"
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-2.5 rounded focus:outline-none focus:border-[#194e9e] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full border border-gray-300 px-4 py-2.5 rounded focus:outline-none focus:border-[#194e9e] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor WhatsApp
                    </label>
                    <input
                      name="whatsapp"
                      type="tel"
                      required
                      className="w-full border border-gray-300 px-4 py-2.5 rounded focus:outline-none focus:border-[#194e9e] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subjek
                    </label>
                    <div
                      className="relative"
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                          setIsLayananOpen(false);
                        }
                      }}
                    >
                      <input
                        type="hidden"
                        name="layanan"
                        value={selectedLayanan}
                      />
                      <button
                        type="button"
                        onClick={() => setIsLayananOpen((value) => !value)}
                        className={`flex w-full items-center justify-between rounded border bg-white px-4 py-2.5 text-left text-sm text-gray-800 transition-colors focus:outline-none ${
                          isLayananOpen
                            ? "border-[#194e9e] ring-2 ring-[#194e9e]/10"
                            : "border-gray-300 hover:border-[#194e9e]"
                        }`}
                      >
                        <span>{selectedLayanan}</span>
                        <ChevronDown
                          size={18}
                          className={`text-[#194e9e] transition-transform ${
                            isLayananOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isLayananOpen && (
                        <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
                          {layananOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedLayanan(option);
                                setIsLayananOpen(false);
                              }}
                              className={`block w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                                selectedLayanan === option
                                  ? "bg-[#194e9e] text-white"
                                  : "text-gray-800 hover:bg-[#194e9e]/5 hover:text-[#194e9e]"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    name="pesan"
                    rows={5}
                    required
                    className="w-full border border-gray-300 px-4 py-2.5 rounded focus:outline-none focus:border-[#194e9e] transition-colors"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#194e9e] text-white px-8 py-3 rounded font-semibold hover:bg-[#1b4b1e] transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* ================= MAP ================= */}
            <div className="mt-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734.2417091418667!2d115.31757566106326!3d-6.859710794104651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ddabd0eb9493675%3A0x6a0d905a09c7bcd9!2sBAPEDDES%20Syariah!5e1!3m2!1sid!2sid!4v1773219533600!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* ================= SIDEBAR ================= */}
          <aside className="space-y-8">
            <div className="bg-[#F8FAF8] border border-gray-200 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                Kantor Pusat
              </h3>
              <div className="w-16 h-1 bg-[#f08519] mb-6 rounded" />
              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex gap-4">
                  <MapPin className="text-[#194e9e] shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">
                      Alamat Kantor
                    </p>
                    <p className="leading-relaxed">
                      Jl Ignatus Slamet Riyadi, <br />
                      Paseraman, Arjasa, Kabupaten Sumenep, Jawa Timur 69491
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-[#194e9e] shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">
                      Telepon & WhatsApp
                    </p>
                    <p>+62 85336260858</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-[#194e9e] shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Email</p>
                    <p>ksppsbhapedes18@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                Jam Pelayanan
              </h3>
              <div className="w-16 h-1 bg-[#f08519] mb-6 rounded" />

              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-full flex justify-between border-b border-gray-100 pb-2">
                    <span className="font-semibold">Senin – Jumat</span>
                    <span className="font-bold">08.00 – 17.00</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-full flex justify-between text-[#d32f2f]">
                    <span className="font-semibold">Sabtu & Minggu</span>
                    <span className="font-bold">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
