import { useEffect, useState } from "react";

const ADMIN_WHATSAPP_NUMBER = "6285336260858";

const DEFAULT_MESSAGE =
  "Assalamu'alaikum Admin BHAPEDES, saya ingin bertanya tentang layanan BHAPEDES.";

export default function FloatingWhatsapp() {
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowBubble(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-end gap-3">
      <div
        className={`relative max-w-[230px] rounded-xl border border-[#194e9e]/10 bg-white px-4 py-3 text-sm font-semibold leading-relaxed text-gray-700 shadow-[0_12px_30px_rgba(25,78,158,0.18)] transition-all duration-500 ${
          showBubble
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <span className="block text-[#194e9e]">Halo!</span>
        Ada yang bisa kami bantu?
        <span className="absolute -right-2 bottom-5 h-4 w-4 rotate-45 border-r border-t border-[#194e9e]/10 bg-white" />
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp BHAPEDES"
        className="group flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#194e9e] text-white shadow-[0_14px_28px_rgba(25,78,158,0.32)] transition hover:-translate-y-1 hover:bg-[#f08519] focus:outline-none focus:ring-4 focus:ring-[#f08519]/30"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7"
          fill="currentColor"
        >
          <path d="M16.02 4C9.39 4 4 9.23 4 15.66c0 2.12.59 4.18 1.7 5.98L4.04 28l6.57-1.6A12.34 12.34 0 0 0 16.02 27C22.64 27 28 21.78 28 15.34 28 9.03 22.64 4 16.02 4Zm0 20.92c-1.76 0-3.48-.46-4.98-1.34l-.36-.21-3.9.95.98-3.72-.24-.38a9.1 9.1 0 0 1-1.43-4.86c0-5.02 4.2-9.1 9.35-9.1 5.16 0 9.35 4.08 9.35 9.1 0 5.24-4.01 9.56-8.77 9.56Zm5.26-6.79c-.29-.14-1.7-.81-1.96-.9-.27-.1-.46-.14-.65.14-.19.27-.74.9-.91 1.08-.17.19-.34.21-.63.07-.29-.14-1.22-.44-2.33-1.4-.86-.74-1.44-1.66-1.61-1.94-.17-.27-.02-.42.13-.56.13-.12.29-.32.43-.48.14-.16.19-.27.29-.46.1-.18.05-.34-.02-.48-.07-.14-.65-1.52-.89-2.08-.23-.55-.47-.47-.65-.48h-.55c-.19 0-.48.07-.74.34-.26.27-.98.93-.98 2.27s1 2.64 1.15 2.82c.14.18 1.98 2.94 4.8 4.12.67.28 1.19.45 1.6.58.67.21 1.29.18 1.77.11.54-.08 1.7-.67 1.94-1.32.24-.65.24-1.2.17-1.32-.07-.11-.26-.18-.55-.32Z" />
        </svg>
      </a>
    </div>
  );
}
