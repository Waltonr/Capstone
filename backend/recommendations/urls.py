from django.urls import path
from recommendations import views

urlpatterns = [
    path('all/', views.user_recommendations)
]