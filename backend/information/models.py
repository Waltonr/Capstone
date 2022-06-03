from django.db import models
from authentication.models import User

# Create your models here.

class Information(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    age = models.IntegerField()
    about = models.CharField(max_length=255)
    