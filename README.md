# 🕌 JES 2026 – Jelajah Edukasi & Spiritual
### Aplikasi Laporan Kunjungan | MTs Ma'arif Jumo

---

## 📋 Tentang Aplikasi

Aplikasi PWA (Progressive Web App) untuk mendukung kegiatan Jelajah Edukasi & Spiritual (JES) siswa MTs Ma'arif Jumo. Siswa bisa mengisi laporan kunjungan langsung dari HP, menambahkan foto, dan mengunduh laporan PDF.

**10 Destinasi JES:**
1. Ziarah Pekalongan
2. Gelanggang Samudra
3. DUFAN
4. Lubang Buaya
5. PP IPTEK
6. TMII
7. Monas Keliling
8. Saung Mang Udjo
9. Museum Geologi
10. Cibaduyut Bandung

---

## 🚀 Cara Deploy ke GitHub Pages

### Langkah 1 – Buat Repository GitHub
1. Login ke [github.com](https://github.com)
2. Klik tombol **"New repository"**
3. Nama repository: `jes-2026` (atau sesuai keinginan)
4. Centang **"Public"**
5. Klik **"Create repository"**

### Langkah 2 – Upload File
1. Di halaman repository yang baru dibuat, klik **"uploading an existing file"**
2. Upload semua file berikut:
   - `index.html`
   - `style.css`
   - `app.js`
   - `sw.js`
   - `manifest.json`
   - folder `icons/` (dengan icon-192.png dan icon-512.png)
3. Klik **"Commit changes"**

### Langkah 3 – Aktifkan GitHub Pages
1. Di repository, klik tab **"Settings"**
2. Scroll ke bawah ke bagian **"Pages"**
3. Di "Source", pilih **"Deploy from a branch"**
4. Branch: pilih **"main"** → Folder: **"/ (root)"**
5. Klik **"Save"**
6. Tunggu beberapa menit, lalu URL akan muncul:
   `https://[username].github.io/jes-2026/`

### Langkah 4 – Bagikan ke Siswa
Siswa cukup membuka link tersebut dari HP Android, lalu:
- Buka browser Chrome
- Kunjungi link
- Akan muncul prompt **"Tambahkan ke Layar Utama"** → klik
- Aplikasi akan terinstall seperti app native! ✅

---

## 📱 Cara Pakai (untuk Siswa)

1. **Buka link** aplikasi di Chrome HP
2. **Isi identitas**: nama lengkap, kelas, nomor absen
3. **Pilih destinasi** dari halaman utama
4. **Jawab pertanyaan pemantik** dengan detail dan lengkap
5. **Tambahkan foto** dari galeri atau kamera
6. **Simpan** laporan untuk tiap destinasi
7. **Buat PDF** di akhir → laporan otomatis terunduh
8. **Kirim notifikasi** ke WhatsApp madrasah

---

## ⚙️ Konfigurasi Nomor WhatsApp

Buka file `app.js`, cari baris:
```javascript
const nomorWA = '6281234567890'; // ← GANTI NOMOR INI
```
Ganti dengan nomor WA admin/guru madrasah (format: 628xxxx tanpa + atau 0).

---

## 🎨 Membuat Icon Aplikasi

Buat 2 file gambar icon dengan nama:
- `icons/icon-192.png` (ukuran 192×192 pixel)
- `icons/icon-512.png` (ukuran 512×512 pixel)

Bisa buat icon gratis di [canva.com](https://canva.com) atau [favicon.io](https://favicon.io)

---

## 🛠️ Teknologi

- **HTML/CSS/JS** — Pure vanilla, tanpa framework
- **jsPDF** — Generate PDF di browser
- **PWA** — Bisa diinstall di HP, bisa offline
- **localStorage** — Jawaban tersimpan otomatis di HP siswa
- **Service Worker** — Cache untuk akses offline

---

## 📞 Dukungan

Jika ada pertanyaan atau kendala teknis, hubungi pengembang.

---

*MTs Ma'arif Jumo • JES 2026 • Jelajah Edukasi & Spiritual*
