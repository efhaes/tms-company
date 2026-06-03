from rest_framework import serializers
from .models import (
    Layanan,
    FiturLayanan,
    Artikel,
    PesanKontak
)


class FiturLayananSerializer(serializers.ModelSerializer):
    class Meta:
        model = FiturLayanan
        fields = ['id', 'nama']


class LayananSerializer(serializers.ModelSerializer):
    fitur = FiturLayananSerializer(
        many=True,
        read_only=True
    )

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
            'fitur'
        ]


class ArtikelSerializer(serializers.ModelSerializer):
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