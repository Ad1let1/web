from django.urls import path
from api import views

urlpatterns = [
    # path('categories/', views.categories_list),
    # path('categories/<int:category_id>/', views.category_detail),
    # path('categories/<int:category_id>/products/', views.category_products),
    # path('products/', views.products_list),
    # path('products/<int:product_id>/', views.product_detail),
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
]