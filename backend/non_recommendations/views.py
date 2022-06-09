from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Non_Recommendation
from .serializers import Non_RecommendationSerializer

# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_nonrecommendations(request):
    if request.method == 'GET':
        recommend = Non_Recommendation.objects.all()
        serializer = Non_RecommendationSerializer(recommend, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        print('USER', f'{request.data} {request.user.email} {request.user.username}')
        serializer = Non_RecommendationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def nonrecommendation_detail(request, pk):
    recommend = get_object_or_404(Non_Recommendation, pk=pk)
    if request.method == 'PUT':
        serializer = Non_RecommendationSerializer(recommend, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        recommend.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
