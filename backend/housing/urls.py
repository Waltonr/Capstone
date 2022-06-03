from django.urls import path
from housing import views


urlpatterns = [
    path('', views.add_housing),
    path('all/', views.get_all_housings)
]