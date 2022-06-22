from django.urls import path
from chat import views

urlpatterns = [
    path('', views.new_chat),
    path('', views.new_outgoing),
    path('all/', views.get_all_chats),
    path('all/', views.get_all_outgoings),
    path('<int:pk>/', views.chat_details),
    path('<int:pk>/', views.outgoing_details)
]