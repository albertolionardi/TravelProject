from django.shortcuts import render
from activity.models import Activity
from django.http import JsonResponse

def activity_list(request):
    activities = Activity.objects.all()
    data = [
        {
            "image": activity.image.url,
            "title": activity.title,
            "description": activity.description,
            "activity": activity.name,
            "category" : activity.category,
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
            "description": activity.description
        }
        return JsonResponse(data, safe=False)
    except Activity.DoesNotExist:
        return JsonResponse({'error': 'Activity not found'}, status=404)