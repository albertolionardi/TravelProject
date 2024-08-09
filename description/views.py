from django.shortcuts import render
from activity.models import Activity
from django.http import JsonResponse
from django.shortcuts import redirect

def description(request) :
    return redirect("/")
