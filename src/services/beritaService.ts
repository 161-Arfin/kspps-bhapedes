import { Berita } from "@/types";

// Extends Berita with internal deleted flag for simulation
interface BeritaInternal extends Berita {
  isDeleted?: boolean;
}

const STORAGE_KEY = 'bmt_fast_berita';

// Helper to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/-+/g, '-')      // Replace multiple - with single -
    .trim();
};

export const beritaService = {
  // Mendapatkan semua berita (yang tidak dihapus)
  getBerita: (): Berita[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = data ? JSON.parse(data) : [];

    // Migration: Ensure all news have a slug
    let hasMigration = false;
    const migratedData = allBerita.map(b => {
      if (!b.slug) {
        b.slug = `${generateSlug(b.judul)}-${b.id.toString().slice(-4)}`;
        hasMigration = true;
      }
      return b;
    });

    if (hasMigration) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migratedData));
    }

    return migratedData.filter(b => !b.isDeleted);
  },

  // Mendapatkan satu berita berdasarkan ID atau Slug
  getBeritaById: (id: number): Berita | null => {
    if (typeof window === 'undefined') return null;
    const allBerita = beritaService.getBerita();
    return allBerita.find(b => b.id === id) || null;
  },

  getBeritaBySlug: (slug: string): Berita | null => {
    if (typeof window === 'undefined') return null;
    const allBerita = beritaService.getBerita();
    // Try find by slug first
    const bySlug = allBerita.find(b => b.slug === slug);
    if (bySlug) return bySlug;

    // Fallback: try find by ID (if slug is numeric)
    const id = parseInt(slug);
    if (!isNaN(id)) {
      return allBerita.find(b => b.id === id) || null;
    }

    return null;
  },

  // Mendapatkan berita yang ada di sampah
  getDeletedBerita: (): Berita[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = data ? JSON.parse(data) : [];
    return allBerita.filter(b => b.isDeleted);
  },

  // Menambah berita baru
  addBerita: (berita: Omit<Berita, 'id' | 'waktu' | 'pengunggah'>): Berita => {
    if (typeof window === 'undefined') return {} as Berita;
    const data = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = data ? JSON.parse(data) : [];

    // Ambil data admin dari session/localStorage
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{"username": "Admin"}');

    const newBerita: BeritaInternal = {
      ...berita,
      id: Date.now(),
      slug: `${generateSlug(berita.judul)}-${Date.now().toString().slice(-4)}`,
      waktu: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      pengunggah: adminUser.username,
      status: berita.status,
      isDeleted: false
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify([newBerita, ...allBerita]));
    return newBerita;
  },

  // Soft Delete (Pindahkan ke sampah)
  softDeleteBerita: (id: number): void => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = data ? JSON.parse(data) : [];
    const index = allBerita.findIndex(b => b.id === id);

    if (index !== -1) {
      allBerita[index].isDeleted = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allBerita));
    }
  },

  // Pulihkan berita dari sampah
  restoreBerita: (id: number): void => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = data ? JSON.parse(data) : [];
    const index = allBerita.findIndex(b => b.id === id);

    if (index !== -1) {
      allBerita[index].isDeleted = false;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allBerita));
    }
  },

  // Menghapus berita secara permanen
  permanentlyDeleteBerita: (id: number): void => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = data ? JSON.parse(data) : [];
    const filteredBerita = allBerita.filter(b => b.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBerita));
  },

  // Mengubah berita
  updateBerita: (id: number, data: Partial<Berita>): Berita | null => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const allBerita: BeritaInternal[] = storageData ? JSON.parse(storageData) : [];
    const index = allBerita.findIndex(b => b.id === id);

    if (index === -1) return null;

    const updatedBerita = { ...allBerita[index], ...data };
    allBerita[index] = updatedBerita;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(allBerita));
    return updatedBerita;
  }
};
