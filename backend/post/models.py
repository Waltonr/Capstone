from pyexpat import model
from django.db import models
from authentication.models import User

# Create your models here.

class Post (models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
