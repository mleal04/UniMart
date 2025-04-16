from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer, UserCardSerializer

#front end requesting the following action
@api_view(['POST']) #we need to add data to the database 
def signup(request):
    #serialize the incoming user
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#front end requesting to see if the user can sign in or needs an account 
@api_view(['POST']) #we check items from the database 
def login(request):
    #check if the user exists in the database
    try:
        user = User.objects.get(username=request.data['username'])
        if user.password == request.data['password']:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET']) 
def say_hi(request):
    #return the name of the user we want to greet 
    try:
        user = User.objects.get(username=request.query_params['username'])
        return Response({'message': {user.name}}, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def user_info(request):
    #return the user info we want to see 
    serializer = UserCardSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

