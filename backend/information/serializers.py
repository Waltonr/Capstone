from rest_framework import serializers
from .models import Information


class InformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Information
        fields = ['id', 'age', 'about', 'user_id']
        depth = 1