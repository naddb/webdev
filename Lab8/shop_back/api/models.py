from django.db import models
from django import forms

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)

    def to_json(self):
        return {
            'name' : self.name,
            'price' : self.price,
            'description' : self.description,
            'count' : self.count,
            'is_active' : self.is_active
        }
    
    def __str__(self):
        return self.name

# Doesn't work| Why??
class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name','price','description','count','is_active']
    # clean_ + field you wanna validate
    
    def clean_price(self):
        price = self.cleaned_data['price']
        if price <= 0:
            raise forms.ValidationError('price must be a positive number')
        return price
    
class Category(models.Model):
    name = models.CharField(max_length=255)
    products = models.ManyToManyField(Product)


    def to_json(self):
        return {
            'name': self.name,
            'products' : self.products
            }

    def __str__(self):
        return self.name
    
