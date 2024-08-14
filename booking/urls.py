from django.contrib import admin
from django.urls import path, include
from .views import booking
urlpatterns = [
    path('booking/<str:activity_name>/', booking),]
