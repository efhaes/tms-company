from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    FiturLayananViewSet, 
    LayananViewSet, 
    ArtikelViewSet, 
    PesanKontakCreateView, 
    PesanKontakListView,
    OrderLayananViewSet,
    TemplateWhatsAppViewSet,
    ProfilPerusahaanViewSet,
    PengaturanSEOViewSet,
    OneDriveLoginURLViewSet
)

router = DefaultRouter()
router.register('layanan', LayananViewSet)
router.register('fitur', FiturLayananViewSet)
router.register('artikel', ArtikelViewSet)
router.register('orders', OrderLayananViewSet)
router.register('templates', TemplateWhatsAppViewSet)
router.register('profil', ProfilPerusahaanViewSet)
router.register('seo', PengaturanSEOViewSet)
router.register('onedrive', OneDriveLoginURLViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('kontak/', PesanKontakCreateView.as_view()),
    path('kontak/inbox/', PesanKontakListView.as_view()),
]