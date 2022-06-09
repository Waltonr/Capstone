from django.urls import path
from non_recommendations import views

urlpatterns = [
    path('', views.user_nonrecommendations),
    path('<int:pk>/', views.nonrecommendation_detail)
]