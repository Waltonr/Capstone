from rest_framework import serializers
from .models import Housing


class HousingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Housing
        fields = ['id', 'name', 'location_id']
        depth = 1