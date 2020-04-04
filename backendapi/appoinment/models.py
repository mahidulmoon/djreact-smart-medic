from django.db import models


# Create your models here.

class Appoinment(models.Model):
    ptname=models.CharField(max_length=25)
    ptage=models.CharField(max_length=25)
    ptphnno=models.CharField(max_length=25)
    ptemail=models.CharField(max_length=25)
    ptappdate=models.CharField(max_length=25)
    ptstbltime=models.CharField(max_length=25)