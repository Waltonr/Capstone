from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import ReplySerializer
from replies.models import Reply
from post.models import Post

# Create your views here.

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_reply(request):
    print('User', f'{request.data} {request.user.email} {request.user.username}')
    if request.method == 'POST':
        serializer = ReplySerializer( data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
