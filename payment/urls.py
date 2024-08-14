from django.contrib import admin
from django.urls import path, include
from .views import payment

urlpatterns = [
    path('create-transaction/', payment ),
]
