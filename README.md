# TMS Company

Sistem Informasi Company Profile dan Manajemen Pesanan Layanan (Tri Master Solusindo).
Terdiri dari Backend (Django REST Framework) dan Frontend (React + Vite).

## Panduan Menjalankan Aplikasi (Run Guide)

Untuk menjalankan aplikasi ini secara lokal di lingkungan *development*, Anda perlu menjalankan dua server secara bersamaan: **Server Backend (Django)** dan **Server Frontend (React/Vite)**. Gunakan dua tab/jendela terminal yang berbeda.

### 1. Menjalankan Backend (Django)

Buka terminal pertama Anda, arahkan ke folder utama proyek, lalu jalankan perintah berikut:

```bash
# Pastikan Anda berada di root directory
cd c:\Devlop_ntis\tms-company

# Instal dependensi (jika belum)
pip install -r requirements.txt

# Lakukan migrasi database
python manage.py makemigrations
python manage.py migrate

# Buat superuser untuk masuk ke admin panel (jika belum ada)
# python manage.py createsuperuser

# Jalankan server
python manage.py runserver
```
Server backend akan berjalan di `http://127.0.0.1:8000/`.

### 2. Menjalankan Frontend (React/Vite)

Buka tab terminal baru (biarkan terminal backend tetap berjalan), lalu jalankan perintah berikut:

```bash
# Masuk ke folder frontend
cd frontend

# Instal dependensi Node.js (jika belum)
npm install

# Jalankan server frontend
npm run dev
```

Server frontend akan berjalan di `http://localhost:5173/`. 
- Buka URL tersebut di browser untuk mengakses situs publik.
- Kunjungi `http://localhost:5173/admin/login` untuk mengakses Dashboard Admin React.
