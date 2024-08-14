from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings

User = get_user_model()


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username

class Guide(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)

    def __str__(self):
        return self.user.username

class ChatRoom(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='chat_rooms')
    guide = models.ForeignKey(Guide, on_delete=models.CASCADE, related_name='chat_rooms')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"ChatRoom between {self.user.username} and {self.guide.user.username}"