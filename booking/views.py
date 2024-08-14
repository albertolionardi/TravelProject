from django.shortcuts import render

def booking(request, activity_name):
    # Simulated booking details, you would typically fetch this from a database
    booking_details = {
        'hikingMountBromo': {
            'title': 'Hiking Mount Bromo',
            'description': 'Experience the breathtaking views from the summit of Mount Bromo.',
            'image': '/static/images/bromo.jpg',
        },
        'campingRinjani': {
            'title': 'Camping Rinjani',
            'description': 'Explore the beauty of Rinjani while camping.',
            'image': '/static/images/rinjani.jpg',
        },
    }

    activity = booking_details.get(activity_name.lower(), None)
    if activity:
        return JsonResponse(activity)
    else:
        return JsonResponse({'error': 'Activity not found'}, status=404)