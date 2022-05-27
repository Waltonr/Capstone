from django.urls import path
from recommendations import views

urlpatterns = [
    path('', views.user_recommendations),
    path('<int:pk>/', views.recommendation_detail)
]