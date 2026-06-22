from django.db import models

class Layanan(models.Model):
    KATEGORI_CHOICES = [
        ('perpajakan', 'Perpajakan'),
        ('akuntansi', 'Akuntansi'),
        ('lainnya', 'Lainnya'),
    ]

    nama = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    foto = models.ImageField(upload_to='layanan/', blank=True, null=True) 
    deskripsi_singkat = models.TextField(max_length=300)
    deskripsi = models.TextField()

    kategori = models.CharField(
        max_length=50,
        choices=KATEGORI_CHOICES
    )

    urutan = models.IntegerField(default=0)
    aktif = models.BooleanField(default=True)

    class Meta:
        ordering = ['urutan']

    def __str__(self):
        return self.nama


class FiturLayanan(models.Model):
    layanan = models.ForeignKey(
        Layanan,
        on_delete=models.CASCADE,
        related_name='fitur'
    )

    nama = models.CharField(max_length=200)

    def __str__(self):
        return self.nama


class Artikel(models.Model):
    judul = models.CharField(max_length=300)
    slug = models.SlugField(unique=True)
    ringkasan = models.TextField(max_length=300)
    konten = models.TextField()
    tanggal = models.DateTimeField(auto_now_add=True)
    thumbnail = models.ImageField(
        upload_to='artikel/',
        blank=True,
        null=True
    )

    class Meta:
        ordering = ['-tanggal']

    def __str__(self):
        return self.judul


class PesanKontak(models.Model):
    layanan = models.ForeignKey(
        Layanan,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    nama = models.CharField(max_length=100)
    perusahaan = models.CharField(max_length=150, blank=True)
    bidang_usaha = models.CharField(max_length=150, blank=True)

    email = models.EmailField()
    telepon = models.CharField(max_length=20)

    pesan = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    sudah_dibaca = models.BooleanField(default=False)

    def __str__(self):
        return self.nama


class OrderLayanan(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('diproses', 'Diproses'),
        ('selesai', 'Selesai'),
        ('dibatalkan', 'Dibatalkan'),
    ]
    
    nama = models.CharField(max_length=100)
    email = models.EmailField()
    nomor_wa = models.CharField(max_length=20)
    layanan = models.ForeignKey(
        Layanan,
        on_delete=models.CASCADE,
        related_name='orders'
    )
    pesan = models.TextField(blank=True)
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.nama} - {self.layanan.nama}"


class TemplateWhatsApp(models.Model):
    layanan = models.ForeignKey(
        Layanan,
        on_delete=models.CASCADE,
        related_name='wa_templates'
    )
    nama_template = models.CharField(max_length=200)
    isi_template = models.TextField()
    aktif = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ['layanan', 'nama_template']
    
    def __str__(self):
        return f"{self.layanan.nama} - {self.nama_template}"
    
    def generate_message(self, nama, order_id=None):
        message = self.isi_template
        message = message.replace('{nama}', nama)
        message = message.replace('{layanan}', self.layanan.nama)
        if order_id:
            message = message.replace('{order_id}', str(order_id))
        return message


class ProfilPerusahaan(models.Model):
    nama_perusahaan = models.CharField(max_length=200, default='Tri Master Solusindo')
    foto_perusahaan = models.ImageField(
        upload_to='profil/',
        blank=True,
        null=True
    )
    foto_struktur_organisasi = models.ImageField(
        upload_to='profil/',
        blank=True,
        null=True
    )
    deskripsi_singkat = models.TextField(max_length=500, blank=True)
    alamat = models.TextField(blank=True)
    email = models.EmailField(blank=True)
    telepon = models.CharField(max_length=20, blank=True)
    nomor_wa = models.CharField(max_length=20, blank=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Profil Perusahaan'
        verbose_name_plural = 'Profil Perusahaan'
    
    def __str__(self):
        return self.nama_perusahaan


class PengaturanSEO(models.Model):
    layanan = models.OneToOneField(
        Layanan,
        on_delete=models.CASCADE,
        related_name='seo_settings'
    )
    meta_title = models.CharField(max_length=200, blank=True)
    meta_description = models.TextField(blank=True)
    meta_keywords = models.CharField(max_length=500, blank=True)
    canonical_url = models.URLField(blank=True)
    og_title = models.CharField(max_length=200, blank=True)
    og_description = models.TextField(blank=True)
    og_image = models.ImageField(
        upload_to='seo/',
        blank=True,
        null=True
    )
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'Pengaturan SEO'
        verbose_name_plural = 'Pengaturan SEO'
    
    def __str__(self):
        return f"SEO - {self.layanan.nama}"


class OneDriveLoginURL(models.Model):
    nama = models.CharField(max_length=200)
    url = models.URLField()
    deskripsi = models.TextField(blank=True)
    aktif = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = 'OneDrive Login URL'
        verbose_name_plural = 'OneDrive Login URLs'
    
    def __str__(self):
        return self.nama