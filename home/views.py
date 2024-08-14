from django.shortcuts import render , redirect
from profileapp.models import Guide, ChatRoom

def home(request) :
    return render(request, "home.html")

def start_chat(request, room_id):
    return render(request, 'chat.html', {'room_id': room_id})
