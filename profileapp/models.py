from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.TextField()
    name = models.TextField()
    lastname = models.TextField()
    password = models.TextField()

    def __str__(self):
        return User.username
