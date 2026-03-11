import React, { Children, useState } from "react";
import {
  Home,
  Newspaper,
  FileSliders,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const menuItems = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/admin",
  },
  {
    label: "Hero",
    icon: FileSliders, // You can replace with a more suitable icon
    children: [
      { label: "Data Hero", href: "/admin/hero" },
      { label: "Tambah Hero", href: "/admin/hero/tambah" },
      { label: "Recycle Bin", href: "/admin/hero/recyclebin" },
    ],
  },
  {
    label: "Berita",
    icon: Newspaper,
    children: [
      { label: "Data Berita", href: "/admin/berita" },
      { label: "Tambah Berita", href: "/admin/berita/tambah" },
      { label: "Recycle Bin", href: "/admin/berita/recyclebin" },
    ],
  },
];

export function useSidebarState() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return { mobileOpen, setMobileOpen };
}

export function useLogout() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    router.push("/admin/auth/login");
  };

  return handleLogout;
}

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  const router = useRouter();
  const pathname = router.pathname;
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const handleLogout = useLogout();

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-200 ${mobileOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"} md:translate-x-0 md:shadow-none`}
      >
        <div className="h-16 flex items-center px-6 border border-gray-100">
          <Image src="/img/bhapedes3.png" alt="Logo" width={170} height={150} />
          <button
            type="button"
            aria-label="Tutup Menu"
            onClick={() => setMobileOpen(false)}
            className="md:hidden ml-auto inline-flex h-8 w-8 items-center justify-center text-slate-600 hover:text-slate-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isParentActive =
              item.href === pathname ||
              item.children?.some((child) => pathname.startsWith(child.href));
            const isOpen = openMenu === item.label;

            return (
              <div key={item.label}>
                {/* PARENT */}
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${isParentActive ? "bg-slate-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                    className={`w-full flex items-center justify-between rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${isParentActive ? "bg-slate-800 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" />
                      {item.label}
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && isOpen && (
                  <div className="mt-1 ml-9 space-y-1">
                    {item.children.map((child) => {
                      const isActive = pathname === child.href;

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-slate-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="mt-1 w-full flex items-center gap-3 rounded-md px-4 py-2.5 text-sm text-red-600 transition-colors hover:bg-red-50"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
