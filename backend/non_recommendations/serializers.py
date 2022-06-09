from rest_framework import serializers
from .models import Non_Recommendation

class Non_RecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Non_Recommendation
        fields = ['id', 'location', 'housing', 'user_id']