from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Recommendation
from .serializers import RecommendationSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_recommendations(request):
    if request.method == 'GET':
        recommend = Recommendation.objects.all()
        serializer = RecommendationSerializer(recommend, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
