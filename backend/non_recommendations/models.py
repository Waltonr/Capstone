from django.db import models
from authentication.models import User

# Create your models here.

class Non_Recommendation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=255)
    housing = models.CharField(max_length=255)