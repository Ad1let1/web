from rest_framework import mixins, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer

class ProductListAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    def get(self, request, *args, **kwargs): return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs): return self.create(request, *args, **kwargs)

class ProductDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
    def get(self, request, *args, **kwargs): return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs): return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs): return self.destroy(request, *args, **kwargs)

class CategoryListAPIView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    def get(self, request, *args, **kwargs): return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs): return self.create(request, *args, **kwargs)

class CategoryDetailAPIView(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin, generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_url_kwarg = 'category_id'
    def get(self, request, *args, **kwargs): return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs): return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs): return self.destroy(request, *args, **kwargs)

class CategoryProductsAPIView(APIView):
    def get(self, request, category_id):
        products = Product.objects.filter(category_id=category_id)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)