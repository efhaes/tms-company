from rest_framework import viewsets, generics
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)

from .models import (
    Layanan,
    Artikel,
    PesanKontak,
    FiturLayanan
)

from .serializers import (
    LayananSerializer,
    ArtikelListSerializer,
    ArtikelDetailSerializer,
    PesanKontakSerializer,
    FiturLayananSerializer
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