from django.http import JsonResponse
from .models import Category, Product

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.values().get(id=id)
        return JsonResponse(product)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.values().get(id=id)
        return JsonResponse(category)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse(products, safe=False)