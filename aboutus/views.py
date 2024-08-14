from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import redirect

def aboutus(request) :
    return render(request,"home.html")
