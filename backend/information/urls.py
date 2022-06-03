from django.urls import path
from information import views


urlpatterns = [
    path('', views.user_information),
    path('<int:pk>/', views.edit_information)
]