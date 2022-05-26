from rest_framework import serializers
from .models import Post 

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post 
        fields = ['id', 'text', 'likes', 'dislikes', 'user_id']
        depth = 1
