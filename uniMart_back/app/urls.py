from django.urls import path
from . import views

#urls for frontend to make the requests 
urlpatterns = [
    path('signup/', views.signup, name='signup'), #url to create request to create a new user
    path('login/', views.login, name='login'),  #url to create request to login a user
]