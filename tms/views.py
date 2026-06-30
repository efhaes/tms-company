from rest_framework import viewsets, generics, status
from rest_framework.response import Response
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)
from django.http import HttpResponse

from .models import (
    Layanan,
    Artikel,
    PesanKontak,
    FiturLayanan,
    OrderLayanan,
    TemplateWhatsApp,
    ProfilPerusahaan,
    PengaturanSEO,
    OneDriveLoginURL
)

from .serializers import (
    LayananSerializer,
    ArtikelListSerializer,
    ArtikelDetailSerializer,
    PesanKontakSerializer,
    FiturLayananSerializer,
    OrderLayananSerializer,
    TemplateWhatsAppSerializer,
    ProfilPerusahaanSerializer,
    PengaturanSEOSerializer,
    OneDriveLoginURLSerializer
)


class LayananViewSet(viewsets.ModelViewSet):
    queryset = Layanan.objects.all()
    serializer_class = LayananSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Layanan.objects.all()

        return Layanan.objects.filter(
            aktif=True
        )

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]

        return [IsAuthenticated()]



class FiturLayananViewSet(viewsets.ModelViewSet):
    queryset = FiturLayanan.objects.all()
    serializer_class = FiturLayananSerializer

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]

        return [IsAuthenticated()]
    

class ArtikelViewSet(viewsets.ModelViewSet):
    queryset = Artikel.objects.all()
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ArtikelDetailSerializer
        return ArtikelListSerializer


class PesanKontakCreateView(generics.CreateAPIView):
    queryset = PesanKontak.objects.all()
    serializer_class = PesanKontakSerializer
    permission_classes = [AllowAny]


class PesanKontakListView(generics.ListAPIView):
    queryset = (
        PesanKontak.objects
        .select_related('layanan')
        .order_by('-created_at')
    )

    serializer_class = PesanKontakSerializer
    permission_classes = [IsAuthenticated]


class OrderLayananViewSet(viewsets.ModelViewSet):
    queryset = OrderLayanan.objects.select_related('layanan').all()
    serializer_class = OrderLayananSerializer
    
    def get_permissions(self):
        if self.action in ['create']:
            return [AllowAny()]
        return [IsAuthenticated()]
    
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        order = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        
        data = serializer.data
        if hasattr(order, 'wa_message'):
            data['wa_message'] = order.wa_message
            
        return Response(data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        order = serializer.save()
        # Get WhatsApp template for the service
        template = TemplateWhatsApp.objects.filter(
            layanan=order.layanan,
            aktif=True
        ).first()
        
        if template:
            # Generate WhatsApp message
            message = template.generate_message(order.nama, order.id)
            order.wa_message = message
        
        return order


class TemplateWhatsAppViewSet(viewsets.ModelViewSet):
    queryset = TemplateWhatsApp.objects.select_related('layanan').all()
    serializer_class = TemplateWhatsAppSerializer
    permission_classes = [IsAuthenticated]


class ProfilPerusahaanViewSet(viewsets.ModelViewSet):
    queryset = ProfilPerusahaan.objects.all()
    serializer_class = ProfilPerusahaanSerializer
    
    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            return [AllowAny()]
        return [IsAuthenticated()]


class PengaturanSEOViewSet(viewsets.ModelViewSet):
    queryset = PengaturanSEO.objects.select_related('layanan').all()
    serializer_class = PengaturanSEOSerializer
    permission_classes = [IsAuthenticated]


class OneDriveLoginURLViewSet(viewsets.ModelViewSet):
    queryset = OneDriveLoginURL.objects.all()
    serializer_class = OneDriveLoginURLSerializer
    permission_classes = [IsAuthenticated]


def robots_txt(request):
    lines = [
        "User-agent: *",
        "Allow: /",
        "Sitemap: http://localhost:5173/sitemap.xml"  # To be replaced with production domain later
    ]
    return HttpResponse("\n".join(lines), content_type="text/plain")

def sitemap_xml(request):
    from .models import Layanan
    from django.urls import reverse
    
    layanan_list = Layanan.objects.filter(aktif=True)
    
    xml = ['<?xml version="1.0" encoding="UTF-8"?>']
    xml.append('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
    
    # Base URL (frontend usually)
    base_url = "http://localhost:5173"
    
    # Static pages
    static_urls = ['/', '/layanan', '/tentang', '/artikel', '/kontak']
    for url in static_urls:
        xml.append('  <url>')
        xml.append(f'    <loc>{base_url}{url}</loc>')
        xml.append('    <changefreq>weekly</changefreq>')
        xml.append('    <priority>0.8</priority>')
        xml.append('  </url>')
        
    # Layanan dynamic pages
    for layanan in layanan_list:
        xml.append('  <url>')
        xml.append(f'    <loc>{base_url}/layanan/{layanan.slug}</loc>')
        xml.append('    <changefreq>weekly</changefreq>')
        xml.append('    <priority>0.9</priority>')
        xml.append('  </url>')
        
    xml.append('</urlset>')
    
    return HttpResponse("\n".join(xml), content_type="application/xml")