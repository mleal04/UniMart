from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import User, userCard
from .serializers import UserSerializer, UserCardSerializer

#adding the user to the database for the first time
@api_view(['POST']) 
def signup(request):
    #serialize the incoming user
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#checking if the user is in the database
@api_view(['POST']) #we check items from the database 
def login(request):
    #check if the user exists in the database
    try:
        user = User.objects.get(username=request.data['username'])
        if user.password == request.data['password']:
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        else:
            return Response({'mpip install djangorestframeworkessage': 'Invalid password'}, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return Response({'message': 'User does not exist'}, status=status.HTTP_404_NOT_FOUND)

#returning the user card info to the frontend profile
@api_view(['POST']) 
def say_hi(request):
    username = request.data.get('username')
    print(username)
    if not username:
        return Response({'message': 'need username'}, status=400)

    try:
        userpost = userCard.objects.get(username=username)
        return Response({
            'full_name': userpost.full_name, 
            'university': userpost.university, 
            'major': userpost.major,
            'graduation': userpost.graduation_year,
            'fun_fact': userpost.fun_fact
        }, status=200)
    except userCard.DoesNotExist:
        return Response({'message': 'you need to add info'}, status=404)

#this is to update or create a user card
@api_view(['POST'])
def user_info(request):
    #getting items from the user request
    email = request.data.get('email')

    if not email:
        return Response({'error': 'Email is required.'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # getting items from the database
        user_card = userCard.objects.get(email=email)

        # Update the existing card with new data
        serializer = UserCardSerializer(user_card, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except userCard.DoesNotExist:
        # No card exists for this email, create a new one
        serializer = UserCardSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

