import { Hero } from "@/types";

const STORAGE_KEY = 'bhapedes_hero';

// Default data based on HomeView
const DEFAULT_HERO: Hero[] = [
  {
    id: 1,
    judul: "Solusi Keuangan Syariah",
    subjudul: "Menebar Fadilah, Menuai Barokah untuk Keluarga Anda",
    gambar: "https://media.istockphoto.com/id/1221000316/id/foto/tangan-laki-laki-berdoa-dengan-iman-dalam-agama-untuk-berkat-tuhan-menumbuhkan-lampu-dan-bubuk.jpg?s=1024x1024&w=is&k=20&c=7_6hF9A8BzerYHrh-rULMMZtJI-LSNUST0ixyv8vWEk=",
    status: true,
    pengunggah: "Admin",
    waktu: "1 Maret 2026"
  },
  {
    id: 2,
    judul: "Dukung Pertumbuhan UMKM",
    subjudul: "Pembiayaan amanah untuk mengembangkan usaha Anda",
    gambar: "https://media.istockphoto.com/id/1325625302/id/foto/pria-yang-beribadah-di-masjid-mencatat-arsitekturnya.jpg?s=1024x1024&w=is&k=20&c=UyhkPGUFJ72PCJ4qzMoOa9abIHsfg-nqBDR13j6ou2s=",
    status: true,
    pengunggah: "Admin",
    waktu: "1 Maret 2026"
  }
];

export const heroService = {
  getHero: (): Hero[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_HERO));
      return DEFAULT_HERO;
    }
    const allHero: (Hero & { isDeleted?: boolean })[] = JSON.parse(data);
    return allHero.filter(h => !h.isDeleted);
  },

  getHeroById: (id: number): Hero | null => {
    const allHero = heroService.getHero();
    return allHero.find(h => h.id === id) || null;
  },

  addHero: (hero: Omit<Hero, 'id' | 'waktu' | 'pengunggah'>): Hero => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allHero: (Hero & { isDeleted?: boolean })[] = data ? JSON.parse(data) : [];

    let adminUser = { username: "Admin" };
    if (typeof window !== 'undefined') {
      adminUser = JSON.parse(localStorage.getItem('adminUser') || '{"username": "Admin"}');
    }

    const newHero: Hero & { isDeleted?: boolean } = {
      ...hero,
      id: Date.now(),
      waktu: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      pengunggah: adminUser.username,
      isDeleted: false
    };

    if (typeof window !== 'undefined') {
      const newData = [newHero, ...allHero].slice(0, 5);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
    return newHero;
  },

  updateHero: (id: number, data: Partial<Hero>): Hero | null => {
    const storageData = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    const allHero: (Hero & { isDeleted?: boolean })[] = storageData ? JSON.parse(storageData) : [];
    const index = allHero.findIndex(h => h.id === id);

    if (index === -1) return null;

    const updatedHero = { ...allHero[index], ...data };
    allHero[index] = updatedHero;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(allHero));
    return updatedHero;
  },

  softDeleteHero: (id: number): void => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allHero: (Hero & { isDeleted?: boolean })[] = data ? JSON.parse(data) : [];
    const index = allHero.findIndex(h => h.id === id);

    if (index !== -1) {
      allHero[index].isDeleted = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allHero));
    }
  },

  getDeletedHero: (): Hero[] => {
    if (typeof window === 'undefined') return [];
    const data = localStorage.getItem(STORAGE_KEY);
    const allHero: (Hero & { isDeleted?: boolean })[] = data ? JSON.parse(data) : [];
    return allHero.filter(h => h.isDeleted);
  },

  restoreHero: (id: number): void => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allHero: (Hero & { isDeleted?: boolean })[] = data ? JSON.parse(data) : [];
    const index = allHero.findIndex(h => h.id === id);

    if (index !== -1) {
      allHero[index].isDeleted = false;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(allHero));
    }
  },

  permanentlyDeleteHero: (id: number): void => {
    const data = localStorage.getItem(STORAGE_KEY);
    const allHero: (Hero & { isDeleted?: boolean })[] = data ? JSON.parse(data) : [];
    const filteredHero = allHero.filter(h => h.id !== id);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredHero));
    }
  }
};
