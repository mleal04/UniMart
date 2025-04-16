from rest_framework import serializers
from .models import User, userCard

#make incoming data into the format used by the database 
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = userCard
        fields = '__all__'
