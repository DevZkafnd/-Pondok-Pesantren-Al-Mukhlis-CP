# Website Company Profile Pondok Pesantren Al-Mukhlis

Website informasi dan edukasi untuk Pondok Pesantren Al-Mukhlis, Panyaungan, Bandung.

## 📋 Ringkasan Proyek

Website ini terdiri dari:
- **Frontend**: Astro (static site) dengan Tailwind CSS
- **CMS**: Strapi headless CMS dengan TypeScript
- **Database**: SQLite untuk development lokal (PostgreSQL untuk production)
- **Target Deployment**: Frontend di Cloudflare Pages, CMS di VPS dengan RAM 2GB

Website ini dirancang hemat resource, mobile-first, dan ringan untuk akses dengan sinyal mobile biasa.

## 🎯 Menu Utama

1. **Beranda** - Halaman utama pesantren
2. **Profil Pesantren** - Sejarah, visi misi, fasilitas
3. **Program Pendidikan** - Tahfidz, Madrasah Diniyah, Pendidikan Formal
4. **Agenda & Berita** - Pengumuman, kegiatan, berita, galeri
5. **Kontak** - Informasi kontak dan lokasi

## 🛠️ Teknologi

### Frontend
- **Astro** v5.18.2 - Static site generator
- **Tailwind CSS** v3.4.18 - Utility-first CSS framework
- **TypeScript** v5.7.3 - Type-safe JavaScript

### Backend (CMS)
- **Strapi** v5.61.1 - Headless CMS
- **PostgreSQL** 17 (untuk production) / SQLite (untuk development)
- **Node.js** v22.x (Active LTS)

## 📦 Prasyarat

Pastikan sudah terinstall:
- **Node.js** v22.0.0 atau lebih baru (cek dengan `node --version`)
- **npm** v6.0.0 atau lebih baru (cek dengan `npm --version`)
- **Git** (untuk version control)
- **Docker** & **Docker Compose** (opsional, jika ingin pakai PostgreSQL untuk development)

> **Catatan**: Saat ini setup menggunakan SQLite untuk database development, sehingga Docker tidak wajib. PostgreSQL via Docker hanya diperlukan jika ingin testing dengan database production.

## 🚀 Cara Menjalankan (Quick Start)

### 1. Clone Repository

```bash
# Clone ke folder lokal
git clone https://github.com/DevZkafnd/-Pondok-Pesantren-Al-Mukhlis-CP.git al-mukhlis-cp
cd al-mukhlis-cp
```

### 2. Setup Environment Variables

```bash
# Copy file .env.example ke .env
copy .env.example .env

# Edit .env dan sesuaikan nilai-nilai rahasia jika perlu
# Untuk development lokal, nilai default sudah cukup
```

### 3. Install Dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### CMS (Strapi)
```bash
cd ../cms
npm install
```

### 4. Jalankan CMS Strapi

```bash
# Dari folder cms/
npm run develop
```

Strapi akan berjalan di: **http://localhost:1337**

**Langkah pertama kali**:
1. Buka http://localhost:1337/admin
2. Buat akun admin pertama Anda
3. Login ke dashboard Strapi

### 5. Jalankan Frontend Astro

Di terminal baru:

```bash
# Dari folder frontend/
npm run dev
```

Frontend akan berjalan di: **http://localhost:4321**

## 📂 Struktur Folder

```
al-mukhlis-cp/
├── frontend/              # Proyek Astro (static frontend)
│   ├── src/
│   │   ├── assets/        # Gambar, font, dll
│   │   ├── components/    # Komponen Astro
│   │   ├── layouts/       # Layout templates
│   │   ├── lib/           # Helper functions, CMS client
│   │   ├── pages/         # Halaman-halaman website
│   │   └── styles/        # Global CSS, Tailwind config
│   ├── public/            # Static assets (favicon, logo, dll)
│   ├── astro.config.mjs   # Konfigurasi Astro
│   ├── tailwind.config.mjs # Konfigurasi Tailwind
│   └── package.json
├── cms/                   # Proyek Strapi (headless CMS)
│   ├── config/            # Konfigurasi database, server, dll
│   ├── src/
│   │   └── api/           # Content types, controllers, services
│   ├── database/          # Database migrations
│   ├── public/            # Static files yang di-upload
│   └── package.json
├── docs/                  # Dokumentasi proyek
│   └── design-tokens.md   # (Akan dibuat) Token desain, warna, kontras
├── docker-compose.yml     # (Opsional) PostgreSQL untuk development
├── .env                   # Environment variables (tidak di-commit)
├── .env.example           # Template environment variables
├── .gitignore             # File yang diabaikan Git
├── .nvmrc                 # Versi Node.js yang digunakan
└── README.md              # File ini
```

## 🎨 Design System

Website menggunakan palet warna yang diekstrak dari logo Pondok Pesantren Al-Mukhlis:

