import { useState, useEffect } from 'react';
import { Bell, Menu, User } from 'lucide-react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function capitalize(s: string) {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Topbar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (open: boolean) => void }) {
  const pathname = usePathname() || '/';
  const [adminUser, setAdminUser] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) {
      setAdminUser(JSON.parse(user));
    }
  }, []);

  const getInitials = (name: string) => {
    if (!name) return 'AD';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Known route metadata overrides
  const routeMeta: Record<string, { title: string; desc?: string }> = {
    '/admin': { title: 'Dashboard', },
    '/admin/dashboard': { title: 'Dashboard', },
    '/admin/berita': { title: 'Berita' },
    '/admin/berita/tambah': { title: 'Tambah Berita', },
    '/admin/berita/recyclebin': { title: 'Recycle Bin', },
  };

  // Determine meta by exact match, then by first segment fallbacks
  let meta = routeMeta[pathname];
  if (!meta) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length >= 2 && segments[0] === 'admin') {
      // e.g. /admin/cabang/... -> title 'Cabang'
      meta = { title: capitalize(segments[1]) };
    } else if (segments.length === 1) {
      meta = { title: capitalize(segments[0]) };
    } else {
      meta = { title: 'App' };
    }
  }

  return (
    <div className="fixed top-0 left-0 md:left-64 right-0 z-30">
      <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center px-2 md:px-6 shadow-sm">
        {/* Left: Menu button on mobile + title */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Mobile Menu Button - Hidden on Desktop Sidebar */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors flex-shrink-0"
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>

          {/* Title */}
          <h1 className="text-lg font-bold text-gray-700 truncate">
            {meta.title}
          </h1>
        </div>

        {/* Right side: Notifications/User Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold text-slate-800 leading-tight">
              {adminUser?.username || 'Admin'}
            </p>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Administrator
            </p>
          </div>
          <div className="w-9 h-9 rounded-full bg-slate-100 overflow-hidden border border-slate-200 flex items-center justify-center shadow-sm">
            <span className="text-xs font-bold text-slate-600">
              {getInitials(adminUser?.username || 'Admin')}
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
