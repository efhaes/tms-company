from django.contrib import admin
from .models import (
    Layanan, 
    FiturLayanan, 
    Artikel, 
    PesanKontak,
    OrderLayanan,
    TemplateWhatsApp,
    ProfilPerusahaan,
    PengaturanSEO,
    OneDriveLoginURL
)


class FiturLayananInline(admin.TabularInline):
    model = FiturLayanan
    extra = 1


@admin.register(Layanan)
class LayananAdmin(admin.ModelAdmin):
    list_display = ['nama', 'kategori', 'urutan', 'aktif']
    list_filter = ['kategori', 'aktif']
    search_fields = ['nama', 'deskripsi_singkat']
    list_editable = ['urutan', 'aktif']
    inlines = [FiturLayananInline]
    prepopulated_fields = {'slug': ['nama']}


@admin.register(Artikel)
class ArtikelAdmin(admin.ModelAdmin):
    list_display = ['judul', 'tanggal']
    list_filter = ['tanggal']
    search_fields = ['judul', 'ringkasan']
    prepopulated_fields = {'slug': ['judul']}


@admin.register(PesanKontak)
class PesanKontakAdmin(admin.ModelAdmin):
    list_display = ['nama', 'email', 'layanan', 'created_at', 'sudah_dibaca']
    list_filter = ['sudah_dibaca', 'layanan', 'created_at']
    search_fields = ['nama', 'email', 'perusahaan']
    readonly_fields = ['created_at']
    list_editable = ['sudah_dibaca']


@admin.register(OrderLayanan)
class OrderLayananAdmin(admin.ModelAdmin):
    list_display = ['nama', 'email', 'layanan', 'status', 'created_at']
    list_filter = ['status', 'layanan', 'created_at']
    search_fields = ['nama', 'email', 'nomor_wa']
    readonly_fields = ['created_at', 'updated_at']
    list_editable = ['status']


@admin.register(TemplateWhatsApp)
class TemplateWhatsAppAdmin(admin.ModelAdmin):
    list_display = ['nama_template', 'layanan', 'aktif', 'created_at']
    list_filter = ['aktif', 'layanan', 'created_at']
    search_fields = ['nama_template', 'isi_template']
    list_editable = ['aktif']


@admin.register(ProfilPerusahaan)
class ProfilPerusahaanAdmin(admin.ModelAdmin):
    list_display = ['nama_perusahaan', 'updated_at']
    readonly_fields = ['updated_at']


@admin.register(PengaturanSEO)
class PengaturanSEOAdmin(admin.ModelAdmin):
    list_display = ['layanan', 'meta_title', 'updated_at']
    search_fields = ['meta_title', 'meta_description']
    readonly_fields = ['updated_at']


@admin.register(OneDriveLoginURL)
class OneDriveLoginURLAdmin(admin.ModelAdmin):
    list_display = ['nama', 'aktif', 'created_at']
    list_filter = ['aktif', 'created_at']
    search_fields = ['nama', 'deskripsi']
    list_editable = ['aktif']
    readonly_fields = ['created_at', 'updated_at']
