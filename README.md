# Invofest - Event Management System

## 📋 Deskripsi Proyek

Invofest adalah sistem manajemen event yang memungkinkan pengguna untuk melihat, membuat, mengedit, dan menghapus data event, kategori, serta pembicara.

## 🚀 Fitur Utama

- **Dashboard Admin** - Ringkasan statistik event, kategori, dan pembicara
- **Manajemen Event** - CRUD lengkap untuk event
- **Manajemen Kategori** - Kelola kategori event
- **Manajemen Pembicara** - Kelola data pembicara/speaker
- **Authentication** - Sistem login untuk akses admin

## 🔐 Akun Login Default

**Email:** `user@example.com`  
**Password:** `password123`

Gunakan kredensial di atas untuk login ke dashboard admin.

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **State Management:** Zustand
- **Form Management:** React Hook Form
- **Router:** React Router v7

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js 5
- **Language:** TypeScript
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **CORS:** Enabled

## 📁 Struktur Project

uts-main/
├── invofest/ # Frontend (React)
│ ├── src/
│ │ ├── page/ # Halaman utama
│ │ ├── page/dashboard/ # Halaman admin dashboard
│ │ ├── components/ # Reusable components
│ │ ├── layouts/ # Layout templates
│ │ └── store/ # Zustand store
│ └── .env # Environment variables
│
└── be-web2/ # Backend (Express)
├── src/
│ ├── controllers/ # Business logic
│ ├── routes/ # API routes
│ ├── lib/ # Database connection
│ └── index.ts # Entry point
├── prisma/
│ └── schema.prisma # Database schema
└── .env # Environment variables

## 🔗 URL Deployment

- **Frontend:** https://invofest-three.vercel.app
- **Backend API:** https://be-web2-two.vercel.app

## 📊 Database Schema

### Events

- `id` - Primary Key
- `nama` - Event name
- `location` - Event location
- `dateEvent` - Event date
- `description` - Event description
- `categoryId` - Foreign Key to Category
- `pembicaraId` - Foreign Key to Speaker

### Categories

- `id` - Primary Key
- `nama` - Category name
- `description` - Category description

### Speakers

- `id` - Primary Key
- `nama` - Speaker name
- `materi` - Topics/Materials
- `jabatan` - Position/Title
- `foto` - Photo URL

## 🚀 Cara Menjalankan Lokal

### Setup Frontend

```bash
cd invofest
npm install
npm run dev
```

Akses: `http://localhost:5173`

### Setup Backend

```bash
cd be-web2
npm install
npm run dev
```

Server berjalan di: `http://localhost:3000`

## 📝 API Endpoints

### Events

- `GET /api/events` - Dapatkan semua event
- `POST /api/events` - Buat event baru
- `GET /api/events/:id` - Dapatkan event by ID
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Hapus event

### Categories

- `GET /api/categories` - Dapatkan semua kategori
- `POST /api/categories` - Buat kategori baru
- `PUT /api/categories/:id` - Update kategori
- `DELETE /api/categories/:id` - Hapus kategori

### Speakers

- `GET /api/pembicara` - Dapatkan semua pembicara
- `POST /api/pembicara` - Buat pembicara baru
- `PUT /api/pembicara/:id` - Update pembicara
- `DELETE /api/pembicara/:id` - Hapus pembicara

## 🔑 Environment Variables

### Frontend (.env)

VITE_API_URL=https://be-web2-two.vercel.app/api

### Backend (.env)

DATABASE_URL=postgresql://[user]:[password]@[host]:5432/[database]
DIRECT_URL=postgresql://[user]:[password]@[host]:5432/[database]?sslmode=require
JWT_SECRET=your_secret_key
PORT=3000
NODE_ENV=production

## 👨‍💻 Developer

- Dibuat untuk UTS Pemrograman Web 2
- Tanggal: Mei 2026

## 📞 Support

Untuk pertanyaan atau masalah, hubungi developer.

---

**Happy Coding! 🚀**
