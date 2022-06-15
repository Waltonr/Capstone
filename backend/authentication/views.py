from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request, pk):
    member = get_object_or_404(User, pk=pk)
    if request.method == 'GET':
        serializer = MyTokenObtainPairSerializer(member)
        return Response(serializer.data, status=status.HTTP_200_OK)