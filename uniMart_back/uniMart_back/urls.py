from django.contrib import admin
from django.urls import path, include

#create the urls for front end to make the requests
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),  # root for data storage (to make request)
]
