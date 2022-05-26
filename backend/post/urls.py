from django.urls import path, include
from post import views

urlpatterns = [
    path('all/', views.get_all_posts)
]