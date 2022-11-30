from django.urls import path, include

urlpatterns = [
    path('api/comments/', include ('comments.urls')),
]
