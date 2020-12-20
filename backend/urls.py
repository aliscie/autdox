# url let to index.html
from django.contrib import admin
from django.urls import path, include
from .views import index, cookies

urlpatterns = [
    path('cookies/', cookies),
    path('', index, name='index'),
    path('accounts/profile/<str:user>/', index, name='index'),
    path('accounts/profile/', index, name='index'),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
]
