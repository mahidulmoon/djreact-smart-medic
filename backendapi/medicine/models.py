from django.db import models

# Create your models here.


class Medicine(models.Model):
    name=models.CharField(max_length=40)
    quantity=models.IntegerField()
    status=models.CharField(max_length=15)