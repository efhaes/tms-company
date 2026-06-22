from rest_framework import viewsets, generics
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)

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
            order.save()
        
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