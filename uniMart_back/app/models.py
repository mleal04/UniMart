from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)

class userCard(models.Model):
    full_name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True, default='temp_username')
    email = models.EmailField(unique=True)
    university = models.CharField(max_length=100)
    major = models.CharField(max_length=100)
    graduation_year = models.IntegerField()
    fun_fact = models.TextField()

class ItemPost(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    seller_username = models.CharField(max_length=100)