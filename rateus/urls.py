from django.contrib import admin
from django.urls import path, include
from .views import rateus

urlpatterns = [
        path('', rateus),
    ]
