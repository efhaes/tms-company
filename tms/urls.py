from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FiturLayananViewSet, LayananViewSet, ArtikelViewSet, PesanKontakCreateView, PesanKontakListView

router = DefaultRouter()
router.register('layanan', LayananViewSet)
router.register('fitur', FiturLayananViewSet)
router.register('artikel', ArtikelViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('kontak/', PesanKontakCreateView.as_view()),
    path('kontak/inbox/', PesanKontakListView.as_view()),
]