### Warna Utama
- **Hijau Primary**: `#2E7D32` - Warna utama brand
- **Hijau Dark**: `#1B5E20` - Untuk hover states, aksen
- **Hijau Secondary**: `#4F6B1D` - Warna sekunder
- **Emas**: `#C9A227` - Aksen untuk highlight
- **Krem**: `#F7F4E6` - Background alternatif
- **Arang**: `#1F2A1A` - Warna teks utama

Semua kombinasi warna memenuhi **WCAG AA** untuk kontras aksesibilitas.

Detail lengkap ada di `docs/design-tokens.md`.

## 🔧 Perintah Penting

### Frontend (Astro)

| Perintah | Deskripsi |
|----------|-----------|
| `npm run dev` | Jalankan development server (http://localhost:4321) |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run astro` | Jalankan Astro CLI |

### CMS (Strapi)

| Perintah | Deskripsi |
|----------|-----------|
| `npm run develop` | Jalankan development mode dengan auto-reload |
| `npm run start` | Jalankan production mode |
| `npm run build` | Build admin panel |
| `npm run strapi` | Jalankan Strapi CLI |

## 🐳 PostgreSQL dengan Docker (Opsional)

Jika ingin testing dengan PostgreSQL (database production):

### 1. Pastikan Docker sudah berjalan

```bash
docker --version
```

### 2. Jalankan PostgreSQL

```bash
# Dari folder root proyek
docker compose up -d
```

PostgreSQL akan berjalan di port **5432**.

### 3. Update .env di folder cms/

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=al_mukhlis_cms
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=strapi_dev_password
```

### 4. Restart Strapi

```bash
cd cms
npm run develop
```

## 📝 Konvensi Commit

Gunakan format [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Fitur baru
- `fix:` - Bug fix
- `docs:` - Perubahan dokumentasi
- `style:` - Formatting, tidak mengubah kode
- `refactor:` - Refactoring kode
- `test:` - Menambah atau memperbaiki test
- `chore:` - Maintenance, dependency updates

Contoh:
```bash
git commit -m "feat: tambah halaman profil pesantren"
git commit -m "fix: perbaiki responsive menu mobile"
git commit -m "docs: update README dengan instruksi deployment"
```

## ❗ Troubleshooting

### Port bentrok (Port Already in Use)

**Frontend (port 4321):**
```bash
# Windows
netstat -ano | findstr :4321
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:4321 | xargs kill -9
```

**CMS (port 1337):**
```bash
# Windows
netstat -ano | findstr :1337
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:1337 | xargs kill -9
```

### Docker belum berjalan

```bash
# Windows: Buka Docker Desktop dari Start Menu

# Linux
sudo systemctl start docker

# Cek status
docker ps
```

### Error saat npm install

```bash
# Hapus node_modules dan package-lock.json, lalu install ulang
rm -rf node_modules package-lock.json
npm install

# Atau gunakan npm cache clean
npm cache clean --force
npm install
```

### Strapi tidak bisa connect ke database

1. Pastikan PostgreSQL sudah berjalan: `docker ps`
2. Cek kredensial di file `.env`
3. Atau gunakan SQLite: set `DATABASE_CLIENT=sqlite` di file .env

### Build Astro error

```bash
# Jalankan type checking dulu
npm run astro check

# Hapus cache Astro
rm -rf .astro

# Build ulang
npm run build
```

## 📖 Dokumentasi Tambahan

- [Astro Documentation](https://docs.astro.build/)
- [Strapi Documentation](https://docs.strapi.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🔐 Keamanan

⚠️ **PENTING**:
- Jangan pernah commit file `.env` ke Git
- Generate secrets baru untuk production (jangan pakai yang di `.env.example`)
- Gunakan password kuat untuk database dan akun Strapi admin
- Untuk production, aktifkan HTTPS

## 🚢 Deployment (Tahap Selanjutnya)

Deployment **BELUM** dilakukan pada fase setup ini. Deployment akan dilakukan setelah:
1. Content types di Strapi sudah dibuat
2. Konten sudah diisi oleh pengelola pesantren
3. Logo sudah dioptimasi dan gambar sudah siap
4. Testing lengkap sudah dilakukan

Target deployment:
- **Frontend**: Cloudflare Pages (static hosting)
- **CMS**: VPS dengan RAM 2GB (Ubuntu/Debian)
- **Database**: PostgreSQL di VPS yang sama
- **Media**: Cloudflare R2 (object storage)

## 👥 Kontributor

- Setup awal: [Nama Anda]
- Pengelola konten: Tim Pesantren Al-Mukhlis

## 📄 Lisensi

[Sesuaikan dengan lisensi yang diinginkan]

## 📞 Kontak

Untuk pertanyaan teknis terkait development, hubungi:
- Email: [email developer]

Untuk pertanyaan umum pesantren:
- Email: info@almukhlis.ac.id
- Alamat: Panyaungan, Bandung, Jawa Barat

---

**Catatan Setup Awal**: Ini adalah fase setup development lokal. Konten yang tampil saat ini adalah placeholder. Konten asli akan dikelola oleh tim pesantren melalui Strapi CMS.
