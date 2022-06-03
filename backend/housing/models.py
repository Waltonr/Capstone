from unicodedata import name
from django.db import models
from locations.models import Location

# Create your models here.

class Housing(models.Model):
    name = models.CharField(max_length=255)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
