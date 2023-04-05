from django.urls import path
from . import views


urlpatterns = [
    path('products/', views.get_products),
    path('products/<int:pk>/', views.get_product),
    path('categories/', views.get_categories),
    path('categories/<int:pk>/', views.get_category),
    path('categories/<int:id>/products/', views.get_category_products)
]