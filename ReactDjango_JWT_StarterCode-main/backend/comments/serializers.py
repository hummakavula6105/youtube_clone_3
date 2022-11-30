from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User

class CommentSerializer(serializers,UniqueValidator):
    class Meta:
        model = User
        fields = ('username', 'password', 'email', 'first_name', 'last_name',)

