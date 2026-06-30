"""
Script untuk menambahkan artikel informatif tentang perpajakan, akuntansi, dan keuangan bisnis
Jalankan dengan: python manage.py shell < seed_artikel.py
"""

from tms.models import Artikel
from django.utils.text import slugify
from datetime import datetime

# Data Artikel
artikel_data = [
    {
        "judul": "Panduan Lengkap PPh 21 untuk Karyawan dan Perusahaan",
        "ringkasan": "Memahami PPh 21, perhitungan, kewajiban pemotongan, dan pelaporan untuk karyawan dan perusahaan sesuai regulasi terbaru.",
        "konten": """Pajak Penghasilan (PPh) 21 adalah pajak yang dipotong atas penghasilan yang dibayarkan oleh wajib pajak orang pribadi dalam negeri atau bentuk usaha tetap kepada subjek pajak orang pribadi. Berikut panduan lengkapnya:

## Apa itu PPh 21?

PPh 21 adalah pajak yang dikenakan atas penghasilan berupa gaji, upah, honorarium, tunjangan, dan pembayaran lain dengan nama dan dalam bentuk apapun sehubungan dengan pekerjaan atau jabatan, jasa, dan kegiatan yang dilakukan oleh orang pribadi subjek pajak dalam negeri.

## Tarif PPh 21 Terbaru

Berdasarkan UU HPP No. 7 Tahun 2021, tarif PPh 21 menggunakan sistem progresif:

- 5% untuk penghasilan kena pajak sampai Rp 60.000.000
- 15% untuk penghasilan kena pajak di atas Rp 60.000.000 sampai Rp 250.000.000
- 25% untuk penghasilan kena pajak di atas Rp 250.000.000 sampai Rp 500.000.000
- 30% untuk penghasilan kena pajak di atas Rp 500.000.000 sampai Rp 5.000.000.000
- 35% untuk penghasilan kena pajak di atas Rp 5.000.000.000

## Kewajiban Perusahaan

Perusahaan sebagai pemotong pajak memiliki kewajiban:
1. Memotong PPh 21 setiap kali pembayaran gaji/upah
2. Menyetor PPh 21 yang dipotong ke kas negara paling lambat tanggal 10 bulan berikutnya
3. Melaporkan SPT Masa PPh 21 paling lambat tanggal 20 bulan berikutnya
4. Membuat bukti potong untuk setiap karyawan

## Penghasilan Tidak Kena Pajak (PTKP)

PTKP berlaku untuk:
- Wajib Pajak (WP) pribadi: Rp 54.000.000/tahun
- WP pribadi yang menikah: Rp 58.500.000/tahun
- Tambahan untuk istri yang digabung: Rp 4.500.000/tahun
- Tambahan untuk maksimal 3 anak/anak asuh: Rp 4.500.000/anak/tahun

## Tips Efisiensi PPh 21

1. Optimalkan penggunaan fasilitas PTKP
2. Manfaatkan tunjangan yang tidak dikenakan pajak (jamsostek, pensiun)
3. Perhatikan perhitungan UMKR (Uang Makan dan Transport)
4. Lakukan konsultasi dengan konsultan pajak profesional

Tri Master Solusindo siap membantu perusahaan Anda dalam perhitungan, pemotongan, dan pelaporan PPh 21 sesuai regulasi yang berlaku.""",
        "kategori": "perpajakan"
    },
    {
        "judul": "Memahami PPh 23: Pajak atas Jasa yang Perlu Diketahui",
        "ringkasan": "PPh 23 adalah pajak atas penghasilan berupa dividen, bunga, royalti, hadiah, dan penghasilan lain yang diterima oleh subjek pajak luar negeri.",
        "konten": """PPh 23 adalah pajak yang dipotong oleh pemotong pajak dalam negeri atas penghasilan yang dibayarkan atau diterima oleh subjek pajak luar negeri selain bentuk usaha tetap.

## Dasar Hukum PPh 23

PPh 23 diatur dalam:
- Pasal 26 UU PPh No. 7 Tahun 1983 sebagaimana telah diubah terakhir dengan UU No. 7 Tahun 2021
- PP No. 94 Tahun 2010 tentang Tata Cara Pemotongan dan Penyetoran PPh Pasal 23

## Objek PPh 23

PPh 23 dikenakan atas:
1. Dividen
2. Bunga termasuk premium, diskonto, dan imbalan sejenis
3. Royalti
4. Hadiah dan penghargaan
5. Sewa dan penghasilan lain dari penggunaan harta
6. Imbalan sehubungan dengan jasa teknik, jasa manajemen, jasa konstruksi, jasa konsultasi, dan jasa lain

## Tarif PPh 23

Tarif PPh 23 bervariasi tergantung jenis penghasilan:

- Dividen: 20% (final)
- Bunga: 20% (final)
- Royalti: 20% (final)
- Sewa dan penggunaan harta: 20% (final)
- Jasa teknik, manajemen, konstruksi, konsultasi: 20% (bukan final)
- Jasa lain: 2% (bukan final)

## Kewajiban Pemotong Pajak

Perusahaan yang membayarkan penghasilan ke subjek pajak luar negeri harus:
1. Memotong PPh 23 saat pembayaran
2. Menyetor ke kas negara paling lambat tanggal 10 bulan berikutnya
3. Melaporkan SPT Masa PPh 23 paling lambat tanggal 20 bulan berikutnya
4. Membuat bukti potong untuk pihak luar negeri

## Pengecualian PPh 23

Beberapa penghasilan tidak dikenakan PPh 23:
- Penghasilan yang dikenakan PPh Final lainnya
- Penghasilan dari perwakilan negara asing
- Penghasilan dari organisasi internasional

## Dokumen yang Diperlukan

Untuk pemotongan PPh 23, siapkan:
- Kontrak kerjasama dengan pihak luar negeri
- Bukti pembayaran
- NPWP pihak luar negeri (jika ada)
- Dokumen pendukung lain sesuai jenis penghasilan

Tri Master Solusindo membantu perusahaan dalam memahami dan memenuhi kewajiban PPh 23 sesuai regulasi perpajakan internasional.""",
        "kategori": "perpajakan"
    },
    {
        "judul": "Pentingnya Laporan Keuangan untuk UMKM dan Startup",
        "ringkasan": "Laporan keuangan yang tertata membantu UMKM dan startup dalam pengambilan keputusan bisnis, perencanaan pajak, dan mendapatkan pendanaan.",
        "konten": """Laporan keuangan adalah catatan sistematis tentang transaksi keuangan bisnis yang memberikan gambaran kesehatan finansial perusahaan. Bagi UMKM dan startup, laporan keuangan sangat penting.

## Jenis Laporan Keuangan

### 1. Neraca (Balance Sheet)
Menunjukkan posisi keuangan perusahaan pada suatu tanggal tertentu, mencakup:
- Aset (harta): kas, piutang, persediaan, aset tetap
- Liabilitas (utang): utang usaha, utang bank, utang pajak
- Ekuitas (modal): modal disetor, laba ditahan

### 2. Laba Rugi (Income Statement)
Menunjukkan kinerja operasional dalam periode tertentu:
- Pendapatan
- Beban pokok penjualan
- Beban operacional
- Laba atau rugi bersih

### 3. Arus Kas (Cash Flow Statement)
Melacak pergerakan kas masuk dan keluar:
- Aktivitas operasional
- Aktivitas investasi
- Aktivitas pendanaan

### 4. Perubahan Modal
Menunjukkan perubahan modal pemilik dalam periode tertentu.

## Manfaat Laporan Keuangan untuk UMKM

### 1. Pengambilan Keputusan Bisnis
- Mengetahui produk/jasa yang paling menguntungkan
- Mengidentifikasi area pemborosan
- Merencanakan ekspansi bisnis

### 2. Perencanaan Pajak
- Memudahkan pelaporan SPT Tahunan
- Mengoptimalkan penggunaan fasilitas pajak
- Menghindari sanksi administratif

### 3. Mendapatkan Pendanaan
- Syarat untuk pengajuan pinjaman bank
- Menarik investor
- Menunjukkan kredibilitas bisnis

### 4. Monitoring Kinerja
- Membandingkan kinerja antar periode
- Mengukur target vs realisasi
- Identifikasi tren keuangan

## Tantangan UMKM dalam Pembukuan

1. **Keterbatasan SDM**: Tidak memiliki staf akuntansi profesional
2. **Biaya**: Menghire akuntansi mahal untuk UMKM
3. **Kompleksitas**: Tidak memahami standar akuntansi
4. **Waktu**: Fokus pada operasional bisnis

## Solusi untuk UMKM

### 1. Software Akuntansi
- Menggunakan aplikasi akuntansi cloud-based
- Otomatisasi pencatatan transaksi
- Laporan real-time

### 2. Outsourcing Akuntansi
- Menggunakan jasa konsultan akuntansi
- Biaya lebih efisien
- Profesional dan sesuai standar

### 3. Training SDM
- Meningkatkan kompetensi staf internal
- Memahami dasar-dasar pembukuan
- Konsultasi berkala dengan ahli

## Standar Akuntansi untuk UMKM

PSAK EMKM (Pernyataan Standar Akuntansi Keuangan Entitas Mikro, Kecil, dan Menengah) adalah standar khusus untuk UMKM yang:
- Lebih sederhana dari PSAK umum
- Fokus pada kebutuhan UMKM
- Disesuaikan dengan kapasitas UMKM

## Tips Pembukuan yang Efektif

1. Pisahkan keuangan pribadi dan bisnis
2. Catat setiap transaksi secara rutin
3. Simpan bukti transaksi dengan rapi
4. Rekonkiasi bank setiap bulan
5. Review laporan keuangan secara berkala

Tri Master Solusindo menyediakan layanan pembukuan dan akuntansi profesional untuk UMKM dan startup dengan harga terjangkau.""",
        "kategori": "akuntansi"
    },
    {
        "judul": "5 Kesalahan Umum dalam Pelaporan Pajak yang Harus Dihindari",
        "ringkasan": "Pelajari kesalahan umum dalam pelaporan pajak yang sering dilakukan perusahaan dan cara menghindarinya untuk mengurangi risiko sanksi.",
        "konten": """Pelaporan pajak yang tepat dan tepat waktu adalah kewajiban setiap wajib pajak. Namun, banyak perusahaan melakukan kesalahan yang dapat mengakibatkan sanksi administratif maupun pidana.

## 1. Tidak Melakukan Pencatatan yang Rapi

**Masalah:** Tidak memiliki sistem pembukuan yang baik atau pencatatan tidak terstruktur.

**Dampak:**
- Sulit menentukan penghasilan kena pajak
- Potensi kelebihan atau kekurangan pembayaran pajak
- Kesulitan saat pemeriksaan pajak

**Solusi:**
- Gunakan software akuntansi
- Pisahkan rekening pribadi dan bisnis
- Catat setiap transaksi secara rutin
- Simpan bukti transaksi dengan sistematis

## 2. Salah Menghitung PTKP

**Masalah:** Salah dalam menghitung Penghasilan Tidak Kena Pajak (PTKP) untuk karyawan.

**Dampak:**
- PPh 21 terpotong lebih dari seharusnya
- Karyawan keberatan
- Perlu restitusi yang rumit

**Solusi:**
- Update data status karyawan secara berkala
- Gunakan sistem payroll yang terintegrasi
- Konsultasi dengan konsultan pajak
- Edukasi karyawan tentang PTKP

## 3. Terlambat Melaporkan SPT

**Masalah:** Tidak melaporkan SPT Masa atau SPT Tahunan tepat waktu.

**Dampak:**
- Denda keterlambatan (Rp 100.000 - Rp 1.000.000)
- Bunga keterlambatan (2% per bulan)
- Potensi pemeriksaan pajak

**Solusi:**
- Buat reminder sistem untuk deadline
- Siapkan dokumen jauh sebelum jatuh tempo
- Gunakan e-filing untuk pelaporan online
- Outsource ke konsultan pajak jika keterbatasan SDM

## 4. Tidak Memanfaatkan Fasilitas Pajak

**Masalah:** Tidak mengetahui atau tidak memanfaatkan fasilitas pajak yang tersedia.

**Dampak:**
- Membayar pajak lebih dari seharusnya
- Tidak efisien secara finansial
- Kompetitif bisnis menurun

**Fasilitas yang Sering Terlewat:**
- PTKP untuk karyawan
- Biaya jabatan
- Jaminan sosial (BPJS Ketenagakerjaan)
- Fasilitas PPh UMKM
- Tax holiday untuk industri tertentu

**Solusi:**
- Update regulasi pajak terbaru
- Konsultasi dengan konsultan pajak
- Review perencanaan pajak secara berkala
- Ikut seminar/pelatihan pajak

## 5. Salah Klasifikasi Pengeluaran

**Masalah:** Salah mengklasifikasikan pengeluaran sebagai biaya yang dapat dikurangkan.

**Dampak:**
- Penghasilan kena pajak salah dihitung
- Potensi sanksi saat pemeriksaan
- Restitusi atau kekurangan pembayaran

**Solusi:**
- Pahami pengertian biaya menurut UU PPh
- Pisahkan biaya pribadi dan bisnis
- Dokumentasi bukti pengeluaran dengan lengkap
- Konsultasi dengan ahli pajak untuk kasus grey area

## Tips Umum Menghindari Kesalahan

### 1. Edukasi Berkelanjutan
- Ikuti update regulasi pajak
- Hadiri seminar pajak
- Berlangganan newsletter pajak

### 2. Sistem Internal yang Baik
- SOP pelaporan pajak
- Double check sebelum submit
- Arsip dokumen dengan rapi

### 3. Bantuan Profesional
- Gunakan jasa konsultan pajak
- Outsource jika keterbatasan SDM
- Review berkala dengan ahli

### 4. Teknologi
- Gunakan software perpajakan
- Otomatisasi perhitungan pajak
- E-filing untuk pelaporan online

## Konsekuensi Kesalahan Pajak

### Sanksi Administratif
- Denda keterlambatan
- Bunga keterlambatan
- Kenaikan pajak

### Sanksi Pidana
- Pidana penjara (untuk kasus tertentu)
- Denda pidana
- Kerugian reputasi

Tri Master Solusindo membantu perusahaan Anda menghindari kesalahan umum dalam pelaporan pajak dengan layanan konsultasi profesional.""",
        "kategori": "perpajakan"
    },
    {
        "judul": "Cara Mengelola Cash Flow Bisnis agar Tetap Sehat",
        "ringkasan": "Pelajari strategi mengelola arus kas (cash flow) untuk menjaga likuiditas bisnis, menghindari masalah keuangan, dan mendukung pertumbuhan.",
        "konten": """Cash flow atau arus kas adalah darah kehidupan bisnis. Mengelola cash flow dengan baik adalah kunci untuk menjaga likuiditas dan kelangsungan bisnis, terutama bagi UMKM dan startup.

## Apa itu Cash Flow?

Cash flow adalah pergerakan uang masuk dan keluar dari bisnis dalam periode tertentu. Ada tiga jenis cash flow:

### 1. Cash Flow Operasional
Uang yang dihasilkan atau digunakan untuk aktivitas utama bisnis:
- Pendapatan penjualan
- Pembayaran ke supplier
- Gaji karyawan
- Biaya operasional

### 2. Cash Flow Investasi
Uang yang digunakan untuk investasi jangka panjang:
- Pembelian aset tetap
- Penjualan aset
- Investasi sekuritas

### 3. Cash Flow Pendanaan
Uang yang terkait dengan pembiayaan:
- Pinjaman bank
- Pembayaran utang
- Modal pemilik
- Dividen

## Pentingnya Cash Flow yang Sehat

### 1. Likuiditas
Memastikan bisnis memiliki cukup uang untuk:
- Membayar tagihan tepat waktu
- Menggaji karyawan
- Membayar pajak
- Operasional harian

### 2. Pertumbuhan
Cash flow positif memungkinkan:
- Investasi dalam bisnis
- Ekspansi ke pasar baru
- Pengembangan produk baru
- Peningkatan kapasitas

### 3. Resilience
Cash flow yang baik membantu:
- Menghadapi situasi darurat
- Bertahan saat penjualan turun
- Memanfaatkan peluang bisnis

## Indikator Cash Flow yang Sehat

### 1. Operating Cash Flow Positif
Cash flow dari operasional harus positif dalam jangka panjang.

### 2. Cash Conversion Cycle Rendah
Periode dari pembayaran ke supplier sampai penerimaan dari customer harus singkat.

### 3. Cash Buffer Adequate
Memiliki cadangan kas untuk 3-6 bulan operasional.

### 4. Debt Service Coverage Ratio Baik
Kemampuan membayar utang dari cash flow operasional.

## Strategi Mengelola Cash Flow

### 1. Monitoring Rutin
- Buat cash flow forecast bulanan
- Review actual vs forecast
- Identifikasi variance dan penyebabnya

### 2. Percepatan Penerimaan
- Tawarkan diskon untuk pembayaran cepat
- Follow up piutang secara agresif
- Gunakan sistem pembayaran online
- Minimalisasi credit term

### 3. Penundaan Pengeluaran
- Negosiasikan term pembayaran dengan supplier
- Jadwalkan pembayaran strategis
- Manfaatkan fasilitas kredit supplier

### 4. Efisiensi Operasional
- Review dan optimasi biaya
- Eliminasi pemborosan
- Automasi proses untuk efisiensi

### 5. Manajemen Persediaan
- Implementasi just-in-time inventory
- Hindari overstocking
- Monitor inventory turnover

## Tools untuk Cash Flow Management

### 1. Software Akuntansi
- QuickBooks, Xero, Zoho Books
- Otomatisasi tracking cash flow
- Laporan real-time

### 2. Spreadsheet
- Excel/Google Sheets untuk sederhana
- Template cash flow forecast
- Kustomisasi fleksibel

### 3. Banking Apps
- Mobile banking untuk monitoring
- Notifikasi transaksi
- Transfer cepat

## Masalah Cash Flow yang Umum

### 1. Cash Flow Gap
Perbedaan waktu antara penerimaan dan pembayaran.

**Solusi:**
- Line of credit dari bank
- Invoice financing
- Negosiasi term dengan supplier

### 2. Overtrading
Pertumbuhan penjualan terlalu cepat tanpa modal cukup.

**Solusi:**
- Perencanaan pertumbuhan yang hati-hati
- Pendanaan eksternal yang tepat
- Prioritaskan cash flow daripada revenue

### 3. Seasonal Fluctuation
Fluktuasi penjualan karena musim.

**Solusi:**
- Cash flow forecast seasonal
- Build cash buffer di peak season
- Diversifikasi produk/jasa

## Tips Praktis Cash Flow Management

### Harian
- Monitor saldo bank
- Catat semua transaksi
- Follow up piutang jatuh tempo

### Mingguan
- Review cash flow forecast
- Plan pembayaran minggu depan
- Identifikasi potensi masalah

### Bulanan
- Rekonkiasi bank
- Analisis cash flow vs budget
- Update forecast bulan berikutnya

### Kuartalan
- Review strategi cash flow
- Evaluasi kebutuhan pendanaan
- Plan untuk seasonal variation

## KPI Cash Flow yang Penting

1. **Operating Cash Flow Ratio**: Cash flow operasional / current liabilities
2. **Cash Conversion Cycle**: Days inventory + days receivable - days payable
3. **Free Cash Flow**: Operating cash flow - capital expenditures
4. **Cash Burn Rate**: Rate penggunaan cash untuk startup

Tri Master Solusindo membantu bisnis Anda dalam mengelola cash flow melalui layanan pembukuan, akuntansi, dan konsultasi keuangan profesional.""",
        "kategori": "keuangan"
    },
    {
        "judul": "PPh UMKM: Fasilitas Pajak yang Menguntungkan untuk Usaha Kecil",
        "ringkasan": "PPh UMKM adalah fasilitas pajak khusus untuk usaha mikro, kecil, dan menengah dengan tarif final 0.5% yang dapat mengurangi beban pajak.",
        "konten": """PPh UMKM adalah fasilitas pajak penghasilan khusus untuk Usaha Mikro, Kecil, dan Menengah yang memberikan tarif final yang lebih rendah dan sederhana.

## Apa itu PPh UMKM?

PPh UMKM adalah pajak penghasilan yang dikenakan dengan tarif final sebesar 0.5% atas bruto dari omzet usaha mikro, kecil, dan menengah. Fasilitas ini diatur dalam PP No. 23 Tahun 2018.

## Kriteria UMKM

Berdasarkan Peraturan Pemerintah, kriteria UMKM adalah:

### Usaha Mikro
- Aset maksimal Rp 50.000.000 (tidak termasuk tanah dan bangunan)
- Omzet maksimal Rp 300.000.000 per tahun

### Usaha Kecil
- Aset Rp 50.000.001 - Rp 500.000.000 (tidak termasuk tanah dan bangunan)
- Omzet Rp 300.000.001 - Rp 2.500.000.000 per tahun

### Usaha Menengah
- Aset Rp 500.000.001 - Rp 10.000.000.000 (tidak termasuk tanah dan bangunan)
- Omzet Rp 2.500.000.001 - Rp 50.000.000.000 per tahun

## Tarif PPh UMKM

### Tarif Final 0.5%
- Dikenakan atas bruto omzet
- Tidak ada pengurangan biaya
- Final (tidak digabung dengan jenis penghasilan lain)

### Tarif Normal
Jika omzet di atas Rp 4.8 miliar per tahun, wajib menggunakan tarif normal PPh Badan:
- 22% untuk tahun pajak 2020-2021
- 20% untuk tahun pajak 2022 ke atas

## Keuntungan PPh UMKM

### 1. Tarif Lebih Rendah
- 0.5% vs tarif normal PPh Badan (20-22%)
- Signifikan mengurangi beban pajak

### 2. Sederhana
- Perhitungan berdasarkan bruto
- Tidak perlu mencatat biaya
- Tidak perlu laporan laba rugi kompleks

### 3. Final
- Tidak digabung dengan penghasilan lain
- Tidak perlu konsolidasi
- Lebih mudah administrasi

## Cara Menghitung PPh UMKM

### Rumus
```
PPh UMKM = Bruto Omzet × 0.5%
```

### Contoh
Jika omzet bulanan Rp 50.000.000:
- PPh UMKM = Rp 50.000.000 × 0.5% = Rp 250.000

Jika omzet tahunan Rp 600.000.000:
- PPh UMKM = Rp 600.000.000 × 0.5% = Rp 3.000.000

## Kewajiban Pemotong PPh UMKM

Pihak yang membayarkan ke UMKM harus:
1. Memotong PPh UMKM 0.5% dari pembayaran
2. Menyetor ke kas negara paling lambat tanggal 10 bulan berikutnya
3. Melaporkan SPT Masa PPh 23 paling lambat tanggal 20 bulan berikutnya

## Dokumen yang Diperlukan

Untuk memanfaatkan fasilitas PPh UMKM:
1. Surat Keterangan Usaha dari instansi berwenang
2. NPWP
3. Bukti kepemilikan usaha
4. Laporan omzet

## Pengecualian PPh UMKM

Beberapa jenis usaha tidak dapat menggunakan fasilitas PPh UMKM:
- Pertambangan minyak dan gas bumi
- Pertambangan panas bumi
- Konstruksi dengan kontrak besar
- Jasa keuangan
- Perdagangan besar dengan omzet tinggi

## Transisi ke Tarif Normal

Jika omzet melebihi Rp 4.8 miliar per tahun:
- Wajib menggunakan tarif normal PPh Badan
- Perlu pembukuan lengkap
- Perlu laporan keuangan audited
- Konsultasi dengan konsultan pajak

## Tips Memaksimalkan Fasilitas PPh UMKM

### 1. Monitoring Omzet
- Track omzet secara rutin
- Prediksi kapan akan melebihi batas
- Plan transisi ke tarif normal

### 2. Dokumentasi Lengkap
- Simpan semua bukti transaksi
- Catat omzet dengan sistematis
- Siap untuk audit jika diperlukan

### 3. Konsultasi Profesional
- Diskusikan dengan konsultan pajak
- Pahami implikasi perpajakan
- Plan strategi perpajakan

### 4. Perencanaan Bisnis
- Pertimbangkan struktur bisnis
- Evaluasi opsi perpajakan
- Optimalkan efisiensi pajak

## Common Mistakes

### 1. Salah Klasifikasi
Mengklasifikasikan usaha sebagai UMKM padahal tidak memenuhi kriteria.

### 2. Tidak Update Omzet
Tidak memonitor omzet sehingga melebihi batas tanpa sadar.

### 3. Dokumentasi Buruk
Tidak memiliki bukti transaksi yang cukup.

### 4. Tidak Konsultasi
Tidak berkonsultasi dengan ahli pajak untuk kasus grey area.

## Perubahan Regulasi Terbaru

Perhatikan update regulasi terkait PPh UMKM:
- Perubahan batas omzet
- Perubahan tarif
- Perubahan kriteria
- Fasilitas tambahan

Tri Master Solusindo membantu UMKM dalam:
- Menentukan kelayakan fasilitas PPh UMKM
- Perhitungan dan pelaporan PPh UMKM
- Perencanaan transisi ke tarif normal
- Konsultasi perpajakan UMKM secara menyeluruh.""",
        "kategori": "perpajakan"
    },
    {
        "judul": "Audit Keuangan: Mengapa Penting untuk Bisnis Anda",
        "ringkasan": "Audit keuangan memberikan validasi independen atas laporan keuangan, meningkatkan kredibilitas, dan membantu dalam pengambilan keputusan strategis.",
        "konten": """Audit keuangan adalah proses pemeriksaan sistematis dan independen atas laporan keuangan perusahaan untuk memberikan keyakinan bahwa laporan tersebut disajikan secara wajar dan sesuai dengan standar akuntansi.

## Jenis Audit Keuangan

### 1. Audit Eksternal (External Audit)
Dilakukan oleh auditor independen (KAP - Kantor Akuntan Publik):
- Wajib untuk perusahaan tertentu (Tbk, perusahaan publik)
- Memberikan opini audit
- Mengikuti standar audit profesional

### 2. Audit Internal (Internal Audit)
Dilakukan oleh tim audit internal perusahaan:
- Fokus pada kontrol internal dan risk management
- Melaporkan ke manajemen dan direksi
- Membantu improvement proses

### 3. Audit Forensik
Dilakukan untuk investigasi:
- Fraud detection
- Investigasi kecurangan
- Litigation support

## Tujuan Audit Keuangan

### 1. Validasi Laporan Keuangan
Memastikan laporan keuangan:
- Disajikan secara wajar
- Bebas dari material misstatement
- Sesuai standar akuntansi (PSAK)

### 2. Meningkatkan Kredibilitas
Audit memberikan:
- Keyakinan kepada stakeholder
- Kredibilitas untuk investor
- Trust dari kreditor

### 3. Identifikasi Risiko
Audit membantu:
- Mendeteksi fraud
- Identifikasi weakness internal control
- Rekomendasi improvement

### 4. Kepatuhan Regulasi
Memastikan:
- Kepatuhan dengan regulasi
- Compliance dengan standar
- Menghindari sanksi legal

## Kapan Perlu Audit?

### Wajib Audit
Perusahaan yang wajib audit:
- Perusahaan Tbk (Go Public)
- Perusahaan dengan aset > Rp 200 miliar
- Perusahaan dengan omzet > Rp 50 miliar
- Entitas yang menerima dana publik

### Disarankan Audit
Perusahaan yang disarankan audit:
- Mengajukan pinjaman bank besar
- Mencari investor
- Transisi ke perusahaan besar
- Persiapan IPO

### Voluntary Audit
Perusahaan yang memilih audit:
- Untuk improvement internal
- Best practice governance
- Persiapan ekspansi

## Proses Audit Keuangan

### 1. Planning Phase
- Understanding bisnis
- Risk assessment
- Planning audit strategy
- Engagement letter

### 2. Fieldwork
- Testing controls
- Substantive testing
- Sampling transactions
- Interview manajemen

### 3. Reporting
- Draft audit report
- Management letter
- Final audit report
- Opini audit

## Jenis Opini Audit

### 1. Unqualified Opinion (Wajar Tanpa Pengecualian)
Laporan keuangan disajikan secara wajar sesuai standar.

### 2. Qualified Opinion (Wajar dengan Pengecualian)
Ada material misstatement tapi tidak menyeluruh.

### 3. Adverse Opinion (Tidak Wajar)
Laporan keuangan tidak disajikan secara wajar.

### 4. Disclaimer Opinion (Tidak Memberikan Pendapat)
Auditor tidak dapat memberikan opini karena keterbatasan.

## Manfaat Audit untuk Bisnis

### 1. Akses Pendanaan
- Bank lebih percaya
- Investor tertarik
- Kreditor lebih willing

### 2. Improvement Operasional
- Identifikasi inefficiency
- Rekomendasi improvement
- Better internal controls

### 3. Risk Management
- Deteksi fraud lebih awal
- Mitigate financial risks
- Better governance

### 4. Compliance
- Kepatuhan regulasi
- Menghindari sanksi
- Good corporate governance

## Persiapan untuk Audit

### 1. Dokumentasi Lengkap
- Laporan keuangan
- Bukti transaksi
- Kontrak dan agreement
- Dokumen legal

### 2. Sistem Pembukuan Baik
- Software akuntansi
- Reconciliation rutin
- Internal controls
- SOP keuangan

### 3. Tim Internal Siap
- Point person untuk audit
- Akses ke informasi
- Koordinasi dengan auditor
- Response timely

### 4. Clean Up Issues
- Resolve known issues
- Fix material weaknesses
- Update policies
- Train staff

## Biaya Audit

Biaya audit bervariasi tergantung:
- Ukuran perusahaan
- Kompleksitas bisnis
- Scope audit
- Reputation KAP

Range biaya:
- UMKM: Rp 10-50 juta
- Perusahaan menengah: Rp 50-200 juta
- Perusahaan besar: Rp 200 juta - miliaran

## Tips Memilih Auditor

### 1. Reputasi
- Cek track record
- Referensi klien
- License dan sertifikasi

### 2. Experience
- Pengalaman di industri
- Understanding bisnis
- Expertise yang relevan

### 3. Independence
- Tidak ada conflict of interest
- Objektif dan independen
- Professional ethics

### 4. Communication
- Responsiveness
- Clarity dalam reporting
- Kemampuan menjelaskan

## Alternatif untuk UMKM

Jika audit terlalu mahal, UMKM bisa:
- Review keuangan (bukan full audit)
- Compilation engagement
- Konsultasi dengan akuntan
- Software dengan built-in controls

Tri Master Solusindo membantu perusahaan dalam:
- Persiapan audit keuangan
- Review laporan keuangan
- Improvement pembukuan
- Konsultasi akuntansi dan keuangan.""",
        "kategori": "akuntansi"
    },
    {
        "judul": "Tax Planning vs Tax Evasion: Beda Konsep, Beda Konsekuensi",
        "ringkasan": "Memahami perbedaan tax planning (legal) dan tax evasion (ilegal) untuk mengoptimalkan beban pajak tanpa melanggar hukum.",
        "konten": """Tax planning dan tax evasion adalah dua konsep yang sering disalahartikan. Memahami perbedaannya sangat penting untuk mengoptimalkan beban pajak secara legal dan menghindari masalah hukum.

## Tax Planning (Perencanaan Pajak)

### Definisi
Tax planning adalah upaya legal untuk mengurangi beban pajak dengan memanfaatkan fasilitas, insentif, dan celah perpajakan yang disediakan oleh undang-undang.

### Karakteristik
- **Legal**: Sesuai dengan regulasi perpajakan
- **Transparan**: Dapat dijelaskan dan didokumentasi
- **Strategis**: Jangka panjang dan terencana
- **Etis**: Tidak melanggar moral bisnis

### Contoh Tax Planning
1. **Memanfaatkan PTKP**
   - Optimalkan PTKP untuk karyawan
   - Update status pernikahan/anak
   - Struktur gaji yang efisien

2. **Fasilitas Pajak**
   - PPh UMKM untuk usaha kecil
   - Tax holiday untuk industri tertentu
   - Tax allowance untuk investasi

3. **Struktur Bisnis**
   - Pilih bentuk badan usaha yang optimal
   - Lokasi bisnis yang menguntungkan
   - Struktur kepemilikan yang efisien

4. **Timing Strategis**
   - Recognition penghasilan
   - Deduction pengeluaran
   - Inventory valuation

### Manfaat Tax Planning
- Mengurangi beban pajak secara legal
- Meningkatkan cash flow
- Efisiensi operasional
- Kompetitivitas bisnis

## Tax Evasion (Penghindaran Pajak Ilegal)

### Definisi
Tax evasion adalah tindakan ilegal untuk menghindari atau mengurangi kewajiban pajak dengan cara melanggar undang-undang perpajakan.

### Karakteristik
- **Ilegal**: Melanggar regulasi perpajakan
- **Tidak Transparan**: Disembunyikan atau dimanipulasi
- **Jangka Pendek**: Fokus pada penghematan instan
- **Tidak Etis**: Melanggar moral dan hukum

### Contoh Tax Evasion
1. **Underreporting Penghasilan**
   - Tidak melaporkan semua pendapatan
   - Double bookkeeping
   - Cash transaction tidak tercatat

2. **Overclaiming Deduction**
   - Klaim biaya palsu
   - Inflasi pengeluaran
   - Personal expense sebagai business expense

3. **Fake Documents**
   - Faktur pajak palsu
   - Bukti transaksi fiktif
   - Kontrak tidak nyata

4. **Transfer Pricing Abuse**
   - Manipulasi harga antar related party
   - Profit shifting ke tax haven
   - Artificial transactions

### Konsekuensi Tax Evasion
- **Sanksi Administratif**: Denda dan bunga
- **Sanksi Pidana**: Penjara dan denda pidana
- **Reputasi Rusak**: Trust hilang dari stakeholder
- **Kerugian Finansial**: Total biaya lebih besar dari pajak yang dihindari

## Perbedaan Kunci

| Aspek | Tax Planning | Tax Evasion |
|-------|-------------|-------------|
| Legalitas | Legal sesuai UU | Ilegal melanggar UU |
| Transparansi | Transparan dan terdokumentasi | Disembunyikan/dimanipulasi |
| Jangka Waktu | Jangka panjang dan strategis | Jangka pendek instan |
| Risiko | Risiko minimal | Risiko tinggi |
| Dokumentasi | Dokumentasi lengkap | Dokumentasi palsu/tidak ada |
| Etika | Etis dan profesional | Tidak etis |

## Prinsip Tax Planning yang Baik

### 1. Compliance First
Pastikan semua aktivitas sesuai regulasi:
- Update dengan regulasi terbaru
- Konsultasi dengan ahli pajak
- Dokumentasi lengkap

### 2. Substance Over Form
Fokus pada substansi bisnis:
- Transaksi nyata, bukan paper only
- Business purpose yang jelas
- Economic substance

### 3. Arms Length Principle
Untuk transaksi related party:
- Harga pasar wajar
- Comparable dengan pihak ketiga
- Dokumentasi transfer pricing

### 4. Documentation
Dokumentasi yang kuat:
- Bukti transaksi lengkap
- Rationale perencanaan pajak
- Ready untuk audit

## Red Flags yang Harus Dihindari

### 1. Aggressive Tax Planning
- Struktur yang terlalu kompleks
- Tax haven tanpa business reason
- Circular transactions

### 2. Grey Area
- Interpretasi regulasi yang dipaksakan
- Celah hukum yang borderline
- Practice yang tidak umum

### 3. Lack of Substance
- Paper transactions only
- No economic benefit
- Artificial arrangements

## Best Practices Tax Planning

### 1. Professional Advice
- Konsultasi dengan konsultan pajak
- Second opinion untuk strategi agresif
- Update dengan regulasi

### 2. Regular Review
- Review strategi pajak tahunan
- Adjust dengan perubahan bisnis
- Monitor perubahan regulasi

### 3. Documentation
- Dokumentasi lengkap
- Rationale tertulis
- Ready untuk examination

### 4. Ethical Consideration
- Pertimbangkan reputasi
- Evaluasi risk vs benefit
- Long-term sustainability

## Tools untuk Tax Planning

### 1. Tax Software
- Software perpajakan
- Calculator pajak
- Compliance tools

### 2. Professional Services
- Konsultan pajak
- Tax advisor
- Legal counsel

### 3. Education
- Seminar pajak
- Training internal
- Update regulasi

## Case Study

### Tax Planning Example
Perusahaan manufaktur:
- Investasi di daerah industri khusus (tax allowance)
- Memanfaatkan fasilitas PPh UMKM untuk divisi kecil
- Struktur gaji yang optimal PTKP
- Hasil: Penghematan pajak 15-20% secara legal

### Tax Evasion Example
Perusahaan retail:
- Underreporting penjualan cash 30%
- Fake invoices untuk deduction
- Transfer pricing abuse
- Hasil: Sanksi pidana, denda 200%, reputasi rusak

## Kesimpulan

Tax planning adalah:
- Legal dan etis
- Strategis dan terencana
- Menguntungkan jangka panjang
- Mendukung pertumbuhan bisnis

Tax evasion adalah:
- Ilegal dan berisiko
- Jangka pendek dan instan
- Merusak reputasi
- Konsekuensi berat

Tri Master Solusindo membantu perusahaan dalam:
- Tax planning yang legal dan optimal
- Compliance dengan regulasi
- Strategi perpajakan jangka panjang
- Konsultasi profesional dan etis""",
        "kategori": "perpajakan"
    }
]

# Seed Artikel ke Database
print("Mulai seeding artikel...")

for artikel in artikel_data:
    slug = slugify(artikel["judul"])
    
    # Cek apakah artikel sudah ada
    if Artikel.objects.filter(slug=slug).exists():
        print(f"Artikel '{artikel['judul']}' sudah ada, skip...")
        continue
    
    # Buat artikel baru
    new_artikel = Artikel.objects.create(
        judul=artikel["judul"],
        slug=slug,
        ringkasan=artikel["ringkasan"],
        konten=artikel["konten"],
        tanggal=datetime.now()
    )
    
    print(f"✓ Artikel '{artikel['judul']}' berhasil ditambahkan")

print("\nSeeding artikel selesai!")
print(f"Total artikel di database: {Artikel.objects.count()}")
