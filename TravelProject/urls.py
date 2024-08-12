"""
URL configuration for TravelProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
    path('profile/', include('profileapp.urls')),
    path('account/', include('registration.urls')),
    path('', include('home.urls')),
    path('bookings/', include('booking.urls')),
    path('description/', include('description.urls')), ## Redirect to Home
    path('api/', include('api.urls')),
    path('rateus/', include('rateus.urls')),
    path('payment/', include('payment.urls')),
    re_path(r'^description/', TemplateView.as_view(template_name='home.html'), name='description_cactch'), ## Accessing Directly Through URL
    re_path(r'^payment/', TemplateView.as_view(template_name='home.html'), name='payment_catch'), ## Accessing Directly Through URL



]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)