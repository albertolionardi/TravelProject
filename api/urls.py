from django.contrib import admin
from django.urls import path, include
from .views import activity_list, activity_detail, search_activities, check_email



urlpatterns = [
    path('activities/', activity_list, name='activity_list'),
    path('activities/<str:activity_name>/', activity_detail),
    path('search/', search_activities, name='search_activities'),
    path('check-email/', check_email)
]
