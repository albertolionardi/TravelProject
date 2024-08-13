from django.shortcuts import render
from activity.models import Activity
from django.http import JsonResponse
from django.db.models import Q
def activity_list(request):
    activities = Activity.objects.all()
    data = [
        {
            "image": activity.image.url,
            "title": activity.title,
            "description": activity.description,
            "activity": activity.name,
            "category" : activity.category,
            "price" : activity.price,
            "description_en" : activity.description_en,
            "description_id" : activity.description_id,
            "long_description_en" : activity.long_description_en,
            "long_description_id" : activity.long_description_id
        }
        for activity in activities
    ]
    return JsonResponse(data, safe=False)

def activity_detail(request, activity_name):
    print(f"Received request for activity: {activity_name}")
    try:
        activity = Activity.objects.get(name=activity_name)
        data = {
            "title": activity.title,
            "image": activity.image.url,
            "description": activity.description,
            "price" : activity.price,
            "description_en" : activity.description_en,
            "description_id" : activity.description_id,
            "long_description_en" : activity.long_description_en,
            "long_description_id" : activity.long_description_id,
            "latitude" : activity.latitude,
            "longitude" : activity.longitude,
        }
        return JsonResponse(data, safe=False)
    except Activity.DoesNotExist:
        return JsonResponse({'error': 'Activity not found'}, status=404)
def search_activities(request):
    query = request.GET.get('q', '')
    if query:
        results = Activity.objects.filter(
            Q(name__icontains=query) |
            Q(title__icontains=query) |
            Q(description__icontains=query) |
            Q(category__icontains=query)
        )
    else:
        results = Activity.objects.all()  # Return all activities if no query is provided
    
    data = [
        {
            "name": activity.name,
            "title": activity.title,
            "image": activity.image.url,
            "description": activity.description,
            "category": activity.category,
            "price": activity.price,
            "latitude": activity.latitude,
            "longitude": activity.longitude
        }
        for activity in results
    ]
    
    return JsonResponse(data, safe=False)

def check_email(request):
    email = request.GET.get('email', None)

    if email is None:
        return JsonResponse({'error': 'Email is required'}, status=400)

    try:
        user_exists = User.objects.filter(email=email).exists()
        return JsonResponse({'exists': user_exists})
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)