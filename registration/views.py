from django.contrib import messages, auth
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from profileapp.models import Profile


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
                return redirect('../register/')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'Username is already taken!')
                return redirect('../register/')
            else:
                user = User.objects.create_user(username=username, email=email, password=password, first_name=name,
                                                last_name=lastname)
                user.save()

                user_model = User.objects.get(username=username)
                print(type(user_model))
                new_profile = Profile.objects.create(user=user_model, username=username, name=name, lastname=lastname,
                                                     password=password)
                new_profile.save()
                return redirect('../login/')
        else:
            messages.info((request, "Passwords do not match"))
            return redirect('register/')

    return render(request, 'register.html')


def log_in(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            # Redirect to a success page.
            return redirect('/')
        else:
            messages.info(request, "Incorrect username or password.")
            return redirect('../login/')

    return render(request, 'login.html')
