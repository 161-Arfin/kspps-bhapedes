// Autentikasi Login
export interface LoginPayload {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
    // Password dihapus untuk alasan keamanan
  }
}

// Berita
export interface Berita {
  id: number;
  judul: string;
  slug: string;
  ringkasan: string;
  isi: string;
  gambar: string;
  kategori: string;
  status: boolean;
  pengunggah: string; // Diisi otomatis oleh sistem dari data admin yang login
  waktu: string;      // Diisi otomatis oleh sistem saat data disimpan
}

// Hero
export interface Hero {
  id: number;
  judul: string;
  subjudul: string;
  gambar: string;
  status: boolean;
  pengunggah: string;
  waktu: string;
}
