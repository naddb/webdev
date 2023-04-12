from django.db import models

class Category (models.Model):
    name = models.CharField(max_length=255);
    def to_json(self):
        return {
            'id': self.id,
            'name':self.name,
        }

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField(default=0)
    description = models.TextField(default='')
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)
    cat_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }
    def __str__(self):
        return f'{self.id}:{self.name}'