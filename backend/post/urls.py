from django.urls import path
from post import views

urlpatterns = [
    path('', views.user_post),
    path('all/', views.get_all_posts)
]