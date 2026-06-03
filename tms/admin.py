from django.contrib import admin
from .models import Layanan, FiturLayanan, Artikel, PesanKontak


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
