from django.contrib import admin
from django.urls import path, include
from .views import home, start_chat
urlpatterns = [
    path('', home, name="home"),
    path('chat/<int:room_id>/', start_chat, name="chat"),
]