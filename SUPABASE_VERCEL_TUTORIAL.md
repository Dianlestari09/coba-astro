# Panduan Migrasi Supabase & Deploy ke Vercel

Dokumen ini berisi tutorial lengkap langkah demi langkah untuk memigrasikan database proyek **ProCleaning** dari MySQL lokal ke **Supabase** (PostgreSQL) dan mendeploy aplikasi ke **Vercel**.

---

## DAFTAR ISI
1. [Langkah 1: Setup Proyek Supabase](#langkah-1-setup-proyek-supabase)
2. [Langkah 2: Menjalankan Skema Database di Supabase](#langkah-2-menjalankan-skema-database-di-supabase)
3. [Langkah 3: Konfigurasi Row Level Security (RLS)](#langkah-3-konfigurasi-row-level-security-rls)
4. [Langkah 4: Konfigurasi Lingkungan Lokal (.env)](#langkah-4-konfigurasi-lingkungan-lokal-env)
5. [Langkah 5: Pembangunan Proyek Lokal & Pengujian](#langkah-5-pembangunan-proyek-lokal--pengujian)
6. [Langkah 6: Deploy ke Vercel](#langkah-6-deploy-ke-vercel)

---

## Langkah 1: Setup Proyek Supabase

1. Buka website [Supabase](https://supabase.com/) dan lakukan login atau registrasi.
2. Klik tombol **New Project** di dasbor Supabase Anda.
3. Pilih Organization Anda, lalu masukkan informasi proyek:
   - **Name**: `ProCleaning` (atau nama lain pilihan Anda).
   - **Database Password**: Buat password yang kuat dan catat/simpan password ini.
   - **Region**: Pilih region terdekat dengan pengguna Anda (misalnya `Singapore` / `ap-southeast-1` untuk Indonesia).
   - **Pricing Plan**: Pilih **Free** (Gratis).
4. Klik **Create new project** dan tunggu beberapa menit hingga database Supabase selesai disiapkan.

---

## Langkah 2: Menjalankan Skema Database di Supabase

Setelah proyek Supabase selesai dibuat:
1. Di bilah navigasi kiri dasbor Supabase, klik ikon **SQL Editor** (ikon berbentuk lembaran bertuliskan `SQL`).
2. Klik **New Query** (atau **Quick Start** -> **New Blank Query**).
3. Buka file [supabase_setup.sql](file:///d:/Kuliah\Magang\ProCleaning-main/supabase_setup.sql) yang ada di direktori root proyek ini.
4. Copy seluruh isi file `supabase_setup.sql` tersebut.
5. Paste kode SQL tersebut ke dalam SQL Editor di Supabase.
6. Klik tombol **Run** (atau tekan `Ctrl + Enter` / `Cmd + Enter`).
7. Anda akan melihat pesan sukses `"Success. No rows returned"` dan tabel `blogs`, `services`, serta `teams` beserta datanya akan berhasil dibuat.

---

## Langkah 3: Konfigurasi Row Level Security (RLS)

Secara default, Supabase mengaktifkan RLS (Row Level Security) pada tabel baru untuk keamanan. Karena aplikasi ini menggunakan otentikasi admin sederhana berbasis sesi cookie internal (bukan Supabase Auth) untuk menulis data ke database, Anda memiliki dua pilihan:

### Opsi A: Menonaktifkan RLS (Paling Mudah & Direkomendasikan untuk Project Sederhana)
Nonaktifkan RLS untuk tabel agar server Vercel dapat membaca dan menulis data secara langsung.
Jalankan query berikut di **SQL Editor** Supabase:
```sql
ALTER TABLE blogs DISABLE ROW LEVEL SECURITY;
ALTER TABLE services DISABLE ROW LEVEL SECURITY;
ALTER TABLE teams DISABLE ROW LEVEL SECURITY;
```

### Opsi B: Mengaktifkan Kebijakan Publik (Public Policy)
Jika ingin membiarkan RLS tetap aktif namun mengizinkan semua operasi (Select, Insert, Update, Delete) melalui API Anon Key:
Jalankan query berikut di **SQL Editor**:
```sql
CREATE POLICY "Enable all access for all users" ON blogs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for all users" ON services FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Enable all access for all users" ON teams FOR ALL USING (true) WITH CHECK (true);
```

---

## Langkah 4: Konfigurasi Lingkungan Lokal (.env)

Dapatkan kredensial koneksi Supabase Anda:
1. Di dasbor Supabase, buka menu **Project Settings** (ikon gerigi di kiri bawah).
2. Pilih tab **API**.
3. Di bagian **Project API Keys**, Anda akan menemukan:
   - **Project URL**: Ini adalah `SUPABASE_URL` Anda.
   - **`anon` `public` Key**: Ini adalah `SUPABASE_ANON_KEY` Anda.
4. Buat atau perbarui file `.env` di root proyek lokal Anda dengan menambahkan kunci di bawah ini (salin dari `.env.example`):

```env
SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxxxxxxxxxxx

# Akun Login Admin Dashboard
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

---

## Langkah 5: Pembangunan Proyek Lokal & Pengujian

Sebelum mendeploy ke Vercel, pastikan semuanya berjalan lancar secara lokal:
1. Jalankan perintah instalasi dependensi (jika belum dilakukan):
   ```bash
   npm install --legacy-peer-deps
   ```
2. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
3. Buka halaman admin di `http://localhost:4321/admin` (atau port lain yang aktif) dan login dengan username `admin` dan password `admin123`.
4. Pastikan status koneksi menunjukkan **Connected** (berwarna hijau). Cobalah menambah, mengedit, atau menghapus postingan blog/layanan/tim untuk memastikan operasi tulis berfungsi.

---

## Langkah 6: Deploy ke Vercel

Astro memiliki integrasi bawaan dengan Vercel yang sangat mudah digunakan. Ikuti langkah-langkah berikut:

### 1. Hubungkan Proyek ke GitHub
Jika belum, buat repositori baru di GitHub Anda dan push kode proyek Anda ke sana:
```bash
git init
git add .
git commit -m "feat: migrate database to supabase"
git remote add origin <url-repository-github-anda>
git branch -M main
git push -u origin main
```

### 2. Import ke Vercel
1. Buka dasbor [Vercel](https://vercel.com/) Anda dan klik **Add New...** -> **Project**.
2. Hubungkan akun GitHub Anda dan pilih repositori proyek **ProCleaning** yang baru saja di-push.
3. Vercel secara otomatis akan mendeteksi bahwa proyek Anda menggunakan **Astro**.

### 3. Masukkan Environment Variables di Vercel
Sebelum mengklik **Deploy**, Anda **WAJIB** memasukkan Environment Variables yang dibutuhkan aplikasi di bagian **Environment Variables**:
- `SUPABASE_URL` = (Masukkan URL proyek Supabase Anda)
- `SUPABASE_ANON_KEY` = (Masukkan API Anon Key proyek Supabase Anda)
- `ADMIN_USERNAME` = `admin` (atau sesuai keinginan Anda)
- `ADMIN_PASSWORD` = `admin123` (atau sesuai keinginan Anda)

### 4. Deploy!
1. Klik tombol **Deploy**.
2. Tunggu proses build selesai (sekitar 1-2 menit).
3. Setelah selesai, Vercel akan memberikan domain publik gratis (seperti `pro-cleaning-xxxx.vercel.app`).
4. Buka tautan tersebut dan website Anda kini telah aktif menggunakan database cloud Supabase!
