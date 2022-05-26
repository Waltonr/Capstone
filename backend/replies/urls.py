from django.urls import path
from replies import views

urlpatterns = [
    path('', views.user_reply)
]