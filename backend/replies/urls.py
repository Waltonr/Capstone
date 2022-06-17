from django.urls import path
from replies import views

urlpatterns = [
    path('<int:pk>/', views.user_reply),
    path('all/', views.get_replies)
]