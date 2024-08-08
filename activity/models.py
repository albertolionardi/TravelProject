from django.db import models

from django.db import models

class Activity(models.Model):
    name = models.CharField(max_length=100, unique=True)
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='img/')
    description = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name