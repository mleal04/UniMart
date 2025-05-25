from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

#create the urls for front end to make the requests
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app.urls')),  # root for data storage (to make request)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
