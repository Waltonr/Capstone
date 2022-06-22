from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from .models import Chat
from .models import Outgoing
from .serializers import ChatSerializer
from .serializers import OutgoingSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_chats(request):
    if request.method == 'GET':
        chats = Chat.objects.all()
        serializer = ChatSerializer(chats, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_outgoings(request):
    if request.method == 'GET':
        outgoings = Outgoing.objects.all()
        serializer = OutgoingSerializer(outgoings, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_chat(request):
    print('USER', f'{request.user.username}')
    if request.method == 'POST':
        serializer = ChatSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def new_outgoing(request):
    print('USER', f'{request.data} {request.user.username}')
    if request.method == 'POST':
        serializer = OutgoingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def chat_details(request, pk):
    chat = get_object_or_404(Chat, pk=pk)
    if request.method == 'GET':
        serializer = ChatSerializer(chat)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        chat.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'DELETE'])
@permission_classes([IsAuthenticated])
def outgoing_details(request, pk):
    outgoing = get_object_or_404(Outgoing, pk=pk)
    if request.method == 'GET':
        serializer = OutgoingSerializer(outgoing)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        outgoing.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)