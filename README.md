# SIMORG — UTS Pemrograman Web Dasar

## Identitas
- **Nama:** Muhamad Taufiqurrahman
- **NIM:** 2559201054
- **Mata Kuliah:** Pemrograman Web Dasar (Semester 3)

## Tema & Objek
- **Tema:** B. Profil Organisasi Kampus
- **Objek:** SIMORG — Sistem Informasi Manajemen Organisasi Mahasiswa
- **Deskripsi:** Website profil organisasi kampus yang mengembangkan platform digital pengelolaan organisasi mahasiswa (BEM, Hima, UKM). Katalog berisi program kerja dan modul sistem.

## Daftar Halaman
1. `index.html` — Beranda (hero, ringkasan, 3 unggulan)
2. `tentang.html` — Tentang (profil, visi/misi, tim, tabel jam operasional)
3. `katalog.html` — Katalog (8 kartu program kerja & modul, filter kategori)
4. `kontak.html` — Kontak (alamat, medsos, peta, formulir validasi)

## Daftar Fitur
### Wajib
- HTML semantik (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Tabel data dengan `thead` + `tbody`
- Formulir dengan `label for/id`, validasi HTML5 (`required`, `type="email"`, `type="tel" pattern`, `minlength/maxlength`)
- CSS eksternal tunggal, tanpa inline/style tag
- Flexbox navigasi + CSS Grid katalog
- 2 media query (≤600px dan ≥992px)
- 8 variabel CSS di `:root`
- 3 efek interaksi: `:hover`, `transition`, `@keyframes fadeIn`

### Bonus JavaScript (+10 poin)
- ✅ Filter kategori katalog (+4 poin) — `script.js`
- ✅ Validasi formulir tambahan dengan pesan error di bawah kolom dan pesan sukses (+3 poin)
- ⚠️ Menu hamburger tidak diterapkan karena navigasi sudah vertikal di HP sesuai spesifikasi CSS (bisa ditambahkan jika diperlukan)

## Sumber Gambar
- Hero & modul: Unsplash (https://unsplash.com) — lisensi bebas
- Tim: Pexels (https://pexels.com) — lisensi bebas
- Peta: Google Maps Embed

> Ganti daftar ini dengan URL gambar yang benar-benar Anda pakai.

## Kendala & Solusi
1. **Validasi W3C pada iframe Google Maps** — ditambahkan atribut `title` dan `loading="lazy"` agar lolos validasi.
2. **Filter katalog tanpa reload** — menggunakan `data-kategori` pada kartu dan `style.display` via JS.
3. **Responsif navbar** — flex-direction column pada media query ≤600px.

## Struktur Folder