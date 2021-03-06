from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Recommendation
from .serializers import RecommendationSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_recommendations(request):
    if request.method == 'GET':
        recommend = Recommendation.objects.all()
        serializer = RecommendationSerializer(recommend, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        print('USER', f'{request.data} {request.user.email} {request.user.username}')
        serializer = RecommendationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE', 'GET'])
@permission_classes([IsAuthenticated])
def recommendation_detail(request, pk):
    recommend = get_object_or_404(Recommendation, pk=pk)
    if request.method == 'PUT':
        serializer = RecommendationSerializer(recommend, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        recommend.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'GET':
        serializer = RecommendationSerializer(recommend)
        return Response(serializer.data, status=status.HTTP_200_OK)
