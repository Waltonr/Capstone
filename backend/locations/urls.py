from django.urls import path
from locations import views

urlpatterns = [
    path('', views.add_location),
    path('all/', views.get_all_locations)
]