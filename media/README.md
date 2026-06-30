# Media Directory

Folder ini digunakan oleh Django (backend) sebagai tempat penyimpanan default untuk semua file **user-uploaded media** (berkas yang diunggah oleh user/admin).

## Struktur Folder

Berdasarkan konfigurasi model pada sistem TMS, folder ini biasanya berisi (atau akan berisi) sub-folder berikut:

- `layanan/`: Berisi gambar/foto terkait setiap Layanan yang ditawarkan oleh perusahaan. (Dibuat otomatis oleh Django saat admin mengupload gambar layanan).
- `artikel/`: Berisi gambar thumbnail atau gambar pelengkap untuk artikel blog/berita.
- `profil/`: (Akan dibuat saat ada upload) Berisi foto profil perusahaan atau struktur organisasi yang diunggah melalui dashboard admin.

## Pengelolaan

- **Siapa yang bertanggung jawab?** 
  File di dalam folder ini dikelola secara dinamis melalui interface *Admin Dashboard*. Aplikasi backend (Django) memiliki izin tulis/baca pada direktori ini untuk menyimpan upload.
- **Git Tracking:**
  Secara umum, file hasil upload (seperti gambar `.png`, `.jpg`) **tidak boleh** dikomit (commit) ke dalam repository Git. Sebaiknya file-file ini diabaikan menggunakan `.gitignore`. File `README.md` ini ditambahkan agar struktur foldernya tetap terbawa/ter-track di git tanpa membawa file medianya.
