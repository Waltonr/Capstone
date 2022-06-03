from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Housing
from .serializers import HousingSerializer

# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_housings(request):
    if request.method == 'GET':
        housings = Housing.objects.all()
        serializer = HousingSerializer(housings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_housing(request):
    print('User', f'{request.data} {request.user.email} {request.user.username}')
    if request.method == 'POST':
        serializer = HousingSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
