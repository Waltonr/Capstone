from django.urls import path
from chat import views

urlpatterns = [
    path('', views.new_chat),
    path('message/', views.new_outgoing),
    path('allchats/', views.get_all_chats),
    path('allmessages/', views.get_all_outgoings),
    path('chat/<int:pk>/', views.chat_details),
    path('message/<int:pk>/', views.outgoing_details)
]