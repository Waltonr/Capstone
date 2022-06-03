from django.db import models

# Create your models here.

class Location(models.Model):
    name = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    continent = models.CharField(max_length=255)