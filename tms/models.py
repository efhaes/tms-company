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