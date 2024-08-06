from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from profileapp.models import Profile
# Create your views here.

def register(request):
    if request.method == 'POST':
        name = request.POST['name']
        lastname = request.POST['lastname']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        password2 = request.POST['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                messages.info(request, "Email is already exist!")
                print("email")
                return redirect('../register/')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username is already taken!')
                print("username")
                return redirect('../register/')
            else:
                print("aa1")
                user = User.objects.create_user(username=username, email=email, password=password, first_name=name, last_name=lastname)
                print("aa2")
                user.save()
                print("aa3")

                user_model = User.objects.get(username=username)
                print(type(user_model))
                new_profile = Profile.objects.create(user=user_model, username=username, name=name, lastname=lastname, password=password)
                new_profile.save()
                return redirect('../login/')
        else:
            print("bb")
            messages.info((request, "Passwords do not match"))
            return redirect('register/')

    return render(request, 'register.html')


def login(request):
    return render(request, 'login.html')
