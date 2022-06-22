from rest_framework import serializers
from .models import Chat
from .models import Outgoing

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat 
        fields = ['id', 'user_id']
        depth = 1

class OutgoingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chat 
        fields = ['id', 'text', 'user_id']
        depth = 1
