from rest_framework import serializers
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


class FiturLayananSerializer(serializers.ModelSerializer):
    class Meta:
        model = FiturLayanan
        fields = ['id', 'nama']


class PengaturanSEOSerializer(serializers.ModelSerializer):
    class Meta:
        model = PengaturanSEO
        fields = [
            'id',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'canonical_url',
            'og_title',
            'og_description',
            'og_image',
            'updated_at'
        ]

class LayananSerializer(serializers.ModelSerializer):
    fitur = FiturLayananSerializer(
        many=True,
        read_only=True
    )
    seo_settings = PengaturanSEOSerializer(read_only=True)

    class Meta:
        model = Layanan
        fields = [
            'id',
            'nama',
            'slug',
            'foto',
            'deskripsi_singkat',
            'deskripsi',
            'kategori',
            'urutan',
            'aktif',
            'fitur',
            'seo_settings'
        ]


class ArtikelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artikel
        fields = ['id', 'judul', 'slug', 'ringkasan', 'tanggal', 'thumbnail']

class ArtikelDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artikel
        fields = '__all__'


class PesanKontakSerializer(serializers.ModelSerializer):
    layanan_nama = serializers.CharField(
        source='layanan.nama',
        read_only=True
    )

    class Meta:
        model = PesanKontak
        fields = [
            'id',
            'layanan',
            'layanan_nama',
            'nama',
            'perusahaan',
            'bidang_usaha',
            'email',
            'telepon',
            'pesan',
            'created_at',
            'sudah_dibaca'
        ]


class OrderLayananSerializer(serializers.ModelSerializer):
    layanan_nama = serializers.CharField(
        source='layanan.nama',
        read_only=True
    )
    wa_message = serializers.CharField(read_only=True)
    
    class Meta:
        model = OrderLayanan
        fields = [
            'id',
            'nama',
            'email',
            'nomor_wa',
            'layanan',
            'layanan_nama',
            'pesan',
            'status',
            'wa_message',
            'created_at',
            'updated_at'
        ]


class TemplateWhatsAppSerializer(serializers.ModelSerializer):
    layanan_nama = serializers.CharField(
        source='layanan.nama',
        read_only=True
    )
    
    class Meta:
        model = TemplateWhatsApp
        fields = [
            'id',
            'layanan',
            'layanan_nama',
            'nama_template',
            'isi_template',
            'aktif',
            'created_at',
            'updated_at'
        ]


class ProfilPerusahaanSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProfilPerusahaan
        fields = [
            'id',
            'nama_perusahaan',
            'foto_perusahaan',
            'foto_struktur_organisasi',
            'deskripsi_singkat',
            'alamat',
            'email',
            'telepon',
            'nomor_wa',
            'updated_at'
        ]


class PengaturanSEOSerializer(serializers.ModelSerializer):
    layanan_nama = serializers.CharField(
        source='layanan.nama',
        read_only=True
    )
    
    class Meta:
        model = PengaturanSEO
        fields = [
            'id',
            'layanan',
            'layanan_nama',
            'meta_title',
            'meta_description',
            'meta_keywords',
            'canonical_url',
            'og_title',
            'og_description',
            'og_image',
            'updated_at'
        ]


class OneDriveLoginURLSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneDriveLoginURL
        fields = [
            'id',
            'nama',
            'url',
            'deskripsi',
            'aktif',
            'created_at',
            'updated_at'
        ]